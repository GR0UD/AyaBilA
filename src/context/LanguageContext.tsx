"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
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
	const [language, setLanguage] = useState<Language>("da")

	const t = translations[language]
	const isRTL = language === "ar"

	return (
		<LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
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
