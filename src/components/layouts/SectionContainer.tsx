import React from "react"
import styles from "./sectionContainer.module.scss"

interface SectionContainerProps {
	id: string
	className?: string
	children: React.ReactNode
}

export const SectionContainer = ({
	id,
	className = "",
	children,
}: SectionContainerProps) => (
	<section id={id} className={`${styles.section} ${className}`.trim()}>
		<div className={styles.container}>{children}</div>
	</section>
)
