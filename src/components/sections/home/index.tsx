import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ServicesSection } from "@/components/sections/services"
import { GallerySection } from "@/components/sections/gallery"
import { ReviewsSection } from "@/components/sections/reviews"

export function HomeSections() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<GallerySection />
			<ReviewsSection />
		</>
	)
}
