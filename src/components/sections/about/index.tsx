import Image from "next/image"
import styles from "./about.module.scss"
import { ABOUT_PEOPLE } from "./data"
import { FacebookIcon, InstagramIcon } from "./socialIcons"
import { Flipper } from "./flipper"

export const AboutSection = () => {
	const features = [
		{ text: "Erhvervsuddannet", icon: "🎓" },
		{ text: "10+ års erfaring", icon: "⭐" },
		{ text: "Premium produkter", icon: "💎" },
		{ text: "Personlig service", icon: "✂️" },
		{ text: "Certificeret behandler", icon: "🎖️" },
		{ text: "Central beliggenhed", icon: "📍" },
	]

	return (
		<section id="about" className={styles.about}>
			<div className={styles.container}>
				<div className={styles.topRow}>
					<div className={styles.content}>
						<span className={styles.badge}>AyabilA</span>
						<h2 className={styles.title}>Om os</h2>
						<p className={styles.text}>
							Hos AyabilA kombinerer vi årtiers erfaring med
							moderne teknikker. Bilal er ekspert i herreklip,
							barbering og VIP-behandlinger, mens Aya mestrer
							dameklip, voksbehandlinger, bryn og hårkure. Sammen
							leverer vi kvalitet, detaljer og personlig service i
							en luksuriøs atmosfære.
						</p>
						<div className={styles.features}>
							{features.map((feature, index) => (
								<div key={index} className={styles.feature}>
									<span className={styles.featureIcon}>
										{feature.icon}
									</span>
									<span className={styles.featureText}>
										{feature.text}
									</span>
								</div>
							))}
						</div>
					</div>

					<div className={styles.salonImageWrapper}>
						<Image
							src="/images/misc/AyabilA.jpg"
							alt="AyabilA salon interior"
							width={640}
							height={520}
							className={styles.salonImage}
						/>
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
								<h3
									className={`${styles.profileName} ${
										person.id === "aya"
											? styles.ayaName
											: styles.bilalName
									}`}
								>
									{person.name}
								</h3>
								<p
									className={`${styles.profileRole} ${
										person.id === "aya"
											? styles.ayaRole
											: styles.bilalRole
									}`}
								>
									{person.role}
								</p>
								<p className={styles.profileStory}>
									{person.story}
								</p>
								<div className={styles.socials}>
									{person.socialLinks.map((link) => (
										<a
											key={link.platform}
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											className={`${styles.socialLink} ${
												person.id === "aya"
													? styles.ayaSocial
													: styles.bilalSocial
											}`}
											aria-label={link.label}
										>
											{link.platform === "instagram" ? (
												<InstagramIcon />
											) : (
												<FacebookIcon />
											)}
										</a>
									))}
								</div>
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
