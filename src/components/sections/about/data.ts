export type PersonId = "aya" | "bilal"

export interface Certificate {
	src: string
	alt: string
}

export interface AboutPerson {
	id: PersonId
	name: string
	role: string
	imageSrc: string
	imageAlt: string
	story: string
	certificates: Certificate[]
}

export const ABOUT_PEOPLE: AboutPerson[] = [
	{
		id: "aya",
		name: "Aya",
		role: "Kosmetolog",
		imageSrc: "/images/team/aya.jpg",
		imageAlt: "Aya - Kosmetolog",
		story: "Aya er uddannet kosmetolog med speciale inden for professionel hårkure og hudbehandlinger. Hun har udviklet sit håndværk over årene og er passioneret om at give hver kunde den bedst mulige oplevelse. Med dybdegående viden om hårtyper, hudtilstande og moderne teknikker skaber hun løsninger, der passer perfekt til dine behov.",
		certificates: [
			{
				src: "/images/certificates/certificate1.png",
				alt: "Mounir Education Certificate",
			},
			{
				src: "/images/certificates/certificate2.png",
				alt: "Beauty & Style Certificate",
			},
			{
				src: "/images/certificates/certificate3.png",
				alt: "Decaar Academy Certificate",
			},
			{
				src: "/images/certificates/certificate4.png",
				alt: "KOSMETIK FACHAKADEMIE Certificate",
			},
			{
				src: "/images/certificates/certificate5.png",
				alt: "Zain beauty clinic Certificate",
			},
		],
	},
	{
		id: "bilal",
		name: "Bilal",
		role: "Frisør",
		imageSrc: "/images/team/bilal.jpg",
		imageAlt: "Bilal - Herrefrisør",
		story: "Bilal har gennem 10 år arbejdet i over 4-6 forskellige barbershops rundt omkring, hvor han indsamlede erfaring og perfektionerede sin kunst inden for herreklip og barbering. Med denne brede erfaring fra forskellige saloner besluttede han at åbne sit eget etablissement sammen med Aya, hvor han kan udbyde den højeste kvalitet af service og håndværk i et luksuriøst miljø.",
		certificates: [
			{
				src: "/images/certificates/certificate3.png",
				alt: "Decaar Academy Certificate",
			},
		],
	},
]

export const ABOUT_PERSON_BY_ID: Record<PersonId, AboutPerson> = {
	aya: ABOUT_PEOPLE[0],
	bilal: ABOUT_PEOPLE[1],
}
