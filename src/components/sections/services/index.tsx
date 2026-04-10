"use client"

import Image from "next/image"
import { FaScissors } from "react-icons/fa6"
import { MdSpa } from "react-icons/md"
import styles from "./services.module.scss"

export const ServicesSection = () => {
	return (
		<section id="services" className={styles.services}>
			<div className={styles.container}>
				<header className={styles.header}>
					<h2 className={styles.title}>Vores behandlinger</h2>
					<p className={styles.subtitle}>
						Eksklusive behandlinger med passion til herrer, damer og
						børn.
					</p>
				</header>

				<div className={styles.grid}>
					<a
						href="/frisor"
						className={`${styles.card} ${styles.cardBlue}`}
					>
						<div className={styles.cardImageWrapper}>
							<Image
								src="/images/team/bilal-frisor.avif"
								alt="Hair Salon"
								fill
								className={styles.cardImage}
							/>
							<div className={styles.cardOverlay} />
						</div>
						<div className={styles.cardContent}>
							<FaScissors className={styles.cardIcon} />
							<h3 className={styles.cardTitle}>
								Professionel frisør
							</h3>
							<p className={styles.cardDescription}>
								Herreklip og dameklip, barbering,
								VIP-behandlinger og mere – af erfarne frisører
								med øje for detaljen
							</p>
							<span className={styles.cardCta}>
								Se frisør-behandlinger →
							</span>
						</div>
					</a>

					<a
						href="/kosmetolog"
						className={`${styles.card} ${styles.cardPink}`}
					>
						<div className={styles.cardImageWrapper}>
							<Image
								src="/images/team/aya-kosmetolog.avif"
								alt="Beauty Services"
								fill
								className={styles.cardImage}
							/>
							<div className={styles.cardOverlay} />
						</div>
						<div className={styles.cardContent}>
							<MdSpa className={styles.cardIcon} />
							<h3 className={styles.cardTitle}>Kosmetolog</h3>
							<p className={styles.cardDescription}>
								Dameklip, hårbehandlinger, voks, bryn og
								kosmetologiske ydelser – skræddersyet til dig
							</p>
							<span className={styles.cardCta}>
								Se dame-behandlinger →
							</span>
						</div>
					</a>
				</div>
			</div>
		</section>
	)
}
