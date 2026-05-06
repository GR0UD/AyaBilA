"use client"

import { ServiceCategory } from "@/lib/servicesData"
import { getThemeClass } from "@/lib/themeClass"
import { useTheme } from "@/hooks/useTheme"
import { useToggle } from "@/hooks/useToggle"
import { ServiceItem } from "../serviceItem"
import styles from "./serviceCategory.module.scss"

interface ServiceCategoryProps {
	category: ServiceCategory
	theme?: "blue" | "pink"
	initialOpen?: boolean
}

export const ServiceCategoryComponent = ({
	category,
	theme = "blue",
	initialOpen = true,
}: ServiceCategoryProps) => {
	const resolvedTheme = useTheme(theme)
	const { isOpen, toggle } = useToggle(initialOpen)

	return (
		<div className={styles.category}>
			<button className={styles.categoryHeader} onClick={toggle}>
				<div className={styles.categoryTitle}>
					<h3>{category.title}</h3>
					{category.subtitle && (
						<span className={styles.subtitle}>
							{category.subtitle}
						</span>
					)}
				</div>
				<div
					className={`${styles.categoryToggle} ${getThemeClass(styles, resolvedTheme)} ${isOpen ? styles.open : ""}`}
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
			</button>

			{isOpen && (
				<div className={styles.categoryContent}>
					{category.services.map((service) => (
						<ServiceItem
							key={service.id}
							service={service}
							theme={theme}
						/>
					))}
				</div>
			)}
		</div>
	)
}
