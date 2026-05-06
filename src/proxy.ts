import { type NextRequest, NextResponse } from "next/server"
import { DEFAULT_LOCALE, isLocale } from "@/lib/seo"

export function proxy(request: NextRequest) {
	const firstSegment = request.nextUrl.pathname.split("/").filter(Boolean)[0]
	const locale = isLocale(firstSegment) ? firstSegment : DEFAULT_LOCALE

	const response = NextResponse.next()
	response.headers.set("x-locale", locale)
	return response
}

export const config = {
	matcher: ["/((?!_next/static|_next/image|images|favicon.ico).*)"],
}
