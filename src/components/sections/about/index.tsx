import Image from "next/image"
import styles from "./about.module.scss"
import { ABOUT_PEOPLE } from "./data"
import { Flipper } from "./flipper"

export const AboutSection = () => {
	const features = [
		{
			text: "Erhvervsuddannet",
			label: "Professionelt certificeret",
			icon: "🎓",
		},
		{
			text: "10+ års erfaring",
			label: "Ekspertise du kan stole på",
			icon: "⭐",
		},
		{ text: "Precisionsarbejde", label: "Øje for detaljerne", icon: "✂️" },
		{ text: "Personlig pleje", label: "Tilpasset dine behov", icon: "💜" },
	]

	const cardNumbers = [1, 2, 3, 4]

	return (
		<section id="about" className={styles.about}>
			<div className={styles.container}>
				<div className={styles.topRow}>
					<div className={styles.content}>
						<span className={styles.badge}>
							VELKOMMEN TIL AYABILA
						</span>
						<h2 className={styles.title}>
							Passion for skønhed og håndværk
						</h2>
						<p className={styles.text}>
							Hos AyaBilA forener vi det bedste fra to verdener.
							Med over 10 års erfaring inden for både hårstyling
							og avanceret hudpleje, sikrer vi dig en oplevelse i
							særklasse, hvor kvalitet og dit velvære altid er i
							fokus.
						</p>
						<div className={styles.features}>
							{features.map((feature, index) => (
								<div key={index} className={styles.feature}>
									<div className={styles.featureIconWrapper}>
										<span className={styles.featureIcon}>
											{feature.icon}
										</span>
									</div>
									<div className={styles.featureTextWrapper}>
										<span className={styles.featureText}>
											{feature.text}
										</span>
										<span className={styles.featureLabel}>
											{feature.label}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className={styles.imageGrid}>
						{cardNumbers.map((num) => (
							<div key={num} className={styles.imageCard}>
								<Image
									src={`/images/klip/klip-${num}.avif`}
									alt={`Card ${num}`}
									fill
									className={styles.cardImage}
								/>
							</div>
						))}
					</div>
				</div>

				<div className={styles.desktopProfiles}>
					{ABOUT_PEOPLE.map((person, index) => (
						<article
							key={person.id}
							className={`${styles.profileRow} ${
								index % 2 === 1 ? styles.reverse : ""
							}`}
						>
							<div className={styles.profileImageWrap}>
								<Image
									src={person.imageSrc}
									alt={person.imageAlt}
									width={480}
									height={480}
									className={styles.profileImage}
								/>
							</div>
							<div className={styles.profileContent}>
								<div className={styles.nameWrapper}>
									<h3
										className={`${styles.profileName} ${
											person.id === "aya"
												? styles.ayaName
												: styles.bilalName
										}`}
									>
										{person.name}
									</h3>
									<span
										className={`${styles.profileRole} ${
											person.id === "aya"
												? styles.ayaRole
												: styles.bilalRole
										}`}
									>
										{person.role}
									</span>
								</div>
								<p className={styles.profileStory}>
									{person.story}
								</p>
								{person.certificates.length > 0 && (
									<div className={styles.certificatesRow}>
										{person.certificates.map(
											(certificate) => (
												<Image
													key={certificate.src}
													src={certificate.src}
													alt={certificate.alt}
													width={86}
													height={64}
													className={
														styles.certificateImage
													}
												/>
											),
										)}
									</div>
								)}
							</div>
						</article>
					))}
				</div>

				<div className={styles.flipperRow}>
					<Flipper />
				</div>
			</div>
		</section>
	)
}
