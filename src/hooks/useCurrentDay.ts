import { useLayoutEffect, useState } from "react"

/**
 * Hook to get the current day of the week on the client side.
 * Returns null during SSR to prevent hydration mismatches.
 * @returns The current day number (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
 */
export const useCurrentDay = (): number | null => {
	const [currentDay, setCurrentDay] = useState<number | null>(null)

	useLayoutEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setCurrentDay(new Date().getDay())
	}, [])

	return currentDay
}
