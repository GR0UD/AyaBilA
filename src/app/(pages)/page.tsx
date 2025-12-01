import Image from "next/image"
import styles from "./page.module.scss"
import { Button } from "@/components/button"

export default function Home() {
	return (
		<>
			<header className={styles.header}>
				<div className="info">
					<h1>AyabilA</h1>

					<p>
						Velkommen til skønhedens verden. Vi bør ikke glemme os
						selv, og vi bør holder øjne og om vores udseende forkæle
						os selv lige så meget, som vi holder af andre omkring
						os.
					</p>

					<p>
						Hos AyabilA Frisør & Kosmetolog kan du forkæle dig selv
						fra top til tå. Vi har alle behandlinger til hår,
						ansigt, negle og endda krop, med over seks års erfaring.
						Vi bruger professionelle mærker.
					</p>

					<p>
						Hos os får du ikke kun behandling, men også vejledning
						til, hvordan du plejer dit hår og din hud også
						derhjemme. Vi analyserer dit hår eller din hud og
						rådgiver dig om den mest passende hjemmepleje for at
						bevare skønheden i det, du har fået fra os.
					</p>

					<Button>Book en tid</Button>
				</div>
				<Image
					src="/header-image.jpeg"
					width="700"
					height="670"
					alt="Billede af barberstang"
				/>
			</header>
		</>
	)
}
