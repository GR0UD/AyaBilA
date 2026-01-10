"use client"

import { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import styles from "./services.module.scss"

type Category = "men" | "women" | "wax" | "kids"

interface Service {
	name: string
	duration: number
	price: number
	description: string
}

export const ServicesSection = () => {
	const { t, isRTL } = useLanguage()
	const [activeCategory, setActiveCategory] = useState<Category>("men")

	const categories: { key: Category; label: string }[] = [
		{ key: "men", label: t.services.categories.men },
		{ key: "women", label: t.services.categories.women },
		{ key: "wax", label: t.services.categories.wax },
		{ key: "kids", label: t.services.categories.kids },
	]

	const getServices = (): Service[] => {
		switch (activeCategory) {
			case "men":
				return t.services.menServices
			case "women":
				return t.services.womenServices
			case "wax":
				return t.services.waxServices
			case "kids":
				return t.services.kidsServices
			default:
				return []
		}
	}

	const getCategoryIcon = (category: Category): React.ReactNode => {
		switch (category) {
			case "men":
				return (
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						width="20"
						height="20"
					>
						<path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3h-3z" />
					</svg>
				)
			case "women":
				return (
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						width="20"
						height="20"
					>
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
					</svg>
				)
			case "wax":
				return (
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						width="20"
						height="20"
					>
						<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
					</svg>
				)
			case "kids":
				return (
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						width="20"
						height="20"
					>
						<path d="M13 2v8h8c0-4.42-3.58-8-8-8zm6.32 13.89C20.37 14.54 21 12.84 21 11H6.44l-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
					</svg>
				)
			default:
				return (
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						width="20"
						height="20"
					>
						<path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3h-3z" />
					</svg>
				)
		}
	}

	return (
		<section
			id="services"
			className={styles.services}
			dir={isRTL ? "rtl" : "ltr"}
		>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>{t.services.title}</h2>
					<p className={styles.subtitle}>{t.services.subtitle}</p>
				</div>

				<div className={styles.categories}>
					{categories.map((category) => (
						<button
							key={category.key}
							className={`${styles.categoryBtn} ${
								activeCategory === category.key
									? styles.active
									: ""
							}`}
							onClick={() => setActiveCategory(category.key)}
						>
							<span className={styles.categoryIcon}>
								{getCategoryIcon(category.key)}
							</span>
							<span className={styles.categoryLabel}>
								{category.label}
							</span>
						</button>
					))}
				</div>

				<div className={styles.grid}>
					{getServices().map((service, index) => (
						<div
							key={index}
							className={styles.card}
							onClick={() => {
								const bookingSection =
									document.getElementById("booking")
								if (bookingSection) {
									bookingSection.scrollIntoView({
										behavior: "smooth",
									})
								}
							}}
						>
							<div className={styles.cardHeader}>
								<h3 className={styles.serviceName}>
									{service.name}
								</h3>
							</div>
							<p className={styles.serviceDescription}>
								{service.description}
							</p>
							<div className={styles.cardFooter}>
								<span className={styles.serviceDuration}>
									<svg
										viewBox="0 0 24 24"
										fill="currentColor"
										width="16"
										height="16"
									>
										<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
									</svg>
									{service.duration} {t.services.duration}
								</span>
								<span className={styles.servicePrice}>
									{service.price} {t.services.currency}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
