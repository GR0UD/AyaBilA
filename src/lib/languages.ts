export type Language = "da" | "en" | "ar" | "de"

export const LANGUAGE_CONFIG: {
	code: Language
	name: string
	abbreviation: string
}[] = [
	{
		code: "da",
		name: "Danish",
		abbreviation: "DK",
	},
	{
		code: "en",
		name: "English",
		abbreviation: "EN",
	},
	{
		code: "ar",
		name: "Arabic",
		abbreviation: "AR",
	},
	{
		code: "de",
		name: "Deutsch",
		abbreviation: "DE",
	},
]
