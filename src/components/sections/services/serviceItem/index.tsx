"use client"

import { Service } from "@/lib/servicesData"
import { getThemeClass } from "@/lib/themeClass"
import { useTheme } from "@/hooks/useTheme"
import { useToggle } from "@/hooks/useToggle"
import styles from "./serviceItem.module.scss"

interface ServiceItemProps {
	service: Service
	theme?: "blue" | "pink"
}

export const ServiceItem = ({ service, theme = "blue" }: ServiceItemProps) => {
	const resolvedTheme = useTheme(theme)
	const { isOpen, toggle } = useToggle(false)

	return (
		<div className={styles.serviceItem}>
			<button className={styles.itemHeader} onClick={toggle}>
				<div className={styles.itemTop}>
					<div className={styles.itemTitle}>
						<h4>{service.title}</h4>
						{service.duration && (
							<span className={styles.duration}>
								{service.duration}
							</span>
						)}
					</div>
					<div className={styles.itemRight}>
						<span
							className={`${styles.price} ${getThemeClass(styles, resolvedTheme, "price")}`}
						>
							{service.price}
						</span>
						<div
							className={`${styles.toggleBtn} ${getThemeClass(styles, resolvedTheme)} ${isOpen ? styles.open : ""}`}
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<polyline points="6 9 12 15 18 9"></polyline>
							</svg>
						</div>
					</div>
				</div>
			</button>

			{isOpen && (
				<div className={styles.itemContent}>
					<p className={styles.description}>{service.description}</p>
					{service.details && service.details.length > 0 && (
						<ul className={styles.details}>
							{service.details.map((detail, idx) => (
								<li key={idx}>{detail}</li>
							))}
						</ul>
					)}
				</div>
			)}
		</div>
	)
}
