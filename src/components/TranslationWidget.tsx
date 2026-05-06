"use client"

import { useEffect } from "react"
import { TRANSLATION_SEEDS } from "@/lib/translationSeeds"

export default function TranslationWidgetComponent() {
	useEffect(() => {
		// Seed localStorage with known translations before the widget initialises.
		// The widget reads from localStorage on every lookup, so cache hits are
		// served instantly with zero API calls — even on a user's very first visit.
		// Existing entries (from prior widget usage) take precedence over the seed.
		for (const [key, seed] of Object.entries(TRANSLATION_SEEDS)) {
			try {
				const existing = JSON.parse(localStorage.getItem(key) ?? "{}") as Record<string, string>
				localStorage.setItem(key, JSON.stringify({ ...seed, ...existing }))
			} catch {
				// Private browsing or storage quota exceeded — skip silently.
			}
		}

		const publicKey = process.env.NEXT_PUBLIC_TRANSLATION_WIDGET_KEY

		if (!publicKey) {
			console.warn("Translation widget key not configured")
			return
		}

		import("translation-widget")
			.then(({ default: TranslationWidget }) => {
				TranslationWidget(publicKey, {
					pageLanguage: "da",
					position: "bottom-right",
					autoDetectLanguage: false,
					showUI: false,
					theme: {
						baseColor: "#ffffff",
						textColor: "#1a1a1a",
					},
				})
			})
			.catch((err) => {
				console.error("Failed to load translation-widget", err)
			})
	}, [])

	return null
}
