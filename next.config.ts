import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	/* config options here */
	sassOptions: {
		includePaths: ["./src"],
		additionalData: `$env: ${process.env.NODE_ENV};`,
	},
}

export default nextConfig
