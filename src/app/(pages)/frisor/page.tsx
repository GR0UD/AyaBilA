import { frisorServices } from "@/lib/servicesData"
import { ServicesLayout } from "@/components/services/servicesLayout"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Frisør - AyaBila",
	description:
		"Professionelle frisørbehandlinger og barbering leveret af erfarne frisører",
}

export default function FrisorPage() {
	return <ServicesLayout data={frisorServices} theme="blue" />
}
