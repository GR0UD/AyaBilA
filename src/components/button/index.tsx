import React from "react"
import styles from "./button.module.scss"

interface ButtonProps {
	children: React.ReactNode
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = (props: ButtonProps) => {
	return (
		<button onClick={props.onClick} className={styles.button}>
			{props.children}
		</button>
	)
}
