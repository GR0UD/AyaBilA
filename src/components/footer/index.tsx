"use client"

import {
	FaFacebookF,
	FaInstagram,
	FaTiktok,
	FaPhone,
	FaMapMarkerAlt,
} from "react-icons/fa"
import styles from "./footer.module.scss"

export const Footer = () => {
	// Get current day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
	const currentDay = new Date().getDay()

	// Map day numbers to Danish day names
	const dayMap = [
		"Søndag",
		"Mandag",
		"Tirsdag",
		"Onsdag",
		"Torsdag",
		"Fredag",
		"Lørdag",
	]
	const currentDayName = dayMap[currentDay]

	const schedule = [
		{ day: "Mandag", hours: "9:30 - 17:00" },
		{ day: "Tirsdag", hours: "9:30 - 17:00" },
		{ day: "Onsdag", hours: "9:30 - 17:00" },
		{ day: "Torsdag", hours: "10:00 - 17:00" },
		{ day: "Fredag", hours: "10:00 - 17:00" },
		{ day: "Lørdag", hours: "9:30 - 15:30" },
		{ day: "Søndag", hours: "Lukket" },
	]

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.info}>
					<div className={styles.brand}>
						<h3>AyabilA</h3>
						<p className={styles.contact}>
							<FaPhone size={18} />
							<a href="tel:60609927">60 60 99 27</a>
						</p>
						<p className={styles.address}>
							<FaMapMarkerAlt size={18} />
							<span>
								Kongebrogade 29,
								<br />
								Kolding, 6000
								<br />
								Denmark
							</span>
						</p>
					</div>

					<div className={styles.hours}>
						<h4>Åbningstider</h4>
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
									<span>{item.day}:</span>{" "}
									<span>{item.hours}</span>
								</p>
							))}
						</div>
					</div>

					<div className={styles.mapContainer}>
						<iframe
							className={styles.map}
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2269.8367890654645!2d9.473016976916947!3d55.49115997305165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ca1d8e4a0e6c7%3A0x4e4e4e4e4e4e4e4e!2sKongebrogade%2029%2C%206000%20Kolding!5e0!3m2!1sen!2sdk!4v1234567890123"
							width="100%"
							height="250"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>

				<div className={styles.bottom}>
					<div className={styles.social}>
						<a
							href="https://www.facebook.com/profile.php?id=100064157105267"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook"
						>
							<FaFacebookF size={24} />
						</a>
						<a
							href="https://www.instagram.com/ayabila2019"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
						>
							<FaInstagram size={24} />
						</a>
						<a
							href="https://www.tiktok.com/@0ayabila0"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="TikTok"
						>
							<FaTiktok size={24} />
						</a>
					</div>
					<p className={styles.copyright}>© 2024 ayabila.dk</p>
				</div>
			</div>
		</footer>
	)
}
