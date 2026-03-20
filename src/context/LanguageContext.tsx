"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { translations, Language } from "@/lib/translations"

type TranslationType = typeof translations.da

interface LanguageContextType {
	language: Language
	setLanguage: (lang: Language) => void
	t: TranslationType
	isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
)

interface LanguageProviderProps {
	children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
	const [language, setLanguage] = useState<Language>("da") // Default to Danish
	const [isLoaded, setIsLoaded] = useState(false)

	// Load language preference from localStorage on mount, default to Danish
	useEffect(() => {
		const savedLanguage = localStorage.getItem("language") as Language | null
		const isValidLanguage = savedLanguage && ["da", "en", "ar", "de"].includes(savedLanguage)
		if (isValidLanguage) {
			setLanguage(savedLanguage as Language)
		}
		// If no saved language, remains "da" (Danish)
		setIsLoaded(true)
	}, [])

	// Save language preference to localStorage when it changes
	const handleSetLanguage = (lang: Language) => {
		setLanguage(lang)
		localStorage.setItem("language", lang)
	}

	const t = translations[language]
	const isRTL = language === "ar"

	// Don't render children until language is loaded to prevent hydration mismatches
	if (!isLoaded) {
		return null
	}

	return (
		<LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isRTL }}>
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
