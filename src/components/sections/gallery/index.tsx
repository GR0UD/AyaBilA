"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/SectionHeader"
import { BeforeAfterSlider } from "./beforeAfterslider/BeforeAfterSlider"
import styles from "./gallery.module.scss"

type Category = "herrefrison" | "damefrison" | "kosmetolog"

// Gallery items with before/after images
const GALLERY_ITEMS = [
	// Herrefrisurer
	{
		id: 1,
		category: "herrefrison" as const,
		before: "/images/team/bilal-frisor.avif",
		after: "/images/team/bilal.jpg",
		alt: "Herreklip før og efter",
	},
	{
		id: 2,
		category: "herrefrison" as const,
		before: "/images/team/bilal.jpg",
		after: "/images/team/bilal-frisor.avif",
		alt: "Herreklip før og efter",
	},
	{
		id: 3,
		category: "herrefrison" as const,
		before: "/images/team/bilal-frisor.avif",
		after: "/images/team/bilal.jpg",
		alt: "Herreklip før og efter",
	},

	// Damefrisurer
	{
		id: 4,
		category: "damefrison" as const,
		before: "/images/team/aya-kosmetolog.avif",
		after: "/images/team/aya.jpg",
		alt: "Dameklip før og efter",
	},
	{
		id: 5,
		category: "damefrison" as const,
		before: "/images/team/aya.jpg",
		after: "/images/team/aya-kosmetolog.avif",
		alt: "Dameklip før og efter",
	},
	{
		id: 6,
		category: "damefrison" as const,
		before: "/images/team/aya-kosmetolog.avif",
		after: "/images/team/aya.jpg",
		alt: "Dameklip før og efter",
	},

	// Kosmetolog
	{
		id: 7,
		category: "kosmetolog" as const,
		before: "/images/team/aya.jpg",
		after: "/images/team/aya-kosmetolog.avif",
		alt: "Kosmetolog behandling før og efter",
	},
	{
		id: 8,
		category: "kosmetolog" as const,
		before: "/images/team/aya-kosmetolog.avif",
		after: "/images/team/aya.jpg",
		alt: "Kosmetolog behandling før og efter",
	},
	{
		id: 9,
		category: "kosmetolog" as const,
		before: "/images/team/aya.jpg",
		after: "/images/team/aya-kosmetolog.avif",
		alt: "Kosmetolog behandling før og efter",
	},
]

const FILTER_OPTIONS = [
	{ id: "herrefrison", label: "Herrefrisurer" },
	{ id: "damefrison", label: "Damefrisurer" },
	{ id: "kosmetolog", label: "Kosmetolog" },
] as const

export const GallerySection = () => {
	const [selectedCategory, setSelectedCategory] =
		useState<Category>("herrefrison")

	const filteredItems = GALLERY_ITEMS.filter(
		(item) => item.category === selectedCategory,
	)

	return (
		<section id="gallery" className={styles.gallery}>
			<div className={styles.container}>
				<SectionHeader
					title="Galleri"
					subtitle="Se vores før og efter resultater"
				/>

				<div className={styles.filters}>
					{FILTER_OPTIONS.map((option) => (
						<button
							key={option.id}
							className={`${styles.filterBtn} ${
								selectedCategory === option.id
									? styles.active
									: ""
							}`}
							onClick={() =>
								setSelectedCategory(option.id as Category)
							}
						>
							{option.label}
						</button>
					))}
				</div>

				<div className={styles.grid}>
					{filteredItems.map((item) => (
						<div key={item.id} className={styles.gridItem}>
							<BeforeAfterSlider
								beforeImage={item.before}
								afterImage={item.after}
								alt={item.alt}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
