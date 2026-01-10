"use client"

import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"
import styles from "./team.module.scss"

export const TeamSection = () => {
	const { t, isRTL } = useLanguage()

	const team = [
		{
			name: t.team.bilal.name,
			role: t.team.bilal.role,
			description: t.team.bilal.description,
			image: "/bilal.png",
		},
		{
			name: t.team.aya.name,
			role: t.team.aya.role,
			description: t.team.aya.description,
			image: "/aya2.jpg",
		},
	]

	return (
		<section id="team" className={styles.team} dir={isRTL ? "rtl" : "ltr"}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>{t.team.title}</h2>
					<p className={styles.subtitle}>{t.team.subtitle}</p>
				</div>

				<div className={styles.grid}>
					{team.map((member, index) => (
						<div key={index} className={styles.card}>
							<div className={styles.imageWrapper}>
								<Image
									src={member.image}
									alt={member.name}
									width={300}
									height={350}
									className={styles.image}
								/>
								<div className={styles.imageOverlay}></div>
							</div>
							<div className={styles.content}>
								<h3 className={styles.name}>{member.name}</h3>
								<span className={styles.role}>
									{member.role}
								</span>
								<p className={styles.description}>
									{member.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
