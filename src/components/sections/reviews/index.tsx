"use client"

import { SectionHeader } from "@/components/SectionHeader"
import Image from "next/image"
import styles from "./reviews.module.scss"

const reviews = [
	{
		name: "Sahar S.",
		rating: 5,
		date: "4 måneder siden",
		text: "Aya er super sød og imødekommende, og hun er virkelig dygtig til sit arbejde. Jeg går altid derfra glad og tilfreds og kommer gerne igen 😊",
		initials: "SS",
	},

	{
		name: "Rasmus M.",
		rating: 5,
		date: "et år siden",
		text: "Altid en god oplevelse ved Bilal, man går aldrig skuffet hjem ligesom jeg oplevede før jeg begyndte at blive klippet ved Bilal i 2019. Fordi lige siden da er jeg ikke blevet klippet af andre en Bilal fordi han altid ligger en brændvarm fade.",
		initials: "RM",
	},
	{
		name: "Mohamed S.",
		rating: 5,
		date: "et år siden",
		text: "Den bedste frisør jeg har prøvet! Klipningen er altid perfekt, og han gør præcis hvad man ønsker. Jeg går altid derfra glad og tilfreds. Og det bedste er at han altid holder TIDEN og servicen er fantastisk. Kan varmt anbefales 🫡",
		initials: "MS",
	},
]

export function ReviewsSection() {
	return (
		<section id="reviews" className={styles.reviews}>
			<div className={styles.container}>
				<SectionHeader
					title="Kundeanmeldelser"
					subtitle="Hjælp os med at vokse ved at dele din oplevelse med os! 💚"
				/>

				<div className={styles.ctaSection}>
					<div className={styles.ctaLeft}>
						<div className={styles.googleBadge}>
							<Image
								src="/images/misc/google.webp"
								alt="Google"
								width={120}
								height={40}
								priority
							/>
						</div>
						<div className={styles.ratingScore}>
							<span className={styles.score}>4.9</span>
							<div className={styles.starsLarge}>
								{[...Array(5)].map((_, i) => (
									<svg
										key={i}
										viewBox="0 0 24 24"
										fill="#FBBC04"
										width="24"
										height="24"
									>
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
									</svg>
								))}
							</div>
						</div>
					</div>
					<div className={styles.ctaDivider} />
					<div className={styles.ctaRight}>
						<h3 className={styles.ctaTitle}>
							Er du tilfreds med vores service?
						</h3>
						<a
							href="https://www.google.com/search?sca_esv=73000156de4ea350&rlz=1C1MYPO_enDK1204&sxsrf=ANbL-n5nrPldJ4iF_hS8J1wVyIzYRbNl1A:1772558038808&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUUZA85TgEipzhdmJbQGkPUacuX8xfNZII0VvzJXZ1NjBoCKgSaTAaLZtqKbf9JP9_vvIzq_tz2kueiO35svnI67E0uXvzjzE4AnBSoOtQpjwr0dFQ%3D%3D&q=AyabilA+Fris%C3%B8r+%26+Kosmetolog+Reviews&sa=X&ved=2ahUKEwjvxvyhnYSTAxUEFxAIHcXoF8cQ0bkNegQIJhAH&biw=1536&bih=730&dpr=1.25"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.reviewButton}
						>
							<svg
								viewBox="0 0 24 24"
								fill="currentColor"
								width="18"
								height="18"
							>
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
							</svg>
							Skriv en anmeldelse
						</a>
					</div>
				</div>

				<div className={styles.reviewsGrid}>
					{reviews.map((review, index) => (
						<div key={index} className={styles.reviewCard}>
							<div className={styles.reviewHeader}>
								<div className={styles.avatar}>
									{review.initials}
								</div>
								<div className={styles.reviewInfo}>
									<h3 className={styles.reviewerName}>
										{review.name}
									</h3>
									<span className={styles.date}>
										{review.date}
									</span>
								</div>
							</div>
							<div className={styles.starsContainer}>
								<div className={styles.stars}>
									{[...Array(5)].map((_, i) => (
										<svg
											key={i}
											viewBox="0 0 14 14"
											fill={
												i < review.rating
													? "#FCBF02"
													: "#374151"
											}
											width="14"
											height="14"
										>
											<path d="M6.82617 11.442L3.54617 13.166C3.46353 13.2093 3.3704 13.2287 3.27732 13.2219C3.18425 13.2151 3.09494 13.1824 3.0195 13.1274C2.94406 13.0725 2.8855 12.9975 2.85045 12.911C2.8154 12.8245 2.80526 12.7299 2.82117 12.638L3.44817 8.98798C3.46192 8.908 3.456 8.82587 3.43091 8.74869C3.40582 8.67151 3.36232 8.6016 3.30417 8.54499L0.650168 5.95899C0.583317 5.89388 0.53602 5.81136 0.51363 5.72076C0.491239 5.63017 0.494647 5.53512 0.52347 5.44637C0.552292 5.35761 0.605378 5.27869 0.676721 5.21854C0.748065 5.15838 0.834818 5.1194 0.927168 5.10599L4.59317 4.57299C4.67344 4.56146 4.7497 4.53059 4.81537 4.48303C4.88105 4.43547 4.93418 4.37265 4.97017 4.29999L6.61017 0.977985C6.65153 0.894518 6.7154 0.824266 6.79455 0.775151C6.87371 0.726037 6.96501 0.700012 7.05817 0.700012C7.15132 0.700012 7.24263 0.726037 7.32178 0.775151C7.40094 0.824266 7.4648 0.894518 7.50617 0.977985L9.14717 4.29899C9.18307 4.37152 9.23604 4.43426 9.30153 4.48182C9.36702 4.52937 9.44308 4.56031 9.52317 4.57199L13.1892 5.10499C13.2815 5.1184 13.3683 5.15738 13.4396 5.21754C13.511 5.27769 13.564 5.35661 13.5929 5.44537C13.6217 5.53412 13.6251 5.62917 13.6027 5.71976C13.5803 5.81036 13.533 5.89288 13.4662 5.95798L10.8132 8.54398C10.7552 8.60049 10.7118 8.67024 10.6867 8.74723C10.6616 8.82422 10.6556 8.90616 10.6692 8.98598L11.2962 12.637C11.3122 12.7291 11.3021 12.8238 11.267 12.9105C11.232 12.9971 11.1733 13.0722 11.0977 13.1272C11.0221 13.1822 10.9326 13.2149 10.8393 13.2215C10.7461 13.2282 10.6528 13.2086 10.5702 13.165L7.29117 11.441C7.21946 11.4033 7.13967 11.3836 7.05867 11.3836C6.97767 11.3836 6.89788 11.4033 6.82617 11.441V11.442Z" />
										</svg>
									))}
								</div>
							</div>
							<p className={styles.reviewText}>{review.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
