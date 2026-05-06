import { useEffect, useState } from "react"

export function useMobile(breakpoint = 900) {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`)
		const updateMatch = () => setIsMobile(mediaQuery.matches)

		updateMatch()
		if (mediaQuery.addEventListener) {
			mediaQuery.addEventListener("change", updateMatch)
		} else {
			mediaQuery.addListener(updateMatch)
		}

		return () => {
			if (mediaQuery.removeEventListener) {
				mediaQuery.removeEventListener("change", updateMatch)
			} else {
				mediaQuery.removeListener(updateMatch)
			}
		}
	}, [breakpoint])

	return isMobile
}
