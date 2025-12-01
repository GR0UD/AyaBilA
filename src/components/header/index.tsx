import Image from "next/image"
import styles from "./header.module.scss"
import Link from "next/link"

export const Header = () => {
	return (
		<nav className={styles.nav}>
			<Image
				src="/logo.jpeg"
				alt=""
				width={100}
				height={80}
				className={styles.logo}
			/>

			<ul>
				<li>
					<Link href="/om-os" />
				</li>
			</ul>
		</nav>
	)
}
