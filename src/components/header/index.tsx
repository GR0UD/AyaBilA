"use client"

import { type FC, useState, useEffect, useCallback } from "react"
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
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50)
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const scrollToSection = useCallback((sectionId: string) => {
		document
			.getElementById(sectionId)
			?.scrollIntoView({ behavior: "smooth" })
		setIsMobileMenuOpen(false)
	}, [])

	return (
		<header
			className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
		>
			<div className={styles.container}>
				<div
					className={styles.logo}
					onClick={() => scrollToSection("hero")}
				>
					<Image
						src="/logo.png"
						alt="AyabilA"
						width={110}
						height={92}
						className={styles.logoImage}
					/>
				</div>

				<nav className={styles.nav}>
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
					<Button
						href="https://ayabila.onlinebooq.dk/"
						target="_blank"
						rel="noopener noreferrer"
						variant="primary"
						className={styles.bookBtn}
					>
						{t.nav.booking}
					</Button>
					<LanguageSwitcher variant="desktop" />

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
