import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { LanguageProvider } from "@/context/LanguageContext"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import "@/styles/main.scss"

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
})

export const metadata: Metadata = {
	title: "AyabilA – Herre- & Damefrisør og Kosmetolog",
	description:
		"Eksklusiv herre- og damefrisør i hjertet af København. Professionel frisør og kosmetolog – vi skaber stilfulde looks og forkælende behandlinger.",
	icons: {
		icon: "/logo.png",
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="da" className={poppins.className}>
			<body>
				<LanguageProvider>
					<Header />
					<main>{children}</main>
					<Footer />
				</LanguageProvider>
			</body>
		</html>
	)
}
