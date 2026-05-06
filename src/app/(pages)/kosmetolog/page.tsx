import type { Metadata } from "next"
import { kosmetologServices } from "@/lib/servicesData"
import { ServicesLayout } from "@/components/sections/services/servicesLayout"
import { LOCALE_TO_OG } from "@/lib/seo"

export const metadata: Metadata = {
	title: "Kosmetolog - AyaBilA",
	description:
		"Professionelle skønhedsbehandlinger leveret af uddannede kosmetologer i Kolding.",
	keywords: [
		"kosmetolog Kolding",
		"skønhedsbehandlinger Kolding",
		"beauty salon Kolding",
		"cosmetologist Kolding",
		"Kosmetiker Kolding",
		"AyabilA",
	],
	alternates: {
		canonical: "/kosmetolog",
	},
	openGraph: {
		title: "Kosmetolog - AyaBilA",
		description:
			"Professionelle skønhedsbehandlinger leveret af uddannede kosmetologer.",
		url: "/kosmetolog",
		siteName: "AyaBilA",
		images: [
			{
				url: "/images/logos/logo.png",
				width: 800,
				height: 600,
				alt: "AyaBilA Kosmetolog",
			},
		],
		locale: LOCALE_TO_OG.da,
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Kosmetolog - AyaBilA",
		description:
			"Professionelle skønhedsbehandlinger leveret af uddannede kosmetologer.",
		images: ["/images/logos/logo.png"],
	},
}

export default function KosmetologPage() {
	return (
		<ServicesLayout
			data={kosmetologServices}
			theme="pink"
			categoriesInitiallyOpen={false}
		/>
	)
}
