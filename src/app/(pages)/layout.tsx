import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { LanguageProvider } from "@/context/LanguageContext"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import TranslationWidget from "@/components/TranslationWidget"

import "@/styles/main.scss"

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
})

const metadataBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ayabila.dk"

export const metadata: Metadata = {
	metadataBase: new URL(metadataBaseUrl),
	title: "AyabilA - Frisør & Kosmetolog",
	description:
		"Eksklusiv herre- og damefrisør i hjertet af Kolding. Professionel frisør og kosmetolog – Din stil vores passion.",
	icons: {
		icon: "/images/logos/logo.png",
	},
	openGraph: {
		title: "AyabilA - Frisør & Kosmetolog",
		description:
			"Professionel frisør og kosmetolog – vi skaber stilfulde looks og forkælende behandlinger.",
		siteName: "AyabilA",
		images: [
			{
				url: "/images/logos/logo.png",
				width: 800,
				height: 600,
				alt: "AyabilA Logo",
			},
		],
		locale: "da_DK",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "AyabilA - Frisør & Kosmetolog",
		description:
			"Professionel frisør og kosmetolog – vi skaber stilfulde looks og forkælende behandlinger.",
		images: ["/images/logos/logo.png"],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="da" className={poppins.className} suppressHydrationWarning>
			<body>
				<LanguageProvider>
					<Header />
					<main>{children}</main>
					<Footer />
					<TranslationWidget />
				</LanguageProvider>
			</body>
		</html>
	)
}
