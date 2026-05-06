import type { MetadataRoute } from "next"
import { LOCALES, SITE_URL, getLocalePath } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
	const baseRoutes = ["/", "/frisor", "/kosmetolog"]
	const localeRoutes = LOCALES.map((locale) => getLocalePath(locale) || "/")
	const uniqueRoutes = Array.from(new Set([...baseRoutes, ...localeRoutes]))

	return uniqueRoutes.map((route) => ({
		url: `${SITE_URL}${route}`,
		lastModified: new Date(),
	}))
}
