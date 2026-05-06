import type { Metadata } from "next"
import { HomeSections } from "@/components/sections/home"
import {
	DEFAULT_LOCALE,
	LOCALES,
	LOCALE_META,
	LOCALE_TO_OG,
	getLocaleAlternates,
	getLocalePath,
	isLocale,
} from "@/lib/seo"

type PageProps = {
	params: { locale: string }
}

export const dynamicParams = false

export function generateStaticParams() {
	return LOCALES.map((locale) => ({ locale }))
}

export function generateMetadata({ params }: PageProps): Metadata {
	const locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE
	const { title, description, keywords } = LOCALE_META[locale]
	const path = getLocalePath(locale) || "/"

	return {
		title,
		description,
		keywords,
		alternates: {
			canonical: path,
			languages: getLocaleAlternates(),
		},
		openGraph: {
			title,
			description,
			url: path,
			siteName: "AyaBilA",
			images: [
				{
					url: "/images/logos/logo.png",
					width: 800,
					height: 600,
					alt: "AyaBilA Logo",
				},
			],
			locale: LOCALE_TO_OG[locale],
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: ["/images/logos/logo.png"],
		},
	}
}

export default function LocaleHomePage() {
	return <HomeSections />
}
