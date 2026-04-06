"use client"

import { useEffect } from "react"

export default function TranslationWidgetComponent() {
	useEffect(() => {
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
