import styles from "./sectionHeader.module.scss"

interface SectionHeaderProps {
	title: string
	subtitle: React.ReactNode
	className?: string
}

export const SectionHeader = ({
	title,
	subtitle,
	className = "",
}: SectionHeaderProps) => (
	<header className={`${styles.header} ${className}`.trim()}>
		<h2 className={styles.title}>{title}</h2>
		<p className={styles.subtitle}>{subtitle}</p>
	</header>
)
