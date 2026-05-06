import styles from "./sectionHeader.module.scss"

interface SectionHeaderProps {
	title: string
	subtitle: React.ReactNode
	badge?: string
	align?: "center" | "left"
	className?: string
}

export const SectionHeader = ({
	title,
	subtitle,
	badge,
	align = "center",
	className = "",
}: SectionHeaderProps) => (
	<header className={`${styles.header} ${styles[align]} ${className}`.trim()}>
		{badge && <span className={styles.badge}>{badge}</span>}
		<h2 className={styles.title}>{title}</h2>
		<p className={styles.subtitle}>{subtitle}</p>
	</header>
)
