import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ServicesSection } from "@/components/sections/services"
import { TeamSection } from "@/components/sections/team"
import { ReviewsSection } from "@/components/sections/reviews"
import { BookingSection } from "@/components/sections/booking"

export default function Home() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<TeamSection />
			<ReviewsSection />
			<BookingSection />
		</>
	)
}
