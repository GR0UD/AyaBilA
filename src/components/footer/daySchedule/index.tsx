import { SCHEDULE_CONFIG, getDayName } from "@/lib/scheduleConfig"
import { useCurrentDay } from "@/hooks/useCurrentDay"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/lib/translations"
import styles from "./daySchedule.module.scss"

export const DaySchedule = () => {
	const currentDay = useCurrentDay()
	const { language } = useLanguage()
	const schedule = SCHEDULE_CONFIG.schedule
	const t = translations[language]

	return (
		<div className={styles.hours}>
			<h4 className={styles.sectionTitle}>{t.footer.hours}</h4>
			<div className={styles.schedule}>
				{schedule.map((item) => {
					const dayName = getDayName(item.dayIndex, language)
					const isToday = currentDay === item.dayIndex
					const displayHours =
						item.time ?? SCHEDULE_CONFIG.closedLabel[language]

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
