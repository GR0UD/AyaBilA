import { kosmetologServices } from "@/lib/servicesData"
import { ServicesLayout } from "@/components/sections/services/servicesLayout"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Kosmetolog - AyaBila",
	description:
		"Professionelle skønhedsbehandlinger leveret af uddannede kosmetologer",
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
