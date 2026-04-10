import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	/* config options here */
	sassOptions: {
		includePaths: ["./src"],
		additionalData: `$env: ${process.env.NODE_ENV};`,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
		],
	},
}

export default nextConfig
