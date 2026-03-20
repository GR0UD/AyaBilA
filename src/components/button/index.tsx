import Link from "next/link"
import styles from "./button.module.scss"

interface ButtonProps {
	href?: string
	children: React.ReactNode
	variant?: "primary" | "secondary" | "ghost"
	target?: string
	rel?: string
	className?: string
	padding?: string
	onClick?: () => void
	ariaLabel?: string
	"aria-label"?: string
	"aria-labelledby"?: string
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
	"aria-label": ariaLabel,
	"aria-labelledby": ariaLabelledBy,
}: ButtonProps) => {
	const classNames = `${styles.button} ${styles[variant]} ${className || ""}`
	const style = padding ? { padding } : undefined
	const ariaProps = {
		...(ariaLabel && { "aria-label": ariaLabel }),
		...(ariaLabelledBy && { "aria-labelledby": ariaLabelledBy }),
	}

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
					{...ariaProps}
				>
					{children}
				</a>
			)
		}
		// Internal link
		return (
			<Link href={href} className={classNames} style={style} {...ariaProps}>
				{children}
			</Link>
		)
	}

	// Regular button
	return (
		<button className={classNames} style={style} onClick={onClick} {...ariaProps}>
			{children}
		</button>
	)
}
