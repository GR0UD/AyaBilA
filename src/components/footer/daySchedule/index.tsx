import { SCHEDULE_CONFIG } from "@/lib/scheduleConfig"
import { useCurrentDay } from "@/hooks/useCurrentDay"
import styles from "./daySchedule.module.scss"

const ENGLISH_DAY_NAMES = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"]

export const DaySchedule = () => {
	const currentDay = useCurrentDay()
	const schedule = SCHEDULE_CONFIG.schedule

	return (
		<div className={styles.hours}>
			<h4 className={styles.sectionTitle}>Åbningstider</h4>
			<div className={styles.schedule}>
				{schedule.map((item) => {
					const dayName = ENGLISH_DAY_NAMES[item.dayIndex]
					const isToday = currentDay === item.dayIndex
					const displayHours = item.time ?? "Lukket"

					return (
						<p
							key={item.dayIndex}
							className={isToday ? styles.highlight : ""}
						>
							<span className={styles.dayName}>{dayName}</span>
							<span className={styles.dayHours}>
								{displayHours}
							</span>
						</p>
					)
				})}
			</div>
		</div>
	)
}
