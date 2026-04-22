"use client"

import Image from "next/image"
import { useState } from "react"
import styles from "./markLogo.module.scss"

export const MarkLogo = () => {
	const [isAnimating, setIsAnimating] = useState(false)

	const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		e.stopPropagation()

		if (isAnimating) return

		setIsAnimating(true)

		// Fade out animation
		const duration = 600 // milliseconds
		const startTime = Date.now()

		const animateBody = () => {
			const elapsed = Date.now() - startTime
			const progress = Math.min(elapsed / duration, 1)

			document.body.style.opacity = String(1 - progress)

			if (progress < 1) {
				requestAnimationFrame(animateBody)
			} else {
				// Navigation after fade completes
				window.location.href = "https://galkins.dev"
			}
		}

		requestAnimationFrame(animateBody)
	}

	return (
		<button
			onClick={handleClick}
			className={styles.credit}
			title="Af Mark Galkins"
			disabled={isAnimating}
		>
			<Image
				src="/images/Mark.avif"
				alt="Mark's Portfolio"
				width={20}
				height={20}
				className={styles.creditLogo}
			/>
		</button>
	)
}
