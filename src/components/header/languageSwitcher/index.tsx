"use client"

import { type FC, useState, useRef, useCallback, useEffect } from "react"
import { MdLanguage } from "react-icons/md"
import { useLanguage } from "@/context/LanguageContext"
import type { Language } from "@/lib/translations"
import { LANGUAGE_CONFIG } from "@/lib/languages"
import styles from "./languageSwitcher.module.scss"
import "flag-icons/css/flag-icons.min.css"

interface LanguageSwitcherProps {
	variant?: "desktop" | "mobile"
}

const FLAG_CODES: Record<Language, string> = {
	da: "dk",
	en: "gb",
	ar: "sa",
	de: "de",
}

const LANGUAGE_LABELS: Record<Language, string> = {
	da: "DK",
	en: "EN",
	ar: "AR",
	de: "DE",
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
	const { language, setLanguage, isRTL } = useLanguage()
	const [isOpen, setIsOpen] = useState(false)
	const [isTranslating, setIsTranslating] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)

	const handleLanguageChange = useCallback(
		(lang: Language) => {
			// Don't translate if already in that language
			if (lang === language) {
				setIsOpen(false)
				return
			}

			// Prevent concurrent translations
			if (isTranslating) return

			setLanguage(lang)
			setIsOpen(false)
			setIsTranslating(true)

			// Trigger page translation via translation-widget
			if (typeof window !== "undefined" && window.translate) {
				window.translate(
					lang,
					(res) => {
						console.log(`Page translated to ${lang}:`, res)
						setIsTranslating(false)
					},
					(err) => {
						console.error(`Translation error for ${lang}:`, err)
						setIsTranslating(false)
					},
				)
			} else {
				setIsTranslating(false)
			}
		},
		[language, setLanguage, isTranslating],
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
			<div
				className={styles.mobileSwitcher}
				data-notranslate
				dir={isRTL ? "rtl" : "ltr"}
			>
				{LANGUAGE_CONFIG.map((lang) => (
					<button
						key={lang.code}
						className={`${styles.mobileBtn} ${language === lang.code ? styles.active : ""}`}
						onClick={() => handleLanguageChange(lang.code)}
						disabled={isTranslating}
						data-notranslate
						aria-label={`Switch to ${lang.name}`}
						title={lang.name}
					>
						<span
							className={`fi fi-${FLAG_CODES[lang.code]} ${styles.mobileFlag}`}
							aria-hidden="true"
							data-notranslate
						/>
						<span data-notranslate className="notranslate">
							{lang.abbreviation}
						</span>
					</button>
				))}
			</div>
		)
	}

	return (
		<div
			className={styles.switcher}
			ref={containerRef}
			dir={isRTL ? "rtl" : "ltr"}
		>
			<button
				className={styles.trigger}
				onClick={() => setIsOpen((prev) => !prev)}
				aria-expanded={isOpen}
				aria-haspopup="listbox"
				aria-label="Language selector"
				data-notranslate
			>
				<MdLanguage className={styles.globeIcon} aria-hidden="true" />
				<span className={styles.languageText} data-notranslate>
					DK/EN
				</span>
				<ChevronIcon isOpen={isOpen} />
			</button>

			<div
				className={`${styles.dropdown} ${isOpen ? styles.open : ""} notranslate`}
				role="listbox"
				aria-label="Available languages"
				data-notranslate
			>
				{LANGUAGE_CONFIG.map((lang) => (
					<button
						key={lang.code}
						role="option"
						aria-selected={language === lang.code}
						className={`${styles.option} ${language === lang.code ? styles.active : ""}`}
						onClick={() => handleLanguageChange(lang.code)}
						disabled={isTranslating}
						data-notranslate
						aria-label={`${lang.name}${language === lang.code ? " (current)" : ""}`}
						title={lang.name}
					>
						<span
							className={`fi fi-${FLAG_CODES[lang.code]} ${styles.dropdownFlag}`}
							aria-hidden="true"
							data-notranslate
						/>
						<span
							className={`${styles.optionLabel} notranslate`}
							data-notranslate
						>
							{lang.name}
						</span>
						{language === lang.code && <CheckIcon />}
					</button>
				))}
			</div>
		</div>
	)
}
