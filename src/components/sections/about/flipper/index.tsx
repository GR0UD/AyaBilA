"use client"

import { useState } from "react"
import Image from "next/image"
import { ABOUT_PERSON_BY_ID, type PersonId } from "../data"
import styles from "./flipper.module.scss"

export const Flipper = () => {
	const [selectedPerson, setSelectedPerson] = useState<PersonId>("aya")
	const aya = ABOUT_PERSON_BY_ID.aya
	const bilal = ABOUT_PERSON_BY_ID.bilal
	const selectedProfile = ABOUT_PERSON_BY_ID[selectedPerson]

	return (
		<div className={styles.visual}>
			<div className={styles.cardsContainer}>
				<button
					className={`${styles.personCard} ${styles.ayaCard} ${
						selectedPerson === "aya" ? styles.active : ""
					}`}
					onClick={() => setSelectedPerson("aya")}
					type="button"
				>
					<div className={styles.cardContent}>
						<Image
							src={aya.imageSrc}
							alt={aya.imageAlt}
							width={320}
							height={380}
							className={styles.cardImage}
							priority
						/>
						<div className={styles.cardOverlay}>
							<h3 className={styles.cardName}>{aya.name}</h3>
							<p className={styles.cardRole}>{aya.role}</p>
						</div>
					</div>
				</button>

				<button
					className={`${styles.personCard} ${styles.bilalCard} ${
						selectedPerson === "bilal" ? styles.active : ""
					}`}
					onClick={() => setSelectedPerson("bilal")}
					type="button"
				>
					<div className={styles.cardContent}>
						<Image
							src={bilal.imageSrc}
							alt={bilal.imageAlt}
							width={320}
							height={380}
							className={styles.cardImage}
							priority
						/>
						<div className={styles.cardOverlay}>
							<h3 className={styles.cardName}>{bilal.name}</h3>
							<p className={styles.cardRole}>{bilal.role}</p>
						</div>
					</div>
				</button>
			</div>

			<div className={styles.storyContainer}>
				<div className={styles.story}>
					<div className={styles.storyHeader}>
						<h3
							className={`${styles.storyTitle} ${
								selectedPerson === "aya"
									? styles.ayaTitle
									: styles.bilalTitle
							}`}
						>
							{selectedProfile.name}
						</h3>
					</div>
					<p className={styles.storyText}>{selectedProfile.story}</p>
					{selectedProfile.certificates.length > 0 && (
						<div className={styles.certificatesContainer}>
							{selectedProfile.certificates.map((certificate) => (
								<Image
									key={certificate.src}
									src={certificate.src}
									alt={certificate.alt}
									aria-label={certificate.alt}
									width={120}
									height={90}
									className={styles.ayaCertificate}
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
