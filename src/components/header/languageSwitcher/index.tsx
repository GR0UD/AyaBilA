"use client"

import { type FC, useState, useRef, useCallback, useEffect } from "react"
import { MdLanguage } from "react-icons/md"
import { useLanguage } from "@/context/LanguageContext"
import type { Language } from "@/lib/languages"
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
	// Tracks any scheduled background translate so it can be cancelled before a
	// new user-initiated translate starts, avoiding "already in progress" errors.
	const bgHandleRef = useRef<number | null>(null)
	const bgTargetLangRef = useRef<Language | null>(null)

	const handleLanguageChange = useCallback(
		async (lang: Language) => {
			if (lang === language || isTranslating) {
				setIsOpen(false)
				return
			}

			// Cancel any pending background translate before taking the widget lock.
			if (bgHandleRef.current !== null) {
				if (typeof cancelIdleCallback !== "undefined") {
					cancelIdleCallback(bgHandleRef.current)
				} else {
					clearTimeout(bgHandleRef.current)
				}
				bgHandleRef.current = null
				bgTargetLangRef.current = null
			}

			setLanguage(lang)
			setIsOpen(false)
			setIsTranslating(true)
			document.body.classList.add("translating")

			if (!window.translate) {
				document.body.classList.remove("translating")
				setIsTranslating(false)
				return
			}

			// Add notranslate class to sections entirely below the viewport so the
			// widget skips them on the first pass — the widget respects .notranslate
			// via closest(), so all descendant text nodes are skipped too.
			const offScreen: Element[] = []
			document.querySelectorAll("section, footer").forEach((el) => {
				if (el.getBoundingClientRect().top > window.innerHeight + 50) {
					el.classList.add("notranslate")
					offScreen.push(el)
				}
			})

			// Yield two animation frames so the fade CSS paints before any
			// synchronous DOM work (critical for cached translations which update
			// all text nodes in one tight loop).
			await new Promise<void>((resolve) =>
				requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
			)

			const cleanup = () => {
				offScreen.forEach((el) => el.classList.remove("notranslate"))
				document.body.classList.remove("translating")
				setIsTranslating(false)
			}

			const finish = () => {
				cleanup()

				// Translate off-screen sections silently in the background.
				// Already-translated visible nodes are skipped by the widget's cache,
				// so only the newly exposed sections do any real work.
				if (offScreen.length > 0) {
					const targetLang = lang
					bgTargetLangRef.current = targetLang

					const run = () => {
						bgHandleRef.current = null
						// Skip if user has since switched to a different language.
						if (bgTargetLangRef.current !== targetLang) return
						window.translate?.(targetLang, () => {}, () => {})
					}

					bgHandleRef.current =
						typeof requestIdleCallback !== "undefined"
							? requestIdleCallback(run)
							: window.setTimeout(run, 800)
				}
			}

			// Safety release if the callback never fires (network stall etc.)
			const safetyTimer = setTimeout(cleanup, 10_000)

			// If a background translate happens to be actively running when we reach
			// this point, the widget hard-rejects us. Retry a few times until it frees.
			const doTranslate = (attempt = 0) => {
				window.translate!(
					lang,
					() => {
						clearTimeout(safetyTimer)
						finish()
					},
					(err) => {
						const busy =
							err instanceof Error &&
							err.message.includes("already in progress")
						if (busy && attempt < 4) {
							setTimeout(() => doTranslate(attempt + 1), 150)
						} else {
							clearTimeout(safetyTimer)
							if (!busy) console.error(`Translation error for ${lang}:`, err)
							finish()
						}
					},
				)
			}

			doTranslate()
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
