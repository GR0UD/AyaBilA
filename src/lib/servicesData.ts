export interface Service {
	id: string
	title: string
	price: string
	duration: string
	description: string
	details?: string[]
}

export interface ServiceCategory {
	id: string
	title: string
	subtitle: string
	services: Service[]
}

export interface ServicePage {
	title: string
	description: string
	categories: ServiceCategory[]
}

// Kosmetolog Services
export const kosmetologServices: ServicePage = {
	title: "Kosmetolog",
	description: "Din skønhed er vores passion🩷",
	categories: [
		{
			id: "facial-treatments",
			title: "Ansigtsbehandlinger",
			subtitle:
				"(varighed inkl. ca. 10-15 min. forberedelse og afslutning)",
			services: [
				{
					id: "facial-massage",
					title: "Ansigtsmassage inkl rens og creme",
					price: "145 DKK",
					duration: "30 minutter",
					description:
						"En afslappende ansigtsmassage, hvor huden først renses og afsluttes med en plejende creme tilpasset din hudtype.",
					details: [
						"Afrensning",
						"Ansigtsmassage",
						"Afsluttende cremepleje",
					],
				},
				{
					id: "browse-lash-brow",
					title: "Farvning og retning af bryn og vipper + Mini Ansigtsbehandling",
					price: "225 DKK",
					duration: "45 minutter",
					description:
						"En skøn kombinationsbehandling til dig, der ønsker både velplejede bryn og vipper samt frisk og fugtet hud.",
				},
				{
					id: "classic-facial",
					title: "Classic ansigtsbehandling",
					price: "265 DKK",
					duration: "60 minutter",
					description:
						"En basis ansigtsbehandling, der frisker huden op og giver et sundt og velplejet udtryk.",
					details: [
						"Hudanalyse",
						"Afrensning",
						"Peeling",
						"Let massagemaske",
						"Afsluttende cremepleje",
						"Let make-up",
					],
				},
				{
					id: "fruit-acid",
					title: "Frugtsyrebehandling",
					price: "315 DKK",
					duration: "60 minutter",
					description:
						"En effektiv behandling med fokus på at forfine hudens struktur, give ny glød og mindske urenheder.",
				},
			],
		},
		{
			id: "brows-lashes",
			title: "Bryn og vipper",
			subtitle:
				"(varighed inkl. ca. 10-15 min. forberedelse og afslutning)",
			services: [
				{
					id: "brow-shaping",
					title: "Retning af bryn",
					price: "75 DKK",
					duration: "15 minutter",
					description:
						"Dine bryn formes og rettes til med enten voks eller pincet.",
				},
				{
					id: "brow-tint",
					title: "Farvning af bryn",
					price: "75 DKK",
					duration: "15 minutter",
					description:
						"Brynene farves, så de fremstår mere markante og harmoniske.",
				},
				{
					id: "brow-tint-shape",
					title: "Farvning og retning af bryn",
					price: "125 DKK",
					duration: "15 minutter",
					description:
						"Behandlingen kombinerer farvning og formning af bryn.",
				},
				{
					id: "lash-lift",
					title: "Vippebuk",
					price: "315 DKK",
					duration: "45 minutter",
					description:
						"En behandling hvor dine naturlige vipper formes med et let og naturligt buk.",
				},
				{
					id: "brow-lift",
					title: "Brow Lift Lamination inkl. retning af bryn",
					price: "350,00 kr.",
					duration: "45 minutter",
					description:
						"Reducere tiden og brugen af makeup til brynene. Brow Lift Lamination løfter bryn (åbner øjnene og giver et yngre udseende) og sætter hårene i den perfekte form.",
					details: [
						"Behandlingen fikseres brynhårene med lim i den ønskede form, hvorefter der bliver påført geleer, der vil få brynene til at forblive i den ny position.",
						"Resultatet af denne behandling kan man forvente holder i ca. 6 uger.",
						"Retning korrigerer dine bryn med voks eller pincet.",
						"Der tages højde for din ansigtsform, brynform og dine ønsker til resultat.",
						"24 timer Efter behandling undgå sauna, klorvand, havvand samt sved under træning pga. fugt og vand kan neutraliserer løftet og reducere resultatet.",
					],
				},
				{
					id: "brow-lift-color",
					title: "Brow Lift Lamination inkl. farvning og retning af bryn",
					price: "400,00 kr.",
					duration: "1 time",
					description:
						"Reducere tiden og brugen af makeup til brynene. Brow Lift Lamination løfter bryn og sætter hårene i den perfekte form med tilføjet farvning.",
					details: [
						"Behandlingen fikseres brynhårene med lim i den ønskede form, hvorefter der bliver påført geleer, der vil få brynene til at forblive i den ny position.",
						"Farvning: vi vælger sammen den rigtige farve der passer dit egen hårs farve og ønske.",
						"Retning korrigerer dine bryn med voks eller pincet.",
						"Der tages højde for din ansigtsform, brynform og dine ønsker til resultat.",
						"24 timer Efter behandling undgå sauna, klorvand, havvand samt sved under træning pga. fugt og vand kan neutraliserer løftet og reducere resultatet.",
					],
				},
				{
					id: "korean-lash-lift",
					title: "Korean Lash lift",
					price: "375 DKK",
					duration: "60 minutter",
					description:
						"Korean Lash Lift er den nye generation af vippebehandlinger.",
				},
				{
					id: "lift-package",
					title: "LIFT Pakken",
					price: "625 DKK",
					duration: "75 minutter",
					description:
						"Med LIFT Pakken får du den ultimative kombination af behandlinger til både bryn og vipper.",
				},
			],
		},

		{
			id: "waxing",
			title: "Voksbehandlinger",
			subtitle:
				"(varighed inkl. ca. 10-15 min. forberedelse og afslutning)",
			services: [
				{
					id: "face-waxing",
					title: "Voks af ansigt",
					price: "249,00 kr.",
					duration: "30 minutter",
					description:
						"OBS Hårene skal være minimum 0,5 cm for at voksen kan gribe om håret, og sikre tilfredsstillende resultat. (retning/voks af bryn ikke inkluderet)",
					details: [
						"Voksbehandlingerne foregår med professionelle produkter fra mærket Depiléve.",
						"Vi starter med at analysere huden og håret for at vælge det passende voks.",
						"Sterilisering, forberedelsesprodukt til hud og hår, hårfjerning, fjernelse af rester, beroligende creme.",
						"Vejledning til hjemmebrug af produkterne.",
						"Undgå i 24 timer efter behandlingen: peeling, direkte sol og solarium, produkter med irriterende ingredienser, overdreven varme (varmt bad, karbad, sauna).",
						"Intervallet for voksbehandlinger er cirka hver 4. uge",
					],
				},
				{
					id: "lip-chin-waxing",
					title: "Voks af overlæbe og hage",
					price: "110,00 kr.",
					duration: "20 minutter",
					description:
						"OBS: Hårene skal være minimum 0,5 cm for at voksen kan gribe om håret, og sikre tilfredsstillende resultat.",
					details: [
						"Voksbehandlingerne foregår med professionelle produkter fra mærket Depiléve.",
						"Vi starter med at analysere huden og håret for at vælge det passende voks.",
						"Undgå i 24 timer efter behandlingen: peeling, direkte sol og solarium, produkter med irriterende ingredienser, overdreven varme.",
						"Intervallet for voksbehandlinger er cirka hver 4. uge",
					],
				},
				{
					id: "small-area",
					title: "Lille område (næse, øre, hage eller overlæbe)",
					price: "75 DKK",
					duration: "15 minutter",
					description: "Voksbehandling af små områder.",
				},
				{
					id: "two-small",
					title: "2 små områder",
					price: "125 DKK",
					duration: "15 minutter",
					description: "Voksbehandling af to små områder.",
				},
				{
					id: "armpits",
					title: "Armhuler",
					price: "145 DKK",
					duration: "30 minutter",
					description: "Voksbehandling af armhuler.",
				},
				{
					id: "bikini-line",
					title: "Bikinilinje",
					price: "155 DKK",
					duration: "30 minutter",
					description: "Voksbehandling af bikinilinje.",
				},
				{
					id: "arms",
					title: "Arme",
					price: "195 DKK",
					duration: "30 minutter",
					description: "Voksbehandling af begge arme.",
				},
				{
					id: "lower-legs",
					title: "Underben",
					price: "225 DKK",
					duration: "45 minutter",
					description: "Voksbehandling af underben.",
				},
				{
					id: "half-back",
					title: "Halv ryg",
					price: "225 DKK",
					duration: "30 minutter",
					description: "Voksbehandling af halv ryg.",
				},
				{
					id: "chest",
					title: "Brystkasse",
					price: "225 DKK",
					duration: "30 minutter",
					description: "Voksbehandling af brystkasse.",
				},
				{
					id: "stomach",
					title: "Mave",
					price: "225 DKK",
					duration: "30 minutter",
					description: "Voksbehandling af mave.",
				},
				{
					id: "full-face",
					title: "Hele ansigt",
					price: "245 DKK",
					duration: "30 minutter",
					description:
						"Hele ansigt – Næse, pande, kinder, kæbe, overlæbe og hage.",
				},
				{
					id: "full-back",
					title: "Hel ryg",
					price: "345 DKK",
					duration: "45 minutter",
					description: "Voksbehandling af hel ryg.",
				},
				{
					id: "chest-stomach",
					title: "Bryst og mave",
					price: "345 DKK",
					duration: "45 minutter",
					description: "Voksbehandling af bryst og mave.",
				},
				{
					id: "full-legs-bikini",
					title: "Hele ben med bikinilinje",
					price: "375 DKK",
					duration: "60 minutter",
					description: "Voksbehandling af hele ben med bikinilinje.",
				},
				{
					id: "intimate",
					title: "Intim",
					price: "400 DKK",
					duration: "60 minutter",
					description: "Intim voksbehandling.",
				},
				{
					id: "fullbody",
					title: "Fullbody – fra top til tå",
					price: "1075 DKK",
					duration: "180 minutter",
					description:
						"Ved en fullbody voks fjernes hår fra top til tå.",
				},
			],
		},
		{
			id: "microneedling",
			title: "Microneedling (Skinpen)",
			subtitle:
				"(varighed inkl. ca. 10-15 min. forberedelse og afslutning)",
			services: [
				{
					id: "microneedling-face",
					title: "Microneedling ansigt inkl. Aftercaresæt",
					price: "995 DKK",
					duration: "60 minutter",
					description:
						"Microneedling med SkinPen for optimal hudforyngelse og regenerering.",
				},
				{
					id: "microneedling-full",
					title: "Microneedling fra pande til décolleté inkl. Aftercaresæt",
					price: "1250 DKK",
					duration: "75 minutter",
					description:
						"Microneedling for ansigt, hals og décolleté med intensiv behandling.",
				},
			],
		},
	],
}

