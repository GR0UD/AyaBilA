"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaFacebookF, FaInstagram, FaTiktok, FaPhone } from "react-icons/fa"
import { HiMenu, HiX } from "react-icons/hi"
import { Button } from "@/components/button"
import styles from "./header.module.scss"

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	const currentDay = new Date().getDay()
	const dayMap = [
		"Søndag",
		"Mandag",
		"Tirsdag",
		"Onsdag",
		"Torsdag",
		"Fredag",
		"Lørdag",
	]
	const hoursMap = [
		"Lukket",
		"9:30 - 17:00",
		"9:30 - 17:00",
		"9:30 - 17:00",
		"10:00 - 17:00",
		"10:00 - 17:00",
		"9:30 - 15:30",
	]

	const currentDayName = dayMap[currentDay]
	const todayHours = hoursMap[currentDay]

	const navLinks = [
		{ href: "/services", label: "Services" },
		{ href: "/om-os", label: "Om Os" },
		{ href: "/kontakt", label: "Kontakt" },
	]

	return (
		<>
			<div className={styles.topBar}>
				<div className={styles.topBarContainer}>
					<div className={styles.topBarLeft}>
						<Button href="tel:60609927" variant="secondary">
							<FaPhone size={14} />
							<span>60 60 99 27</span>
						</Button>
						<Button
							href="https://ayabila.onlinebooq.dk/"
							target="_blank"
							rel="noopener noreferrer"
							variant="primary"
						>
							Book Nu
						</Button>
					</div>
					<div className={styles.socialIcons}>
						<Link
							href="https://www.facebook.com/profile.php?id=100064157105267"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook"
						>
							<FaFacebookF size={16} />
						</Link>
						<Link
							href="https://www.instagram.com/ayabila2019"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
						>
							<FaInstagram size={16} />
						</Link>
						<Link
							href="https://www.tiktok.com/@0ayabila0"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="TikTok"
						>
							<FaTiktok size={16} />
						</Link>
					</div>
				</div>
			</div>

			<nav className={styles.nav}>
				<div className={styles.navContainer}>
					<Link href="/" className={styles.logoLink}>
						<Image
							src="/logo.jpeg"
							alt="AyabilA Logo"
							width={100}
							height={85}
							loading="lazy"
							className={styles.logo}
						/>
					</Link>

					<ul className={styles.navLinks}>
						{navLinks.map((link) => (
							<li key={link.href}>
								<Link href={link.href}>{link.label}</Link>
							</li>
						))}
					</ul>

					<button
						className={styles.burger}
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label="Toggle menu"
					>
						{menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
					</button>
				</div>
			</nav>

			{menuOpen && (
				<div className={styles.mobileMenu}>
					<ul>
						{navLinks.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									onClick={() => setMenuOpen(false)}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	)
}
