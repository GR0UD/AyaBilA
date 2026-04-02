import { ServicePage } from "@/lib/servicesData"
import { ServiceCategoryComponent } from "../serviceCategory"
import styles from "./servicesLayout.module.scss"

interface ServicesLayoutProps {
	data: ServicePage
	theme?: "blue" | "pink"
	categoriesInitiallyOpen?: boolean
}

export const ServicesLayout = ({
	data,
	theme = "blue",
	categoriesInitiallyOpen = true,
}: ServicesLayoutProps) => {
	return (
		<div className={`${styles.servicesLayout} ${styles[`theme-${theme}`]}`}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h1 className={styles[`title-${theme}`]}>{data.title}</h1>
					<p>{data.description}</p>
				</div>

				<div className={styles.categoriesWrapper}>
					{data.categories.map((category) => (
						<ServiceCategoryComponent
							key={category.id}
							category={category}
							theme={theme}
							initialOpen={categoriesInitiallyOpen}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
