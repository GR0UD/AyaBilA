import Image from "next/image"
import styles from "./footer.module.scss"

export const Footer = () => {
	return (
		<nav className={styles.nav}>
			<Image src="/logo.jpeg" alt="" width={100} height={80} />
		</nav>
	)
}
