import { useEffect, useState } from "react"

type Theme = "blue" | "pink"

export function useTheme(preferred?: Theme, fallback: Theme = "blue") {
	const [theme, setTheme] = useState<Theme>(preferred ?? fallback)

	useEffect(() => {
		if (preferred) {
			setTheme(preferred)
			return
		}

		const attr = document.documentElement.getAttribute("data-theme")
		if (attr === "blue" || attr === "pink") {
			setTheme(attr)
		} else {
			setTheme(fallback)
		}
	}, [preferred, fallback])

	return theme
}
