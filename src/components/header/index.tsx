"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { MdOutlineTranslate } from "react-icons/md"
import { useLanguage } from "@/context/LanguageContext"
import { Language } from "@/lib/translations"
import { Button } from "@/components/button"
import styles from "./header.module.scss"

export const Header = () => {
	const { language, setLanguage, t, isRTL } = useLanguage()
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
	const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const handleDropdownMouseEnter = () => {
		if (dropdownTimeoutRef.current) {
			clearTimeout(dropdownTimeoutRef.current)
		}
		setIsLanguageDropdownOpen(true)
	}

	const handleDropdownMouseLeave = () => {
		dropdownTimeoutRef.current = setTimeout(() => {
			setIsLanguageDropdownOpen(false)
		}, 150)
	}

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
		setIsMobileMenuOpen(false)
	}

	const handleLanguageChange = (lang: Language) => {
		setLanguage(lang)
		setIsLanguageDropdownOpen(false)
	}

	const languages: { code: Language; icon: React.ReactNode; name: string }[] =
		[
			{
				code: "da",
				name: "Dansk",
				icon: (
					<svg width="20" height="15" viewBox="0 0 512 386">
						<rect width="512" height="386" fill="#C60C30" />
						<rect
							x="153"
							y="0"
							width="51"
							height="386"
							fill="#FFF"
						/>
						<rect
							x="0"
							y="167.5"
							width="512"
							height="51"
							fill="#FFF"
						/>
					</svg>
				),
			},
			{
				code: "en",
				name: "English",
				icon: (
					<svg width="20" height="15" viewBox="0 0 60 30">
						<clipPath id="t">
							<path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
						</clipPath>
						<path d="M0,0 v30 h60 v-30 z" fill="#00247d" />
						<path
							d="M0,0 L60,30 M60,0 L0,30"
							stroke="#fff"
							strokeWidth="6"
						/>
						<path
							d="M0,0 L60,30 M60,0 L0,30"
							stroke="#CF142B"
							strokeWidth="4"
							clipPath="url(#t)"
						/>
						<path
							d="M30,0 v30 M0,15 h60"
							stroke="#fff"
							strokeWidth="10"
						/>
						<path
							d="M30,0 v30 M0,15 h60"
							stroke="#CF142B"
							strokeWidth="6"
						/>
					</svg>
				),
			},
			{
				code: "ar",
				name: "العربية",
				icon: (
					<svg width="20" height="15" viewBox="0 0 900 600">
						<rect width="900" height="600" fill="#CE1126" />
						<rect y="200" width="900" height="200" fill="#FFF" />
						<rect y="400" width="900" height="200" fill="#007A5E" />
					</svg>
				),
			},
		]

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
						height={95}
						className={styles.logoImage}
					/>
				</div>

				<nav
					className={`${styles.nav} ${
						isMobileMenuOpen ? styles.open : ""
					}`}
				>
					<ul className={styles.navList}>
						<li>
							<button onClick={() => scrollToSection("about")}>
								{t.nav.about}
							</button>
						</li>
						<li>
							<button onClick={() => scrollToSection("services")}>
								{t.nav.services}
							</button>
						</li>
						<li>
							<button onClick={() => scrollToSection("team")}>
								{t.nav.team}
							</button>
						</li>
						<li>
							<button onClick={() => scrollToSection("booking")}>
								{t.nav.booking}
							</button>
						</li>
					</ul>

					<div className={styles.mobileActions}>
						<div className={styles.languageSwitcherMobile}>
							{languages.map((lang) => (
								<button
									key={lang.code}
									className={`${styles.langBtn} ${
										language === lang.code
											? styles.active
											: ""
									}`}
									onClick={() => setLanguage(lang.code)}
								>
									{lang.icon}
								</button>
							))}
						</div>
						<Button
							href="https://ayabila.onlinebooq.dk/"
							target="_blank"
							rel="noopener noreferrer"
							variant="primary"
						>
							{t.nav.booking}
						</Button>
					</div>
				</nav>

				<div className={styles.actions}>
					<div
						className={styles.languageDropdown}
						onMouseEnter={handleDropdownMouseEnter}
						onMouseLeave={handleDropdownMouseLeave}
					>
						<button className={styles.translateBtn}>
							<MdOutlineTranslate />
						</button>
						<div
							className={`${styles.languageDropdownMenu} ${
								isLanguageDropdownOpen ? styles.open : ""
							}`}
						>
							{languages.map((lang) => (
								<button
									key={lang.code}
									className={`${styles.langOption} ${
										language === lang.code
											? styles.active
											: ""
									}`}
									onClick={() =>
										handleLanguageChange(lang.code)
									}
								>
									{lang.icon}
									<span>{lang.name}</span>
								</button>
							))}
						</div>
					</div>
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
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label="Toggle menu"
					>
						<span
							className={`${styles.hamburger} ${
								isMobileMenuOpen ? styles.open : ""
							}`}
						>
							<span></span>
							<span></span>
							<span></span>
						</span>
					</button>
				</div>
			</div>
		</header>
	)
}
