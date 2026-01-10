"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Button } from "@/components/button"
import styles from "./hero.module.scss"

export const HeroSection = () => {
	const { t, isRTL } = useLanguage()

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}

	return (
		<section id="hero" className={styles.hero} dir={isRTL ? "rtl" : "ltr"}>
			<div className={styles.overlay}></div>
			<div className={styles.content}>
				<h1 className={styles.title}>{t.hero.title}</h1>
				<p className={styles.subtitle}>{t.hero.subtitle}</p>
				<div className={styles.actions}>
					<Button
						href="https://ayabila.onlinebooq.dk/"
						target="_blank"
						rel="noopener noreferrer"
						variant="primary"
					>
						{t.hero.cta}
					</Button>
					<Button
						variant="secondary"
						onClick={() => scrollToSection("services")}
					>
						{t.hero.ctaSecondary}
					</Button>
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
