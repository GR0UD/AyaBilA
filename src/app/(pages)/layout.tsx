import type { Metadata } from "next"
import { Header } from "@/components/header"

import "@/styles/main.scss"

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
		<html lang="en">
			<body>
				<Header />
				{children}
			</body>
		</html>
	)
}
