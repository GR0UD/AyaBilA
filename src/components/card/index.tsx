import type { ReactNode } from "react"
import styles from "./card.module.scss"

type BaseProps = {
	className?: string
	children: ReactNode
	variant?: "plain" | "outlined" | "filled"
	padding?: "none" | "sm" | "md" | "lg"
}

type LinkCardProps = BaseProps & {
	href: string
	target?: string
	rel?: string
}

type DivCardProps = BaseProps & {
	href?: never
}

export function Card(props: LinkCardProps | DivCardProps) {
	const { className, children, variant = "plain", padding = "none" } = props

	const classNames = [
		styles.card,
		styles[variant],
		styles[`pad-${padding}`],
		"href" in props ? styles.clickable : "",
		className,
	]
		.filter(Boolean)
		.join(" ")

	if ("href" in props) {
		const { href, target, rel } = props as LinkCardProps
		const safeRel =
			target === "_blank" && !rel ? "noopener noreferrer" : rel
		return (
			<a href={href} target={target} rel={safeRel} className={classNames}>
				{children}
			</a>
		)
	}

	return <div className={classNames}>{children}</div>
}
