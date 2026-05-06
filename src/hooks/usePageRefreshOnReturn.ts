import { useEffect } from "react"

export function usePageRefreshOnReturn() {
	useEffect(() => {
		const handlePageShow = (event: PageTransitionEvent) => {
			// Only force reload when restored from bfcache
			if (event.persisted) {
				window.scrollTo(0, 0)
				window.location.reload()
			}
		}

		window.addEventListener("pageshow", handlePageShow)

		return () => {
			window.removeEventListener("pageshow", handlePageShow)
		}
	}, [])
}
