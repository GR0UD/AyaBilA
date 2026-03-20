"use client"

import { Button } from "@/components/button"
import styles from "./hero.module.scss"

export const HeroSection = () => {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}

	return (
		<section id="hero" className={styles.hero}>
			<div className={styles.overlay}></div>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<div className={styles.tag}>I hjertet af Kolding</div>
					<h1 className={styles.title}>
						<span className={styles.titleBlue}>Frisør</span> & <span className={styles.titlePink}>Kosmetolog</span> i ét
					</h1>
					<p className={styles.subtitle}>Professionel frisør og kosmetolog – vi skaber stilfulde looks og forkælende behandlinger til både herrer og damer</p>
					<div className={styles.actions}>
						<Button
							href="https://ayabila.onlinebooq.dk/"
							target="_blank"
							rel="noopener noreferrer"
							variant="primary"
						>
							Book nu
						</Button>
						<Button
							variant="secondary"
							onClick={() => scrollToSection("services")}
						>
							Se vores services
						</Button>
					</div>
				</div>
			</div>
			<div className={styles.scrollIndicator}>
				<div className={styles.mouse}>
					<div className={styles.wheel}></div>
				</div>
			</div>
		</section>
	)
}
