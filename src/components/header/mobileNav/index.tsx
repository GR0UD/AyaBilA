"use client"

import type { FC } from "react"
import { Button } from "@/components/button"
import { LanguageSwitcher } from "../languageSwitcher"
import type { NavLink } from "../index"
import styles from "./mobileNav.module.scss"

interface MobileNavProps {
	isOpen: boolean
	onClose: () => void
	navLinks: readonly NavLink[]
	onScrollToSection: (sectionId: string) => void
}

export const MobileNav: FC<MobileNavProps> = ({
	isOpen,
	onClose,
	navLinks,
	onScrollToSection,
}) => {
	const handleNavClick = (sectionId: string) => {
		onScrollToSection(sectionId)
		onClose()
	}

	return (
		<nav className={`${styles.mobileNav} ${isOpen ? styles.open : ""}`}>
			<ul className={styles.navList}>
				{navLinks.map((link) => (
					<li key={link.id}>
						<button onClick={() => handleNavClick(link.id)}>
							{link.label}
						</button>
					</li>
				))}
			</ul>

			<div className={styles.mobileActions}>
				<LanguageSwitcher variant="mobile" />
				<Button
					href="https://ayabila.onlinebooq.dk/"
					target="_blank"
					rel="noopener noreferrer"
					variant="primary"
				>
					Book tid
				</Button>
			</div>
		</nav>
	)
}
