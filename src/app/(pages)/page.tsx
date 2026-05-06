import type { Metadata } from "next"
import { HomeSections } from "@/components/sections/home"
import { LOCALE_META, LOCALE_TO_OG, getLocaleAlternates } from "@/lib/seo"

const { title, description, keywords } = LOCALE_META.da

export const metadata: Metadata = {
	title,
	description,
	keywords,
	alternates: {
		canonical: "/",
		languages: getLocaleAlternates(),
	},
	openGraph: {
		title,
		description,
		url: "/",
		siteName: "AyaBilA",
		images: [
			{
				url: "/images/logos/logo.png",
				width: 800,
				height: 600,
				alt: "AyaBilA Logo",
			},
		],
		locale: LOCALE_TO_OG.da,
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: ["/images/logos/logo.png"],
	},
}

export default function Home() {
	return <HomeSections />
}
