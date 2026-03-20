"use client"

import { Button } from "@/components/button"
import styles from "./booking.module.scss"

export const BookingSection = () => {
	return (
		<section id="booking" className={styles.booking}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className={styles.title}>Book din tid i dag</h2>
					<p className={styles.subtitle}>Klar til at forkæle dig selv? Book din næste behandling via telefon, sociale medier eller online booking.</p>

					<div className={styles.actions}>
						<Button
							href="https://ayabila.onlinebooq.dk/"
							target="_blank"
							rel="noopener noreferrer"
							variant="primary"
						>
							Book tid nu
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
