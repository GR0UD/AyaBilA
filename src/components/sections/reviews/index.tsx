"use client"

import { useLanguage } from "@/context/LanguageContext"
import styles from "./reviews.module.scss"

const reviews = [
	{
		name: "Aman K. S.",
		rating: 5,
		date: "en måned siden",
		text: "Remi did a great job. I was not feeling to get a new hair style but Remi did such a great job that i am loving my new hairs. My go to from now 👍",
		initials: "AS",
	},
	{
		name: "Sahar S.",
		rating: 5,
		date: "4 måneder siden",
		text: "Aya is super sweet and welcoming, and she is really good at her job. I always leave happy and satisfied and would love to come back 😊",
		initials: "SS",
	},
	{
		name: "Søren O.",
		rating: 5,
		date: "en måned siden",
		text: "Rami is the best hairdresser in Kolding. Highly recommended!",
		initials: "SO",
	},
	{
		name: "Rune S. N.",
		rating: 5,
		date: "en måned siden",
		text: "Top class quality",
		initials: "RN",
	},
]

export function ReviewsSection() {
	const { t } = useLanguage()

	return (
		<section id="reviews" className={styles.reviews}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className={styles.title}>{t.reviews.title}</h2>
					<p className={styles.subtitle}>{t.reviews.subtitle}</p>

					<div className={styles.ratingBadge}>
						<div className={styles.ratingScore}>
							<span className={styles.score}>4.9</span>
							<div className={styles.starsLarge}>
								{[...Array(5)].map((_, i) => (
									<svg
										key={i}
										viewBox="0 0 14 14"
										fill="#FCBF02"
										width="28"
										height="28"
									>
										<path d="M6.82617 11.442L3.54617 13.166C3.46353 13.2093 3.3704 13.2287 3.27732 13.2219C3.18425 13.2151 3.09494 13.1824 3.0195 13.1274C2.94406 13.0725 2.8855 12.9975 2.85045 12.911C2.8154 12.8245 2.80526 12.7299 2.82117 12.638L3.44817 8.98798C3.46192 8.908 3.456 8.82587 3.43091 8.74869C3.40582 8.67151 3.36232 8.6016 3.30417 8.54499L0.650168 5.95899C0.583317 5.89388 0.53602 5.81136 0.51363 5.72076C0.491239 5.63017 0.494647 5.53512 0.52347 5.44637C0.552292 5.35761 0.605378 5.27869 0.676721 5.21854C0.748065 5.15838 0.834818 5.1194 0.927168 5.10599L4.59317 4.57299C4.67344 4.56146 4.7497 4.53059 4.81537 4.48303C4.88105 4.43547 4.93418 4.37265 4.97017 4.29999L6.61017 0.977985C6.65153 0.894518 6.7154 0.824266 6.79455 0.775151C6.87371 0.726037 6.96501 0.700012 7.05817 0.700012C7.15132 0.700012 7.24263 0.726037 7.32178 0.775151C7.40094 0.824266 7.4648 0.894518 7.50617 0.977985L9.14717 4.29899C9.18307 4.37152 9.23604 4.43426 9.30153 4.48182C9.36702 4.52937 9.44308 4.56031 9.52317 4.57199L13.1892 5.10499C13.2815 5.1184 13.3683 5.15738 13.4396 5.21754C13.511 5.27769 13.564 5.35661 13.5929 5.44537C13.6217 5.53412 13.6251 5.62917 13.6027 5.71976C13.5803 5.81036 13.533 5.89288 13.4662 5.95798L10.8132 8.54398C10.7552 8.60049 10.7118 8.67024 10.6867 8.74723C10.6616 8.82422 10.6556 8.90616 10.6692 8.98598L11.2962 12.637C11.3122 12.7291 11.3021 12.8238 11.267 12.9105C11.232 12.9971 11.1733 13.0722 11.0977 13.1272C11.0221 13.1822 10.9326 13.2149 10.8393 13.2215C10.7461 13.2282 10.6528 13.2086 10.5702 13.165L7.29117 11.441C7.21946 11.4033 7.13967 11.3836 7.05867 11.3836C6.97767 11.3836 6.89788 11.4033 6.82617 11.441V11.442Z" />
									</svg>
								))}
							</div>
							<p className={styles.reviewCount}>
								Baseret på 50+ anmeldelser
							</p>
						</div>
						<div className={styles.googleBadge}>
							<svg
								viewBox="0 0 24 24"
								fill="currentColor"
								width="24"
								height="24"
							>
								<path
									d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
									fill="#4285F4"
								/>
								<path
									d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
									fill="#34A853"
								/>
								<path
									d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
									fill="#FBBC05"
								/>
								<path
									d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
									fill="#EA4335"
								/>
							</svg>
							<span>Google Reviews</span>
						</div>
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

				<div className={styles.ctaSection}>
					<div className={styles.ctaContent}>
						<h3 className={styles.ctaTitle}>
							Er du tilfreds med vores service?
						</h3>
						<p className={styles.ctaText}>
							Hjælp os med at vokse ved at dele din oplevelse. Din
							anmeldelse betyder alt for os! 💚
						</p>
						<a
							href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.reviewButton}
						>
							<svg
								viewBox="0 0 24 24"
								fill="currentColor"
								width="20"
								height="20"
							>
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
							</svg>
							Skriv en anmeldelse på Google
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
