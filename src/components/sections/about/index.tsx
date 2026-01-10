"use client"

import { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import Image from "next/image"
import styles from "./about.module.scss"

export const AboutSection = () => {
	const { t, isRTL } = useLanguage()
	const [selectedPerson, setSelectedPerson] = useState<"aya" | "bilal">("aya")

	const features = [
		{ text: t.about.experience },
		{ text: t.about.quality },
		{ text: t.about.service },
	]

	return (
		<section
			id="about"
			className={styles.about}
			dir={isRTL ? "rtl" : "ltr"}
		>
			<div className={styles.container}>
				<div className={styles.content}>
					<span className={styles.badge}>Salon Rami & Bilal</span>
					<h2 className={styles.title}>{t.about.title}</h2>
					<p className={styles.text}>{t.about.text}</p>
					<div className={styles.features}>
						{features.map((feature, index) => (
							<div key={index} className={styles.feature}>
								<span className={styles.featureText}>
									{feature.text}
								</span>
							</div>
						))}
					</div>
				</div>

				<div className={styles.visual}>
					<div className={styles.cardsContainer}>
						<button
							className={`${styles.personCard} ${
								selectedPerson === "aya" ? styles.active : ""
							}`}
							onClick={() => setSelectedPerson("aya")}
							type="button"
						>
							<div className={styles.cardContent}>
								<Image
									src="/aya.jpg"
									alt="Aya - Kosmetolog"
									width={320}
									height={380}
									className={styles.cardImage}
									priority
								/>
								<div className={styles.cardOverlay}>
									<h3 className={styles.cardName}>Aya</h3>
									<p className={styles.cardRole}>
										Kosmetolog
									</p>
								</div>
							</div>
						</button>

						<button
							className={`${styles.personCard} ${
								selectedPerson === "bilal" ? styles.active : ""
							}`}
							onClick={() => setSelectedPerson("bilal")}
							type="button"
						>
							<div className={styles.cardContent}>
								<Image
									src="/bilal.png"
									alt="Bilal - Herrefrisør"
									width={320}
									height={380}
									className={styles.cardImage}
									priority
								/>
								<div className={styles.cardOverlay}>
									<h3 className={styles.cardName}>Bilal</h3>
									<p className={styles.cardRole}>
										Herrefrisør
									</p>
								</div>
							</div>
						</button>
					</div>

					<div className={styles.storyContainer}>
						{selectedPerson === "aya" && (
							<div className={styles.story}>
								<h3 className={styles.storyTitle}>Aya</h3>
								<p className={styles.storyText}>
									{t.about.aya}
								</p>
							</div>
						)}
						{selectedPerson === "bilal" && (
							<div className={styles.story}>
								<h3 className={styles.storyTitle}>Bilal</h3>
								<p className={styles.storyText}>
									{t.about.bilal}
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
