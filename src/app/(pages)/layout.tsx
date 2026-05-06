import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { LanguageProvider } from "@/context/LanguageContext"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import TranslationWidget from "@/components/TranslationWidget"
import {
	BUSINESS,
	DEFAULT_LOCALE,
	SITE_URL,
	getLocaleDir,
	isLocale,
} from "@/lib/seo"

import "@/styles/main.scss"

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
})

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	applicationName: BUSINESS.name,
	creator: BUSINESS.name,
	publisher: BUSINESS.name,
	icons: {
		icon: "/images/logos/logo.png",
	},
}

const localBusinessJsonLd = {
	"@context": "https://schema.org",
	"@type": ["HairSalon", "BeautySalon"],
	name: BUSINESS.name,
	legalName: BUSINESS.legalName,
	url: SITE_URL,
	telephone: BUSINESS.phone,
	image: `${SITE_URL}/images/logos/logo.png`,
	address: {
		"@type": "PostalAddress",
		streetAddress: BUSINESS.address.street,
		postalCode: BUSINESS.address.postalCode,
		addressLocality: BUSINESS.address.city,
		addressCountry: BUSINESS.address.country,
	},
	areaServed: {
		"@type": "AdministrativeArea",
		name: "Kolding",
	},
}

type RootLayoutProps = Readonly<{
	children: React.ReactNode
	params?: { locale?: string }
}>

export default function RootLayout({ children, params }: RootLayoutProps) {
	const locale = isLocale(params?.locale) ? params?.locale : DEFAULT_LOCALE
	const dir = getLocaleDir(locale)

	return (
		<html
			lang={locale}
			dir={dir}
			className={poppins.className}
			suppressHydrationWarning
		>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(localBusinessJsonLd),
					}}
				/>
			</head>
			<body>
				<LanguageProvider initialLanguage={locale}>
					<Header />
					<main>{children}</main>
					<Footer />
					<TranslationWidget />
				</LanguageProvider>
			</body>
		</html>
	)
}
