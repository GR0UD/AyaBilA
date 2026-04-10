"use client"

import React, {
	createContext,
	useContext,
	useState,
	useLayoutEffect,
	ReactNode,
} from "react"
import type { Language } from "@/lib/languages"

interface LanguageContextType {
	language: Language
	setLanguage: (lang: Language) => void
	isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
)

interface LanguageProviderProps {
	children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
	const [language, setLanguage] = useState<Language>(() => {
		if (typeof window === "undefined") return "da"
		const savedLanguage = localStorage.getItem(
			"language",
		) as Language | null
		const isValidLanguage =
			savedLanguage && ["da", "en", "ar", "de"].includes(savedLanguage)
		return isValidLanguage ? (savedLanguage as Language) : "da"
	})
	const [isLoaded, setIsLoaded] = useState(false)

	// Set isLoaded after hydration to prevent hydration mismatches
	useLayoutEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setIsLoaded(true)
	}, [])

	// Save language preference to localStorage when it changes
	const handleSetLanguage = (lang: Language) => {
		setLanguage(lang)
		localStorage.setItem("language", lang)
	}

	const isRTL = language === "ar"

	// Don't render children until language is loaded to prevent hydration mismatches
	if (!isLoaded) {
		return null
	}

	return (
		<LanguageContext.Provider
			value={{ language, setLanguage: handleSetLanguage, isRTL }}
		>
			{children}
		</LanguageContext.Provider>
	)
}

export function useLanguage() {
	const context = useContext(LanguageContext)
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider")
	}
	return context
}
