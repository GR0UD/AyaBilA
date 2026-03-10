"use client"

import { type FC, useState, useRef, useCallback, useEffect } from "react"
import { useLanguage } from "@/context/LanguageContext"
import type { Language } from "@/lib/translations"
import { LANGUAGE_CONFIG } from "@/lib/languages"
import styles from "./languageSwitcher.module.scss"

interface LanguageSwitcherProps {
	variant?: "desktop" | "mobile"
}

const FLAG_ICONS: Record<Language, React.ReactNode> = {
	da: (
		<svg viewBox="0 0 512 386">
			<rect width="512" height="386" fill="#C60C30" />
			<rect x="153" y="0" width="51" height="386" fill="#FFF" />
			<rect x="0" y="167.5" width="512" height="51" fill="#FFF" />
		</svg>
	),
	en: (
		<svg viewBox="0 0 60 30">
			<clipPath id="flag-t">
				<path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
			</clipPath>
			<path d="M0,0 v30 h60 v-30 z" fill="#00247d" />
			<path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
			<path
				d="M0,0 L60,30 M60,0 L0,30"
				stroke="#CF142B"
				strokeWidth="4"
				clipPath="url(#flag-t)"
			/>
			<path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
			<path d="M30,0 v30 M0,15 h60" stroke="#CF142B" strokeWidth="6" />
		</svg>
	),
	ar: (
		<svg viewBox="0 0 900 600">
			<rect width="900" height="600" fill="#CE1126" />
			<rect y="200" width="900" height="200" fill="#FFF" />
			<rect y="400" width="900" height="200" fill="#007A5E" />
		</svg>
	),
	de: (
		<svg viewBox="0 0 5 3">
			<rect width="5" height="1" fill="#000" />
			<rect y="1" width="5" height="1" fill="#D00" />
			<rect y="2" width="5" height="1" fill="#FFCE00" />
		</svg>
	),
}

const ChevronIcon: FC<{ isOpen: boolean }> = ({ isOpen }) => (
	<svg
		className={`${styles.chevron} ${isOpen ? styles.flipped : ""}`}
		viewBox="0 0 10 6"
		fill="none"
	>
		<path
			d="M1 1l4 4 4-4"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

const CheckIcon: FC = () => (
	<svg className={styles.checkIcon} viewBox="0 0 12 10" fill="none">
		<path
			d="M1 5.5L4 8.5L11 1.5"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
	variant = "desktop",
}) => {
	const { language, setLanguage } = useLanguage()
	const [isOpen, setIsOpen] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)

	const handleLanguageChange = useCallback(
		(lang: Language) => {
			setLanguage(lang)
			setIsOpen(false)
		},
		[setLanguage],
	)

	// Close dropdown when clicking outside
	useEffect(() => {
		if (!isOpen) return

		const handleClickOutside = (e: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(e.target as Node)
			) {
				setIsOpen(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () =>
			document.removeEventListener("mousedown", handleClickOutside)
	}, [isOpen])

	const currentLang = LANGUAGE_CONFIG.find((l) => l.code === language)

	if (variant === "mobile") {
		return (
			<div className={styles.mobileSwitcher}>
				{LANGUAGE_CONFIG.map((lang) => (
					<button
						key={lang.code}
						className={`${styles.mobileBtn} ${language === lang.code ? styles.active : ""}`}
						onClick={() => handleLanguageChange(lang.code)}
					>
						<span className={styles.flag}>
							{FLAG_ICONS[lang.code]}
						</span>
						{lang.abbreviation}
					</button>
				))}
			</div>
		)
	}

	return (
		<div className={styles.switcher} ref={containerRef}>
			<button
				className={styles.trigger}
				onClick={() => setIsOpen((prev) => !prev)}
				aria-expanded={isOpen}
				aria-haspopup="listbox"
			>
				<span className={styles.flag}>{FLAG_ICONS[language]}</span>
				<ChevronIcon isOpen={isOpen} />
			</button>

			<div
				className={`${styles.dropdown} ${isOpen ? styles.open : ""}`}
				role="listbox"
			>
				{LANGUAGE_CONFIG.map((lang) => (
					<button
						key={lang.code}
						role="option"
						aria-selected={language === lang.code}
						className={`${styles.option} ${language === lang.code ? styles.active : ""}`}
						onClick={() => handleLanguageChange(lang.code)}
					>
						<span className={styles.flag}>
							{FLAG_ICONS[lang.code]}
						</span>
						<span className={styles.optionLabel}>{lang.name}</span>
						{language === lang.code && <CheckIcon />}
					</button>
				))}
			</div>
		</div>
	)
}
