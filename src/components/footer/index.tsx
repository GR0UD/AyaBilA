"use client"

import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"
import styles from "./footer.module.scss"

export const Footer = () => {
	const { t, isRTL, language } = useLanguage()

	// Get current day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
	const currentDay = new Date().getDay()

	// Map day numbers to day names in current language
	const dayMaps = {
		da: [
			"Søndag",
			"Mandag",
			"Tirsdag",
			"Onsdag",
			"Torsdag",
			"Fredag",
			"Lørdag",
		],
		en: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		],
		ar: [
			"الأحد",
			"الإثنين",
			"الثلاثاء",
			"الأربعاء",
			"الخميس",
			"الجمعة",
			"السبت",
		],
	}
	const currentDayName = dayMaps[language][currentDay]

	const schedules = {
		da: [
			{ day: "Mandag", hours: "10:00 - 17:00" },
			{ day: "Tirsdag", hours: "10:00 - 17:00" },
			{ day: "Onsdag", hours: "10:00 - 17:00" },
			{ day: "Torsdag", hours: "10:00 - 18:00" },
			{ day: "Fredag", hours: "10:00 - 18:00" },
			{ day: "Lørdag", hours: "10:00 - 15:30" },
			{ day: "Søndag", hours: "Lukket" },
		],
		en: [
			{ day: "Monday", hours: "10:00 - 17:00" },
			{ day: "Tuesday", hours: "10:00 - 17:00" },
			{ day: "Wednesday", hours: "10:00 - 17:00" },
			{ day: "Thursday", hours: "10:00 - 18:00" },
			{ day: "Friday", hours: "10:00 - 18:00" },
			{ day: "Saturday", hours: "10:00 - 15:30" },
			{ day: "Sunday", hours: "Closed" },
		],
		ar: [
			{ day: "الإثنين", hours: "10:00 - 17:00" },
			{ day: "الثلاثاء", hours: "10:00 - 17:00" },
			{ day: "الأربعاء", hours: "10:00 - 17:00" },
			{ day: "الخميس", hours: "10:00 - 18:00" },
			{ day: "الجمعة", hours: "10:00 - 18:00" },
			{ day: "السبت", hours: "10:00 - 15:30" },
			{ day: "الأحد", hours: "مغلق" },
		],
	}

	const schedule = schedules[language]

	return (
		<footer className={styles.footer} dir={isRTL ? "rtl" : "ltr"}>
			<div className={styles.container}>
				<div className={styles.grid}>
					<div className={styles.brand}>
						<Image
							src="/logo.png"
							alt="AyabilA"
							width={180}
							height={157}
							className={styles.logoImage}
						/>
						<div className={styles.socialLinks}>
							<a
								href="https://www.instagram.com/ayabila2019/"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.socialLink}
								aria-label="Instagram"
							>
								<svg
									viewBox="0 0 24 24"
									fill="currentColor"
									width="24"
									height="24"
								>
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
								</svg>
							</a>
							<a
								href="https://www.facebook.com/p/AyabilA-100064157105267/"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.socialLink}
								aria-label="Facebook"
							>
								<svg
									viewBox="0 0 24 24"
									fill="currentColor"
									width="24"
									height="24"
								>
									<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
								</svg>
							</a>
							<a
								href="https://www.tiktok.com/@0ayabila0"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.socialLink}
								aria-label="TikTok"
							>
								<svg
									viewBox="0 0 24 24"
									fill="currentColor"
									width="24"
									height="24"
								>
									<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
								</svg>
							</a>
						</div>
						<div className={styles.businessInfo}>
							<p className={styles.businessName}>
								AyabilA Frisør & kosmetolog
							</p>
							<p className={styles.cvr}>CVR-nr 45102459</p>
						</div>
						<div className={styles.contactInfo}>
							<a
								href={`mailto:${t.footer.email}`}
								className={styles.contactItem}
							>
								<svg
									className={styles.icon}
									viewBox="0 0 24 24"
									fill="currentColor"
									width="18"
									height="18"
								>
									<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
								</svg>
								<span>{t.footer.email}</span>
							</a>
							<a
								href={`tel:${t.footer.phone.replace(
									/\s/g,
									""
								)}`}
								className={styles.contactItem}
							>
								<svg
									className={styles.icon}
									viewBox="0 0 24 24"
									fill="currentColor"
									width="18"
									height="18"
								>
									<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
								</svg>
								<span>{t.footer.phone}</span>
							</a>
							<a
								href="https://www.google.com/maps/place/AyabilA+Fris%C3%B8r+%26+Kosmetolog/@55.4859423,9.4751387,639m/data=!3m1!1e3!4m15!1m8!3m7!1s0x464c9f7b595a53cd:0x3e700d5ea050b5f7!2sKongebrogade+29,+6000+Kolding!3b1!8m2!3d55.4859393!4d9.4777136!16s%2Fg%2F11cpl6gzjj!3m5!1s0x464c9feddd36dbb3:0xc5f61999a2cd3632!8m2!3d55.4859467!4d9.4777344!16s%2Fg%2F11krmty54q!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.contactItem}
							>
								<svg
									className={styles.icon}
									viewBox="0 0 24 24"
									fill="currentColor"
									width="18"
									height="18"
								>
									<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
								</svg>
								<span>{t.footer.address}</span>
							</a>
						</div>
					</div>

					<div className={styles.hours}>
						<h4 className={styles.sectionTitle}>
							{t.footer.hours}
						</h4>
						<div className={styles.schedule}>
							{schedule.map((item) => (
								<p
									key={item.day}
									className={
										item.day === currentDayName
											? styles.highlight
											: ""
									}
								>
									<span className={styles.dayName}>
										{item.day}
									</span>
									<span className={styles.dayHours}>
										{item.hours}
									</span>
								</p>
							))}
						</div>
					</div>

					<div className={styles.mapSection}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.6784329844186!2d9.472019776891475!3d55.49048997322783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ca16c3ab916b5%3A0x5e5d52dd61c87813!2sKongebrogade%2029%2C%206000%20Kolding!5e0!3m2!1sen!2sdk!4v1736415000000!5m2!1sen!2sdk"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>

			<div className={styles.bottom}>
				<p className={styles.copyright}>{t.footer.copyright}</p>
			</div>
		</footer>
	)
}
