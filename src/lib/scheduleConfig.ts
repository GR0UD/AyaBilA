import type { Language } from "@/lib/languages"

export type { Language }

/** Maps language codes to their BCP 47 locale strings */
const LOCALE_MAP: Record<Language, string> = {
	en: "en-US",
	da: "da-DK",
	ar: "ar-SA",
	de: "de-DE",
}

/**
 * Opening hours per day. `time` is null when the shop is closed.
 * dayIndex follows the JS convention: 0 = Sunday, 1 = Monday, ..., 6 = Saturday.
 */
export const SCHEDULE_CONFIG = {
	schedule: [
		{ dayIndex: 1, time: "10:00 - 17:00" }, // Monday
		{ dayIndex: 2, time: "10:00 - 17:00" }, // Tuesday
		{ dayIndex: 3, time: "10:00 - 17:00" }, // Wednesday
		{ dayIndex: 4, time: "10:00 - 18:00" }, // Thursday
		{ dayIndex: 5, time: "10:00 - 18:00" }, // Friday
		{ dayIndex: 6, time: "10:00 - 15:30" }, // Saturday
		{ dayIndex: 0, time: null }, // Sunday (closed)
	],
	closedLabel: {
		da: "Lukket",
		en: "Closed",
		ar: "مغلق",
		de: "Geschlossen",
	},
} as const

/**
 * Returns the localised day name for a given day index.
 * Uses a known Sunday (Jan 4, 1970) as an anchor so adding dayIndex
 * always lands on the correct weekday.
 *
 * @param dayIndex - 0 = Sunday … 6 = Saturday
 * @param language - Supported language code
 */
export const getDayName = (dayIndex: number, language: Language): string => {
	// Jan 4, 1970 was a Sunday, so (4 + dayIndex) always hits the right weekday
	const date = new Date(1970, 0, 4 + dayIndex)
	return new Intl.DateTimeFormat(LOCALE_MAP[language], {
		weekday: "long",
	}).format(date)
}

/**
 * Returns the "Closed" label in the given language.
 *
 * @param language - Supported language code
 */
export const getClosedLabel = (language: Language): string =>
	SCHEDULE_CONFIG.closedLabel[language]
