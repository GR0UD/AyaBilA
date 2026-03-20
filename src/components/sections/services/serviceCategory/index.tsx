"use client"

import { useState } from "react"
import { ServiceCategory } from "@/lib/servicesData"
import { ServiceItem } from "../serviceItem"
import styles from "./serviceCategory.module.scss"

interface ServiceCategoryProps {
	category: ServiceCategory
	theme?: "blue" | "pink"
}

export const ServiceCategoryComponent = ({
	category,
	theme = "blue",
}: ServiceCategoryProps) => {
	const [isOpen, setIsOpen] = useState(true)

	return (
		<div className={styles.category}>
			<button
				className={styles.categoryHeader}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className={styles.categoryTitle}>
					<h3>{category.title}</h3>
					{category.subtitle && (
						<span className={styles.subtitle}>{category.subtitle}</span>
					)}
				</div>
				<div
				className={`${styles.categoryToggle} ${styles[`theme-${theme}`]} ${
					isOpen ? styles.open : ""
				}`}
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
					<ServiceItem key={service.id} service={service} theme={theme} />
				))}
			</div>
		)}
	</div>
	)
}