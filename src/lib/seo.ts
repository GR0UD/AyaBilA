export type Locale = "da" | "en" | "de" | "ar"

export const DEFAULT_LOCALE: Locale = "da"
export const LOCALES: Locale[] = ["da", "en", "de", "ar"]

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ayabila.dk"

export const BUSINESS = {
	name: "AyaBilA Frisør & Kosmetolog",
	legalName: "AyaBilA Frisør & Kosmetolog",
	cvr: "45102459",
	phone: "+45 60 60 99 27",
	address: {
		street: "Kongebrogade 29",
		postalCode: "6000",
		city: "Kolding",
		country: "DK",
	},
}

export const LOCALE_TO_OG = {
	da: "da_DK",
	en: "en_US",
	de: "de_DE",
	ar: "ar_DK",
} as const

export const LOCALE_META = {
	da: {
		title: "AyaBilA - Frisør & Kosmetolog i Kolding",
		description:
			"Eksklusiv frisør og kosmetolog i Kolding, Danmark. Herre- og dameklip, skønhedsbehandlinger og personlig service.",
		keywords: [
			"frisør Kolding",
			"kosmetolog Kolding",
			"herrefrisør Kolding",
			"damefrisør Kolding",
			"skønhedsbehandlinger Kolding",
			"AyabilA",
		],
	},
	en: {
		title: "AyaBilA - Hairdresser & Beauty Salon in Kolding",
		description:
			"Professional hairdresser and cosmetologist in Kolding, Denmark. Men's and women's cuts, beauty treatments, and caring service.",
		keywords: [
			"hairdresser Kolding",
			"beauty salon Kolding",
			"cosmetologist Kolding",
			"barber Kolding",
			"women's haircut Kolding",
			"AyabilA",
		],
	},
	de: {
		title: "AyaBilA - Friseur & Kosmetikerin in Kolding",
		description:
			"Professioneller Friseur und Kosmetiker in Kolding, Danemark. Damen- und Herrenhaarschnitte, Beauty-Behandlungen und persönlicher Service.",
		keywords: [
			"Friseur Kolding",
			"Kosmetiker Kolding",
			"Friseursalon Kolding",
			"Beauty Salon Kolding",
			"Damenhaarschnitt Kolding",
			"AyabilA",
		],
	},
	ar: {
		title: "AyaBilA - صالون حلاقة وتجميل في كولدينغ",
		description:
			"صالون حلاقة وتجميل محترف في كولدينغ، الدنمارك. قص شعر للرجال والنساء، وخدمات تجميل بعناية واحتراف.",
		keywords: [
			"صالون تجميل كولدينغ",
			"حلاق كولدينغ",
			"تجميل كولدينغ",
			"قص شعر نسائي كولدينغ",
			"قص شعر رجالي كولدينغ",
			"AyabilA",
		],
	},
} as const

export function getLocalePath(locale: Locale) {
	return locale === DEFAULT_LOCALE ? "" : `/${locale}`
}

export function getLocaleAlternates() {
	return Object.fromEntries(
		LOCALES.map((locale) => {
			const path = getLocalePath(locale) || "/"
			return [locale, path]
		}),
	)
}

export function getLocaleDir(locale: Locale) {
	return locale === "ar" ? "rtl" : "ltr"
}

export function isLocale(value?: string): value is Locale {
	return LOCALES.includes(value as Locale)
}
