import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ServicesSection } from "@/components/sections/services"
import { GallerySection } from "@/components/sections/gallery"
import { ReviewsSection } from "@/components/sections/reviews"

export const metadata: Metadata = {
	title: "AyaBilA - Frisør & Kosmetolog",
	description:
		"Eksklusiv herre- og damefrisør i hjertet af Kolding. Professionel frisør og kosmetolog – Din stil vores passion.",
	openGraph: {
		title: "AyaBilA - Frisør & Kosmetolog",
		description:
			"Professionel frisør og kosmetolog – vi skaber stilfulde looks og forkælende behandlinger.",
		url: "https://ayabila.dk",
		siteName: "AyaBilA",
		images: [
			{
				url: "/images/logos/logo.png",
				width: 800,
				height: 600,
				alt: "AyaBilA Logo",
			},
		],
		locale: "da_DK",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "AyaBilA - Frisør & Kosmetolog",
		description:
			"Professionel frisør og kosmetolog – vi skaber stilfulde looks og forkælende behandlinger.",
		images: ["/images/logos/logo.png"],
	},
}

export default function Home() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<GallerySection />
			<ReviewsSection />
		</>
	)
}
