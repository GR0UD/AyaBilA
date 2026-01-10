"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Button } from "@/components/button"
import styles from "./booking.module.scss"

export const BookingSection = () => {
	const { t, isRTL } = useLanguage()

	return (
		<section
			id="booking"
			className={styles.booking}
			dir={isRTL ? "rtl" : "ltr"}
		>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className={styles.title}>{t.booking.title}</h2>
					<p className={styles.subtitle}>{t.booking.subtitle}</p>

					<div className={styles.actions}>
						<Button
							href="https://ayabila.onlinebooq.dk/"
							target="_blank"
							rel="noopener noreferrer"
							variant="primary"
						>
							{t.booking.cta}
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
