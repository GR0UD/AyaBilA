import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/header"

import "@/styles/main.scss"
import { Footer } from "@/components/footer"

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
})

export const metadata: Metadata = {
	title: "AyabilA – Frisør & Kosmetolog",
	description: "",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={inter.className}>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
