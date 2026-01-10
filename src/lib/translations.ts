export type Language = "da" | "en" | "ar"

export const translations = {
	da: {
		nav: {
			home: "Hjem",
			about: "Om os",
			services: "Service",
			team: "Teamet",
			booking: "Book tid",
		},
		hero: {
			title: "Eksklusiv herre & damefrisør i hjertet af Kolding",
			subtitle:
				"Professionel frisør og kosmetolog – vi skaber stilfulde looks og forkælende behandlinger til både herrer og damer.",
			cta: "Book tid",
			ctaSecondary: "Se vores behandlinger",
		},
		about: {
			title: "Om os",
			text: "Hos AyabilA kombinerer vi årtiers erfaring med moderne teknikker. Bilal er ekspert i herreklip, barbering og VIP-behandlinger, mens Aya mestrer dameklip, voksbehandlinger, bryn og hårkure. Sammen leverer vi kvalitet, detaljer og personlig service i en luksuriøs atmosfære.",
			aya: "Aya er uddannet kosmetolog med speciale inden for professionel hårkure og hudbehandlinger. Hun har udviklet sit håndværk over årene og er passioneret om at give hver kunde den bedst mulige oplevelse. Med dybdegående viden om hårtyper, hudtilstande og moderne teknikker skaber hun løsninger, der passer perfekt til dine behov.",
			bilal: "Bilal har gennem 10 år arbejdet i over 4-6 forskellige barbershops rundt omkring, hvor han indsamlede erfaring og perfektionerede sin kunst inden for herreklip og barbering. Med denne brede erfaring fra forskellige saloner besluttede han at åbne sit eget etablissement sammen med Aya, hvor han kan udbyde den højeste kvalitet af service og håndværk i et luksuriøst miljø.",
			experience: "10+ års erfaring",
			quality: "Premium produkter",
			service: "Personlig service",
		},
		services: {
			title: "Vores services",
			subtitle:
				"Fra klassiske klipninger til eksklusive behandlinger – vi tilbyder et bredt udvalg af services til både herrer, damer og børn.",
			categories: {
				men: "Herreklip & Barbering",
				women: "Dameklip & Hår",
				wax: "Voks & Bryn",
				kids: "Børn",
			},
			duration: "min",
			currency: "kr.",
			menServices: [
				{
					name: "Herreklip",
					duration: 30,
					price: 249,
					description:
						"Få en tidløs og velplejet frisure med vores moderne kvalitetsklipning.",
				},
				{
					name: "Herreklip (Studenter rabat)",
					duration: 30,
					price: 199,
					description:
						"Moderne klipning for studerende – spar 20% ved at fremvise dit studiekort.",
				},
				{
					name: "Barbering",
					duration: 20,
					price: 149,
					description:
						"Professionel barbering og grooming af erfarne frisører.",
				},
				{
					name: "Herreklip & Barbering",
					duration: 45,
					price: 349,
					description:
						"Oplev vores ekspertise i klipning og barbering – den komplette behandling.",
				},
				{
					name: "VIP All Inclusive",
					duration: 65,
					price: 499,
					description:
						"Forkæl dig selv med ansigtsbehandling, voks af næse, klipning og barbering. Den ultimative forkælelse.",
				},
			],
			womenServices: [
				{
					name: "Dameklip",
					duration: 45,
					price: 349,
					description:
						"Professionel klipning uden hårvask og føntørring. Vi tilpasser frisuren efter dine ønsker og stil.",
				},
				{
					name: "Dameklip kort hår (maskine)",
					duration: 30,
					price: 249,
					description:
						"Maskineklip til dig der ønsker en kort og stilren frisure. Hurtigt og effektivt.",
				},
				{
					name: "Olaplex hårkur",
					duration: 45,
					price: 350,
					description:
						"Olaplex reparerer og genopbygger hårets struktur indefra. Perfekt til skadet hår efter farvning eller afblegning. Giver stærkere, blødere og sundere hår.",
				},
				{
					name: "Toning (langt hår)",
					duration: 45,
					price: 350,
					description:
						"Opfrisk dit blonde hår med en professionel toningsfarvning. Inkluderer toning, vask og føntørring.",
				},
			],
			waxServices: [
				{
					name: "Voks af ansigt",
					duration: 30,
					price: 249,
					description:
						"Professionel voksbehandling med Depiléve-produkter. Inkluderer hudanalyse, sterilisering og beroligende efterbehandling. Håret skal være min. 0,5 cm.",
				},
				{
					name: "Voks af overlæbe og hage",
					duration: 20,
					price: 110,
					description:
						"Skånsom voksning af overlæbe og hage med premium Depiléve-produkter og professionel efterpleje.",
				},
				{
					name: "Brow Lift Lamination (inkl. farvning)",
					duration: 60,
					price: 400,
					description:
						"Løft dine bryn og åbn øjnene op. Inkluderer farvning tilpasset din hårfarve og retning med voks/pincet. Holder ca. 6 uger.",
				},
				{
					name: "Brow Lift Lamination",
					duration: 45,
					price: 350,
					description:
						"Giv dine bryn et løft og et yngre udseende. Inkluderer retning med voks/pincet. Holder ca. 6 uger.",
				},
			],
			kidsServices: [
				{
					name: "Børneklip – Pige (fra 5 år)",
					duration: 30,
					price: 250,
					description:
						"En sød og tryg oplevelse med fokus på stil, komfort og smil for de små piger.",
				},
				{
					name: "Børneklip – Dreng (fra 5 år)",
					duration: 30,
					price: 199,
					description:
						"En behagelig oplevelse med fokus på stil og sjov for drenge fra 5 år og op.",
				},
			],
		},
		team: {
			title: "Mød teamet",
			subtitle:
				"Vores dedikerede team af professionelle frisører og kosmetologer står klar til at forkæle dig.",
			bilal: {
				name: "Bilal",
				role: "Herrefrisør",
				description:
					"Professionel herrefrisør i 10+ år. Ekspert i klassiske klipninger, barbering og detaljer.",
			},
			aya: {
				name: "Aya",
				role: "Damefrisør & Kosmetolog",
				description:
					"Dedikeret damefrisør med øje for detaljer og skræddersyede looks. Specialist i hårbehandlinger og kosmetiske ydelser.",
			},
		},
		reviews: {
			title: "Se hvad vores kunder siger",
			subtitle:
				"Vi er stolte over at levere førsteklasses service. Læs hvad vores kunder har oplevet hos AyabilA.",
		},
		booking: {
			title: "Book din tid i dag",
			subtitle:
				"Klar til at forkæle dig selv? Book din næste behandling via telefon, sociale medier eller online booking.",
			cta: "Book tid nu",
			phone: "Ring til os",
			social: "Følg os på sociale medier",
		},
		footer: {
			salon: "AyabilA",
			tagline: "Herre- & Damefrisør og Kosmetolog",
			address: "Kongebrogade 29, 6000 Kolding",
			phone: "+45 12 34 56 78",
			email: "kontakt@ayabila.dk",
			hours: "Åbningstider",
			housText:
				"Man-Ons: 10:00 - 17:00\nTors-Fre: 10:00 - 18:00\nLør: 10:00 - 15:30\nSøn: Lukket",
			followUs: "Følg os",
			copyright: "© 2026 AyabilA. Alle rettigheder forbeholdes.",
		},
	},
	en: {
		nav: {
			home: "Home",
			about: "About",
			services: "Services",
			team: "Team",
			booking: "Book now",
			contact: "Contact",
		},
		hero: {
			title: "Exclusive hair salon in the heart of Kolding",
			subtitle:
				"Professional hairdresser and cosmetologist – we create stylish looks and pampering treatments for both men and women.",
			cta: "Book appointment",
			ctaSecondary: "View our treatments",
		},
		about: {
			title: "About us",
			text: "At AyabilA, we combine decades of experience with modern techniques. Bilal is an expert in men's cuts, shaving, and VIP treatments, while Aya masters women's cuts, waxing, brows, and hair treatments. Together, we deliver quality, attention to detail, and personal service in a luxurious atmosphere.",
			aya: "Aya is a trained cosmetologist specializing in professional hair care and skin treatments. She has refined her craft over the years and is passionate about providing every client with the best possible experience. With in-depth knowledge of hair types, skin conditions, and modern techniques, she creates solutions tailored perfectly to your needs.",
			bilal: "Bilal has spent 10 years working in over 4-6 different barbershops around the region, gathering extensive experience and perfecting his craft in men's haircuts and shaving. With this broad experience from various salons, he decided to open his own establishment with Aya, where he can offer the highest quality of service and craftsmanship in a luxurious environment.",
			experience: "10+ years experience",
			quality: "Premium products",
			service: "Personal service",
		},
		services: {
			title: "Our services",
			subtitle:
				"From classic cuts to exclusive treatments – we offer a wide range of services for men, women, and children.",
			categories: {
				men: "Men's Cut & Shaving",
				women: "Women's Cut & Hair",
				wax: "Waxing & Brows",
				kids: "Children",
			},
			duration: "min",
			currency: "DKK",
			menServices: [
				{
					name: "Men's Cut",
					duration: 30,
					price: 249,
					description:
						"Get a timeless and well-groomed hairstyle with our modern quality cut.",
				},
				{
					name: "Men's Cut (Student discount)",
					duration: 30,
					price: 199,
					description:
						"Modern haircut for students – save 20% by showing your student ID.",
				},
				{
					name: "Shaving",
					duration: 20,
					price: 149,
					description:
						"Professional shaving and grooming by experienced barbers.",
				},
				{
					name: "Men's Cut & Shaving",
					duration: 45,
					price: 349,
					description:
						"Experience our expertise in cutting and shaving – the complete treatment.",
				},
				{
					name: "VIP All Inclusive",
					duration: 65,
					price: 499,
					description:
						"Treat yourself to a facial, nose waxing, haircut, and shaving. The ultimate pampering.",
				},
			],
			womenServices: [
				{
					name: "Women's Cut",
					duration: 45,
					price: 349,
					description:
						"Professional cut without wash and blow-dry. We tailor the hairstyle to your wishes and style.",
				},
				{
					name: "Women's Cut short hair (clipper)",
					duration: 30,
					price: 249,
					description:
						"Clipper cut for those who want a short and stylish hairstyle. Quick and efficient.",
				},
				{
					name: "Olaplex Hair Treatment",
					duration: 45,
					price: 350,
					description:
						"Olaplex repairs and rebuilds hair structure from within. Perfect for damaged hair after coloring or bleaching. Results in stronger, softer, and healthier hair.",
				},
				{
					name: "Toning (long hair)",
					duration: 45,
					price: 350,
					description:
						"Refresh your blonde hair with professional toning. Includes toning, wash, and blow-dry.",
				},
			],
			waxServices: [
				{
					name: "Face Waxing",
					duration: 30,
					price: 249,
					description:
						"Professional waxing with Depiléve products. Includes skin analysis, sterilization, and soothing aftercare. Hair must be min. 0.5 cm.",
				},
				{
					name: "Upper lip and chin waxing",
					duration: 20,
					price: 110,
					description:
						"Gentle waxing of upper lip and chin with premium Depiléve products and professional aftercare.",
				},
				{
					name: "Brow Lift Lamination (incl. tinting)",
					duration: 60,
					price: 400,
					description:
						"Lift your brows and open up your eyes. Includes tinting matched to your hair color and shaping with wax/tweezers. Lasts approx. 6 weeks.",
				},
				{
					name: "Brow Lift Lamination",
					duration: 45,
					price: 350,
					description:
						"Give your brows a lift and a more youthful look. Includes shaping with wax/tweezers. Lasts approx. 6 weeks.",
				},
			],
			kidsServices: [
				{
					name: "Kids Cut – Girl (from 5 years)",
					duration: 30,
					price: 250,
					description:
						"A sweet and safe experience focused on style, comfort, and smiles for little girls.",
				},
				{
					name: "Kids Cut – Boy (from 5 years)",
					duration: 30,
					price: 199,
					description:
						"A comfortable experience focused on style and fun for boys from 5 years and up.",
				},
			],
		},
		team: {
			title: "Meet the team",
			subtitle:
				"Our dedicated team of professional hairdressers and cosmetologists is ready to pamper you.",
			bilal: {
				name: "Bilal",
				role: "Men's Hairdresser",
				description:
					"Professional men's hairdresser for 10+ years. Expert in classic cuts, shaving, and attention to detail.",
			},
			aya: {
				name: "Aya",
				role: "Women's Hairdresser & Cosmetologist",
				description:
					"Dedicated women's hairdresser with an eye for detail and tailored looks. Specialist in hair treatments and cosmetic services.",
			},
		},
		reviews: {
			title: "See what our customers say",
			subtitle:
				"We're proud to deliver first-class service. Read what our customers have experienced at AyabilA.",
		},
		booking: {
			title: "Book your appointment today",
			subtitle:
				"Ready to treat yourself? Book your next treatment via phone, social media, or online booking.",
			cta: "Book now",
			phone: "Call us",
			social: "Follow us on social media",
		},
		footer: {
			salon: "AyabilA",
			tagline: "Men's & Women's Hairdresser and Cosmetologist",
			address: "Kongebrogade 29, 6000 Kolding",
			phone: "+45 12 34 56 78",
			email: "contact@ayabila.dk",
			hours: "Opening hours",
			housText:
				"Mon-Wed: 10:00 - 17:00\nThu-Fri: 10:00 - 18:00\nSat: 10:00 - 15:30\nSun: Closed",
			followUs: "Follow us",
			copyright: "© 2026 AyabilA. All rights reserved.",
		},
	},
	ar: {
		nav: {
			home: "الرئيسية",
			about: "من نحن",
			services: "خدماتنا",
			team: "فريقنا",
			booking: "احجز موعد",
			contact: "اتصل بنا",
		},
		hero: {
			title: "صالون حلاقة راقٍ في قلب كولدنغ",
			subtitle:
				"حلاق وأخصائي تجميل محترف – نصنع إطلالات أنيقة وعلاجات مميزة للرجال والنساء.",
			cta: "احجز موعد",
			ctaSecondary: "شاهد خدماتنا",
		},
		about: {
			title: "من نحن",
			text: "في صالون رامي وبلال، نجمع بين عقود من الخبرة والتقنيات الحديثة. بلال خبير في قصات الرجال والحلاقة وعلاجات VIP، بينما تتقن آية قصات النساء وإزالة الشعر بالشمع والحواجب وعلاجات الشعر. معًا، نقدم الجودة والاهتمام بالتفاصيل والخدمة الشخصية في أجواء فاخرة.",
			aya: "آية أخصائية تجميل مدربة متخصصة في العناية بالشعر المحترفة وعلاجات الجلد. لقد أتقنت فنها على مر السنين وهي شغوفة بتقديم أفضل تجربة ممكنة لكل عميل. بفهم عميق لأنواع الشعر وحالات الجلد والتقنيات الحديثة، تخلق حلولاً مصممة خصيصاً لاحتياجاتك.",
			bilal: "قضى بلال 10 سنوات يعمل في أكثر من 4-6 محلات حلاقة مختلفة في المنطقة، حيث اكتسب خبرة واسعة وأتقن حرفته في قصات الرجال والحلاقة. بفضل هذه الخبرة الواسعة من محلات مختلفة، قرر فتح مؤسسته الخاصة مع آية، حيث يمكنه تقديم أعلى مستويات الخدمة والحرفية في بيئة فاخرة.",
			experience: "+10 سنوات خبرة",
			quality: "منتجات فاخرة",
			service: "خدمة شخصية",
		},
		services: {
			title: "خدماتنا",
			subtitle:
				"من القصات الكلاسيكية إلى العلاجات الحصرية – نقدم مجموعة واسعة من الخدمات للرجال والنساء والأطفال.",
			categories: {
				men: "قص وحلاقة الرجال",
				women: "قص وعناية شعر النساء",
				wax: "إزالة الشعر والحواجب",
				kids: "الأطفال",
			},
			duration: "دقيقة",
			currency: "كرونة",
			menServices: [
				{
					name: "قص شعر رجالي",
					duration: 30,
					price: 249,
					description:
						"احصل على تسريحة أنيقة وكلاسيكية مع قصتنا العصرية عالية الجودة.",
				},
				{
					name: "قص شعر رجالي (خصم طلابي)",
					duration: 30,
					price: 199,
					description:
						"قصة شعر عصرية للطلاب – وفر 20% عند إظهار بطاقة الطالب.",
				},
				{
					name: "حلاقة",
					duration: 20,
					price: 149,
					description: "حلاقة احترافية وتهذيب من حلاقين ذوي خبرة.",
				},
				{
					name: "قص شعر وحلاقة",
					duration: 45,
					price: 349,
					description:
						"اختبر خبرتنا في القص والحلاقة – العلاج الكامل.",
				},
				{
					name: "VIP شامل",
					duration: 65,
					price: 499,
					description:
						"دلل نفسك بعلاج الوجه وإزالة شعر الأنف والقص والحلاقة. التدليل المطلق.",
				},
			],
			womenServices: [
				{
					name: "قص شعر نسائي",
					duration: 45,
					price: 349,
					description:
						"قص احترافي بدون غسيل وتجفيف. نصمم التسريحة حسب رغباتك وأسلوبك.",
				},
				{
					name: "قص شعر نسائي قصير (ماكينة)",
					duration: 30,
					price: 249,
					description:
						"قص بالماكينة لمن يرغب في تسريحة قصيرة وأنيقة. سريع وفعال.",
				},
				{
					name: "علاج Olaplex للشعر",
					duration: 45,
					price: 350,
					description:
						"يصلح Olaplex ويعيد بناء بنية الشعر من الداخل. مثالي للشعر التالف بعد الصبغ أو التفتيح. يمنح شعرًا أقوى وأنعم وأكثر صحة.",
				},
				{
					name: "تونينج (شعر طويل)",
					duration: 45,
					price: 350,
					description:
						"أنعش شعرك الأشقر بتونينج احترافي. يشمل التونينج والغسيل والتجفيف.",
				},
			],
			waxServices: [
				{
					name: "إزالة شعر الوجه بالشمع",
					duration: 30,
					price: 249,
					description:
						"إزالة شعر احترافية بمنتجات Depiléve. يشمل تحليل البشرة والتعقيم والعناية المهدئة بعد العلاج. يجب أن يكون طول الشعر 0.5 سم على الأقل.",
				},
				{
					name: "إزالة شعر الشفة العليا والذقن",
					duration: 20,
					price: 110,
					description:
						"إزالة لطيفة لشعر الشفة العليا والذقن بمنتجات Depiléve الفاخرة والعناية المحترفة بعد العلاج.",
				},
				{
					name: "رفع وتصفيح الحواجب (مع صبغ)",
					duration: 60,
					price: 400,
					description:
						"ارفعي حاجبيك وافتحي عينيك. يشمل صبغًا متناسقًا مع لون شعرك وتشكيلًا بالشمع/الملقط. يدوم حوالي 6 أسابيع.",
				},
				{
					name: "رفع وتصفيح الحواجب",
					duration: 45,
					price: 350,
					description:
						"امنحي حاجبيك رفعة ومظهرًا أكثر شبابًا. يشمل تشكيلًا بالشمع/الملقط. يدوم حوالي 6 أسابيع.",
				},
			],
			kidsServices: [
				{
					name: "قص شعر أطفال – بنت (من 5 سنوات)",
					duration: 30,
					price: 250,
					description:
						"تجربة لطيفة وآمنة تركز على الأناقة والراحة والابتسامات للفتيات الصغيرات.",
				},
				{
					name: "قص شعر أطفال – ولد (من 5 سنوات)",
					duration: 30,
					price: 199,
					description:
						"تجربة مريحة تركز على الأناقة والمرح للأولاد من 5 سنوات فما فوق.",
				},
			],
		},
		team: {
			title: "فريقنا",
			subtitle:
				"فريقنا المتخصص من الحلاقين وأخصائيي التجميل المحترفين جاهز لتدليلك.",
			bilal: {
				name: "بلال",
				role: "حلاق رجالي",
				description:
					"حلاق رجالي محترف لأكثر من 10 سنوات. خبير في القصات الكلاسيكية والحلاقة والاهتمام بالتفاصيل.",
			},
			aya: {
				name: "آية",
				role: "حلاقة نسائية وأخصائية تجميل",
				description:
					"حلاقة نسائية متفانية مع عين للتفاصيل والإطلالات المصممة خصيصًا. متخصصة في علاجات الشعر وخدمات التجميل.",
			},
		},
		reviews: {
			title: "اطلع على آراء عملائنا",
			subtitle:
				"نحن فخورون بتقديم خدمة من الدرجة الأولى. اقرأ ما جربه عملاؤنا في AyabilA.",
		},
		booking: {
			title: "احجز موعدك اليوم",
			subtitle:
				"مستعد لتدليل نفسك؟ احجز علاجك القادم عبر الهاتف أو وسائل التواصل الاجتماعي أو الحجز عبر الإنترنت.",
			cta: "احجز الآن",
			phone: "اتصل بنا",
			social: "تابعنا على وسائل التواصل الاجتماعي",
		},
		footer: {
			salon: "AyabilA",
			tagline: "حلاق رجالي ونسائي وأخصائي تجميل",
			address: "Kongebrogade 29, 6000 Kolding",
			phone: "+45 12 34 56 78",
			email: "contact@ayabila.dk",
			hours: "ساعات العمل",
			housText:
				"الإثنين-الأربعاء: 10:00 - 17:00\nالخميس-الجمعة: 10:00 - 18:00\nالسبت: 10:00 - 15:30\nالأحد: مغلق",
			followUs: "تابعنا",
			copyright: "© 2026 AyabilA. جميع الحقوق محفوظة.",
		},
	},
}
