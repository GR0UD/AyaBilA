"use client"

import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react"
import type { Language } from "@/lib/languages"
import { LOCALES } from "@/lib/seo"
import { usePageRefreshOnReturn } from "@/hooks/usePageRefreshOnReturn"

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
	initialLanguage?: Language
}

export function LanguageProvider({
	children,
	initialLanguage = "da",
}: LanguageProviderProps) {
	const [language, setLanguage] = useState<Language>(initialLanguage)

	// Refresh page when returning from other sites
	usePageRefreshOnReturn()

	// Hydrate language from localStorage after client mounts
	useEffect(() => {
		const saved = localStorage.getItem("language") as Language | null
		const valid = saved && (LOCALES as readonly string[]).includes(saved)
		setLanguage(valid ? (saved as Language) : initialLanguage)
	}, [initialLanguage])

	// Save language preference to localStorage when it changes
	const handleSetLanguage = (lang: Language) => {
		setLanguage(lang)
		if (typeof window !== "undefined") {
			localStorage.setItem("language", lang)
		}
	}

	const isRTL = language === "ar"

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
