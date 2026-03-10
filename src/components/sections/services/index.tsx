"use client"

import { useLanguage } from "@/context/LanguageContext"
import Image from "next/image"
import { FaScissors } from "react-icons/fa6"
import { MdSpa } from "react-icons/md"
import styles from "./services.module.scss"

export const ServicesSection = () => {
	const { t, isRTL } = useLanguage()

	return (
		<section
			id="services"
			className={styles.services}
			dir={isRTL ? "rtl" : "ltr"}
		>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>{t.services.title}</h2>
					<p className={styles.subtitle}>{t.services.subtitle}</p>
				</div>

				<div className={styles.grid}>
					<a
						href="https://ayabila.onlinebooq.dk/"
						target="_blank"
						rel="noopener noreferrer"
						className={`${styles.card} ${styles.cardBlue}`}
					>
						<div className={styles.cardImageWrapper}>
							<Image
								src="/bilal.jpg"
								alt={t.services.barberTitle}
								fill
								className={styles.cardImage}
							/>
							<div className={styles.cardOverlay} />
						</div>
						<div className={styles.cardContent}>
							<FaScissors className={styles.cardIcon} />
							<h3 className={styles.cardTitle}>
								{t.services.barberTitle}
							</h3>
							<p className={styles.cardDescription}>
								{t.services.barberDescription}
							</p>
							<span className={styles.cardCta}>
								{t.services.barberCta} →
							</span>
						</div>
					</a>

					<a
						href="https://ayabila.onlinebooq.dk/"
						target="_blank"
						rel="noopener noreferrer"
						className={`${styles.card} ${styles.cardPink}`}
					>
						<div className={styles.cardImageWrapper}>
							<Image
								src="/aya.jpg"
								alt={t.services.kosmetologTitle}
								fill
								className={styles.cardImage}
							/>
							<div className={styles.cardOverlay} />
						</div>
						<div className={styles.cardContent}>
							<MdSpa className={styles.cardIcon} />
							<h3 className={styles.cardTitle}>
								{t.services.kosmetologTitle}
							</h3>
							<p className={styles.cardDescription}>
								{t.services.kosmetologDescription}
							</p>
							<span className={styles.cardCta}>
								{t.services.kosmetologCta} →
							</span>
						</div>
					</a>
				</div>
			</div>
		</section>
	)
}
