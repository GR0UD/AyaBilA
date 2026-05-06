import { useEffect } from "react"

export function usePageRefreshOnReturn() {
	useEffect(() => {
		const returningKey = "ayabila:returning"
		const reloadedKey = "ayabila:reloaded"

		const handlePageHide = () => {
			sessionStorage.setItem(returningKey, "1")
		}

		const handlePageShow = (event: PageTransitionEvent) => {
			// Skip reload loop after a forced reload
			if (sessionStorage.getItem(reloadedKey) === "1") {
				sessionStorage.removeItem(reloadedKey)
				sessionStorage.removeItem(returningKey)
				return
			}

			const shouldReload =
				event.persisted || sessionStorage.getItem(returningKey) === "1"
			if (shouldReload) {
				sessionStorage.setItem(reloadedKey, "1")
				sessionStorage.removeItem(returningKey)
				window.scrollTo(0, 0)
				window.location.reload()
			}
		}

		window.addEventListener("pagehide", handlePageHide)
		window.addEventListener("pageshow", handlePageShow)

		return () => {
			window.removeEventListener("pagehide", handlePageHide)
			window.removeEventListener("pageshow", handlePageShow)
		}
	}, [])
}
