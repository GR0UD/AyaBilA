type Theme = "blue" | "pink"

type StylesMap = Record<string, string>

export function getThemeClass(
	styles: StylesMap,
	theme: Theme,
	prefix = "theme",
) {
	return styles[`${prefix}-${theme}`] ?? ""
}
