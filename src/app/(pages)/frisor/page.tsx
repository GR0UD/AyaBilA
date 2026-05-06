import type { Metadata } from "next"
import { frisorServices } from "@/lib/servicesData"
import { ServicesLayout } from "@/components/sections/services/servicesLayout"
import { LOCALE_TO_OG } from "@/lib/seo"

export const metadata: Metadata = {
	title: "Frisør - AyaBilA",
	description:
		"Professionelle frisørbehandlinger og barbering leveret af erfarne frisører i Kolding.",
	keywords: [
		"frisør Kolding",
		"herrefrisør Kolding",
		"barber Kolding",
		"hairdresser Kolding",
		"Friseur Kolding",
		"AyabilA",
	],
	alternates: {
		canonical: "/frisor",
	},
	openGraph: {
		title: "Frisør - AyaBilA",
		description:
			"Professionelle frisørbehandlinger og barbering leveret af erfarne frisører.",
		url: "/frisor",
		siteName: "AyaBilA",
		images: [
			{
				url: "/images/logos/logo.png",
				width: 800,
				height: 600,
				alt: "AyaBilA Frisør",
			},
		],
		locale: LOCALE_TO_OG.da,
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Frisør - AyaBilA",
		description:
			"Professionelle frisørbehandlinger og barbering leveret af erfarne frisører.",
		images: ["/images/logos/logo.png"],
	},
}

export default function FrisorPage() {
	return (
		<ServicesLayout
			data={frisorServices}
			theme="blue"
			categoriesInitiallyOpen={false}
		/>
	)
}
