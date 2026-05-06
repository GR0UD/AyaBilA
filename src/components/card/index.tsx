import type { ReactNode } from "react"

type BaseProps = {
	className?: string
	children: ReactNode
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
	if ("href" in props) {
		const { href, target, rel, className, children } = props
		return (
			<a href={href} target={target} rel={rel} className={className}>
				{children}
			</a>
		)
	}

	const { className, children } = props
	return <div className={className}>{children}</div>
}
