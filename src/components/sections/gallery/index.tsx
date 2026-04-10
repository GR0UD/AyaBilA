"use client"

import { useState } from "react"
import { BeforeAfterSlider } from "./BeforeAfterSlider"
import styles from "./gallery.module.scss"

type Category = "herrefrison" | "damefrison" | "kosmetolog"

// Gallery items with before/after images
// Using placeholder images - replace with real ones later
const GALLERY_ITEMS = [
	// Herre Frisør
	{
		id: 1,
		category: "herrefrison" as const,
		before: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
		after: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
		alt: "Transformation 1",
	},
	{
		id: 2,
		category: "herrefrison" as const,
		before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
		after: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
		alt: "Transformation 2",
	},
	{
		id: 3,
		category: "herrefrison" as const,
		before: "https://images.unsplash.com/photo-1500402448245-d49e3b0ba28d?w=500&h=500&fit=crop",
		after: "https://images.unsplash.com/photo-1494761681033-6461ffad8d80?w=500&h=500&fit=crop",
		alt: "Transformation 3",
	},

	// Dame Frisør
	{
		id: 4,
		category: "damefrison" as const,
		before: "https://images.unsplash.com/photo-1500402448245-d49e3b0ba28d?w=500&h=500&fit=crop",
		after: "https://images.unsplash.com/photo-1494761681033-6461ffad8d80?w=500&h=500&fit=crop",
		alt: "Transformation 4",
	},
	{
		id: 5,
		category: "damefrison" as const,
		before: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
		after: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=500&fit=crop",
		alt: "Transformation 5",
	},
	{
		id: 6,
		category: "damefrison" as const,
		before: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
		after: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
		alt: "Transformation 6",
	},

	// Kosmetolog
	{
		id: 7,
		category: "kosmetolog" as const,
		before: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
		after: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=500&fit=crop",
		alt: "Transformation 7",
	},
	{
		id: 8,
		category: "kosmetolog" as const,
		before: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
		after: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
		alt: "Transformation 8",
	},
	{
		id: 9,
		category: "kosmetolog" as const,
		before: "https://images.unsplash.com/photo-1500402448245-d49e3b0ba28d?w=500&h=500&fit=crop",
		after: "https://images.unsplash.com/photo-1494761681033-6461ffad8d80?w=500&h=500&fit=crop",
		alt: "Transformation 9",
	},
]

const FILTER_OPTIONS = [
	{ id: "herrefrison", label: "Herre Frisør" },
	{ id: "damefrison", label: "Dame Frisør" },
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
				<header className={styles.header}>
					<h2 className={styles.title}>Galleri</h2>
					<p className={styles.subtitle}>
						Se vores før og efter resultater
					</p>

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
				</header>

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
