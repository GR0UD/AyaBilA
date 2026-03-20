"use client"

import { type FC, useState, useEffect, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"
import { Button } from "@/components/button"
import { LanguageSwitcher } from "./languageSwitcher"
import { MobileNav } from "./mobileNav"
import styles from "./header.module.scss"

const NAV_LINKS = [
	{ id: "about", translationKey: "about" },
	{ id: "services", translationKey: "behandlinger" },
	{ id: "footer", translationKey: "kontakt" },
] as const

export type NavLink = (typeof NAV_LINKS)[number]

export const Header: FC = () => {
	const { t } = useLanguage()
	const pathname = usePathname()
	const router = useRouter()
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	// Check if we're on frisor or kosmetolog pages
	const isServicesPage = pathname.includes("/frisor") || pathname.includes("/kosmetolog")

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
			// Close mobile menu when scrolling
			if (isMobileMenuOpen) {
				setIsMobileMenuOpen(false)
			}
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [isMobileMenuOpen])

	const scrollToSection = useCallback((sectionId: string) => {
		document
			.getElementById(sectionId)
			?.scrollIntoView({ behavior: "smooth" })
		setIsMobileMenuOpen(false)
	}, [])

	const handleLogoClick = useCallback(() => {
		if (pathname === "/") {
			scrollToSection("hero")
		} else {
			router.push("/")
		}
	}, [pathname, router, scrollToSection])

	return (
		<header
			className={`${styles.header} ${isScrolled || isServicesPage || isMobileMenuOpen ? styles.scrolled : ""}`}
		>
			<div className={styles.container}>
				<div
					className={styles.logo}
					onClick={handleLogoClick}
				>
					<Image
						src="/logo.png"
						alt="AyabilA"
						width={110}
						height={92}
						className={styles.logoImage}
					/>
				</div>

				<nav className={`${styles.nav} ${isServicesPage ? styles.hidden : ""}`}>
					<ul className={styles.navList}>
						{NAV_LINKS.map((link) => (
							<li key={link.id}>
								<button
									onClick={() => scrollToSection(link.id)}
								>
									{t.nav[link.translationKey]}
								</button>
							</li>
						))}
					</ul>
				</nav>

				<div className={styles.actions}>
					<LanguageSwitcher variant="desktop" />
					<Button
						href="https://ayabila.onlinebooq.dk/"
						target="_blank"
						rel="noopener noreferrer"
						variant="primary"
						className={styles.bookBtn}
					>
						{t.nav.booking}
					</Button>

					<button
						className={styles.mobileMenuBtn}
						onClick={() => setIsMobileMenuOpen((o) => !o)}
						aria-label="Toggle menu"
					>
						<span
							className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ""}`}
						>
							<span />
							<span />
							<span />
						</span>
					</button>
				</div>
			</div>

			<MobileNav
				isOpen={isMobileMenuOpen}
				onClose={() => setIsMobileMenuOpen(false)}
				navLinks={NAV_LINKS}
				onScrollToSection={scrollToSection}
			/>
		</header>
	)
}