// Frisør Services
export const frisorServices: ServicePage = {
	title: "Frisør",
	description: "Din stil er vores passion😎",
	categories: [
		{
			id: "mens-services",
			title: "Herrebehandlinger",
			subtitle: "",
			services: [
				{
					id: "mens-cut",
					title: "Herreklip (Men's cut)",
					price: "249,00 kr.",
					duration: "30 minutter",
					description:
						"Få en tidløs og velplejet frisure med vores moderne kvalitetsklipning.",
				},
				{
					id: "mens-cut-student",
					title: "Herreklip (Studenter rabat)",
					price: "199,00 kr.",
					duration: "30 minutter",
					description:
						"Moderne klipning for studerende - spar og opnå 20% rabat ved at fremvise dit studiekort.",
				},
				{
					id: "shaving-beard",
					title: "Barbering (Shaving & Beard Trim)",
					price: "149,00 kr.",
					duration: "20 minutter",
					description: "Barbering & grooming af erfarne frisører.",
				},
				{
					id: "mens-cut-barbering",
					title: "Herreklip & Barbering (Men's cut + Shaving & Beard Trim)",
					price: "349,00 kr.",
					duration: "45 minutter",
					description:
						"Oplev vores ekspertise i klipning & barbering!",
				},
				{
					id: "vip-all-inclusive",
					title: "VIP All Inclusive (Ansigtsbehandling + voks/næse og klipning & Barbering)",
					price: "499,00 kr.",
					duration: "1 time og 5 minutter",
					description:
						"Forkæl dig selv med vores eksklusive produkter til mænd, (Ansigtsbehandling + voks/næse, klipning & barbering).",
				},
			],
		},
		{
			id: "womens-services",
			title: "Damebehandlinger",
			subtitle: "",
			services: [
				{
					id: "womens-cut-no-wash",
					title: "Dameklip – uden vask og føn",
					price: "349,00 kr.",
					duration: "45 minutter",
					description:
						"En enkel og professionel klipning uden hårvask og føntørring. Vi tilpasser frisuren efter dine ønsker og stil 💇‍♀️",
				},
				{
					id: "womens-short-cut",
					title: "Dame klip kort hår (med maskine)",
					price: "249,00 kr.",
					duration: "30 minutter",
					description:
						"Smart og hurtig maskineklip til dig der ønsker en kort og stilren frisure. Hurtigt, effektivt og uden besvær",
				},
				{
					id: "root-color",
					title: "Bundfarve max 3 cm",
					price: "299,00 kr.",
					duration: "1 time og 30 minutter",
					description:
						"Frisk start til dine rødder. Vi farver kun udgroning, så din hårfarve ser ny og ensartet ud igen. Ved kraftigt/langt hår kan der forekomme et tillæg på 100 kr. grundet øget produktforbrug og arbejdstid.",
				},
				{
					id: "toning-long-hair",
					title: "Toning uden anden behandling langt hår (opfriskning af toning)",
					price: "350,00 kr.",
					duration: "45 minutter",
					description:
						"Trænger dit blonde hår til en opfriskning, så er en toningsfarvning det rigtige valg. Behandlingen indeholder toning, vask og føntørring.",
				},
				{
					id: "olaplex-treatment",
					title: "Olaplex hårkur (uden anden behandling)",
					price: "350,00 kr.",
					duration: "45 minutter",
					description:
						"Olaplex reparerer og genopbygger hårets struktur, samtidig med at det beskytter håret under kemiske behandlinger som farvning, afblegning og permanent.",
					details: [
						"Hvad er Olaplex? Olaplex reparerer og genopbygger hårets struktur, samtidig med at det beskytter håret under kemiske behandlinger som farvning, afblegning og permanent. Olaplex er faktisk en serie af produkter, der arbejder sammen for at styrke og genoprette hårets bindinger/svovlbroer.",
						"Hvad kan man forvente? Når du begynder at bruge Olaplex, kan du forvente at se og mærke en synlig forskel i dit hår. Dit hår vil føles stærkere, mere glansfuldt og mere modstandsdygtigt over for skader.",
					],
				},
			],
		},
		{
			id: "kids-services",
			title: "Børneklipninger",
			subtitle: "",
			services: [
				{
					id: "kids-cut-girls",
					title: "Børneklip – Pige (fra 5 år)",
					price: "250,00 kr.",
					duration: "30 minutter",
					description:
						"Vi klipper piger fra 5 år og op. En sød og tryg oplevelse med fokus på stil, komfort og smil 😊",
				},
				{
					id: "kids-cut-boys",
					title: "Børneklip – Dreng (fra 5 år)",
					price: "199,00 kr.",
					duration: "30 minutter",
					description:
						"Vi klipper drenge fra 5 år og op. En behagelig oplevelse med fokus på stil og sjov for de små 🧒✂️",
				},
			],
		},
	],
}
