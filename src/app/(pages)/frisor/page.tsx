import type { Metadata } from "next"
import { frisorServices } from "@/lib/servicesData"
import { ServicesLayout } from "@/components/sections/services/servicesLayout"

export const metadata: Metadata = {
	title: "Frisør - AyaBilA",
	description:
		"Professionelle frisørbehandlinger og barbering leveret af erfarne frisører i Kolding.",
	openGraph: {
		title: "Frisør - AyaBilA",
		description:
			"Professionelle frisørbehandlinger og barbering leveret af erfarne frisører.",
		url: "https://ayabila.dk/frisor",
		siteName: "AyaBilA",
		images: [
			{
				url: "/images/logos/logo.png",
				width: 800,
				height: 600,
				alt: "AyaBilA Frisør",
			},
		],
		locale: "da_DK",
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
