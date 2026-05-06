import { useEffect } from "react"

export function usePageRefreshOnReturn() {
	useEffect(() => {
		const returningKey = "ayabila:returning"

		const handlePageHide = () => {
			sessionStorage.setItem(returningKey, "1")
		}

		const handlePageShow = (event: PageTransitionEvent) => {
			const shouldReload =
				event.persisted || sessionStorage.getItem(returningKey) === "1"
			if (shouldReload) {
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
