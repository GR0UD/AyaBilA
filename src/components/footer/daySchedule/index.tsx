import { getDayName, getClosedLabel, SCHEDULE_CONFIG, type Language } from "@/lib/scheduleConfig"
import { useCurrentDay } from "@/hooks/useCurrentDay"
import styles from "./daySchedule.module.scss"

interface DayScheduleProps {
	language: Language
	sectionTitle: string
}

export const DaySchedule = ({ language, sectionTitle }: DayScheduleProps) => {
	const currentDay = useCurrentDay()
	const schedule = SCHEDULE_CONFIG.schedule
	const closedLabel = getClosedLabel(language)

	return (
		<div className={styles.hours}>
			<h4 className={styles.sectionTitle}>{sectionTitle}</h4>
			<div className={styles.schedule}>
				{schedule.map((item) => {
					const dayName = getDayName(item.dayIndex, language)
					const isToday = currentDay === item.dayIndex
					const displayHours = item.time ?? closedLabel

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
