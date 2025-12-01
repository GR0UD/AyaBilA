import Link from "next/link"
import styles from "./button.module.scss"

interface ButtonProps {
	href?: string
	children: React.ReactNode
	variant?: "primary" | "secondary"
	target?: string
	rel?: string
	className?: string
	padding?: string
	onClick?: () => void
}

export const Button = ({
	href,
	children,
	variant = "primary",
	target,
	rel,
	className,
	padding,
	onClick,
}: ButtonProps) => {
	const classNames = `${styles.button} ${styles[variant]} ${className || ""}`
	const style = padding ? { padding } : undefined

	if (href) {
		// External link
		if (href.startsWith("http")) {
			return (
				<a
					href={href}
					target={target}
					rel={rel}
					className={classNames}
					style={style}
				>
					{children}
				</a>
			)
		}
		// Internal link
		return (
			<Link href={href} className={classNames} style={style}>
				{children}
			</Link>
		)
	}

	// Regular button
	return (
		<button className={classNames} style={style} onClick={onClick}>
			{children}
		</button>
	)
}
