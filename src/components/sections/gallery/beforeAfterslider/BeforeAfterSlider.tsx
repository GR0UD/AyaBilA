"use client"

import { useRef, useState, useEffect, useCallback, type FC } from "react"
import Image from "next/image"
import styles from "./beforeAfterSlider.module.scss"

interface BeforeAfterSliderProps {
	beforeImage: string
	afterImage: string
	alt: string
}

export const BeforeAfterSlider: FC<BeforeAfterSliderProps> = ({
	beforeImage,
	afterImage,
	alt,
}) => {
	const [sliderPosition, setSliderPosition] = useState(50)
	const [isHovering, setIsHovering] = useState(false)
	const [isDragging, setIsDragging] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)

	const handleDrag = useCallback((clientX: number) => {
		if (!containerRef.current) return
		const rect = containerRef.current.getBoundingClientRect()
		const x = clientX - rect.left
		// Allow it to slightly touch the very edge, but bound to 0-100%
		const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
		setSliderPosition(percentage)
	}, [])

	const onMouseMove = useCallback(
		(e: MouseEvent) => {
			if (!isDragging) return
			handleDrag(e.clientX)
		},
		[isDragging, handleDrag],
	)

	const onTouchMove = useCallback(
		(e: TouchEvent) => {
			if (!isDragging) return
			handleDrag(e.touches[0].clientX)
		},
		[isDragging, handleDrag],
	)

	const stopDrag = useCallback(() => {
		setIsDragging(false)
	}, [])

	// Use global event listeners so dragging doesn't break when leaving the container bounds
	useEffect(() => {
		if (isDragging) {
			window.addEventListener("mousemove", onMouseMove)
			window.addEventListener("mouseup", stopDrag)
			window.addEventListener("touchmove", onTouchMove, {
				passive: false,
			})
			window.addEventListener("touchend", stopDrag)
		} else {
			window.removeEventListener("mousemove", onMouseMove)
			window.removeEventListener("mouseup", stopDrag)
			window.removeEventListener("touchmove", onTouchMove)
			window.removeEventListener("touchend", stopDrag)
		}

		return () => {
			window.removeEventListener("mousemove", onMouseMove)
			window.removeEventListener("mouseup", stopDrag)
			window.removeEventListener("touchmove", onTouchMove)
			window.removeEventListener("touchend", stopDrag)
		}
	}, [isDragging, onMouseMove, onTouchMove, stopDrag])

	return (
		<div
			ref={containerRef}
			className={`${styles.container} ${isHovering && !isDragging ? styles.hovered : ""} ${isDragging ? styles.dragging : ""}`}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			<div className={styles.overlay} />

			{/* Before Image */}
			<div
				className={styles.imageWrapper}
				style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
			>
				<Image
					src={beforeImage}
					alt={`${alt} - Before`}
					fill
					className={styles.image}
					sizes="(max-width: 1023px) 92vw, 33vw"
				/>
				<span className={styles.beforeLabel}>Before</span>
			</div>

			{/* After Image */}
			<div
				className={styles.afterWrapper}
				style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
			>
				<Image
					src={afterImage}
					alt={`${alt} - After`}
					fill
					className={styles.image}
					sizes="(max-width: 1023px) 92vw, 33vw"
				/>
				<span className={styles.afterLabel}>After</span>
			</div>

			{/* Slider Line */}
			<div
				className={`${styles.line} ${isHovering || isDragging ? styles.lineVisible : ""}`}
				style={{ left: `${sliderPosition}%` }}
			/>

			{/* Slider Handle */}
			<div
				className={styles.slider}
				style={{ left: `${sliderPosition}%` }}
				onMouseDown={(e) => {
					e.preventDefault() // prevent text selection while dragging
					setIsDragging(true)
				}}
				onTouchStart={(e) => {
					// e.preventDefault() -> can't preventDefault perfectly here without turning off passive, but global handles it
					setIsDragging(true)
				}}
			>
				<div className={styles.handle}>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M15 18l-6-6 6-6" />
						<path d="M9 18l6-6-6-6" />
					</svg>
				</div>
			</div>
		</div>
	)
}
