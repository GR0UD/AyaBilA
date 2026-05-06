import Image, { type ImageProps } from "next/image"

export type AppImageProps = ImageProps

export function AppImage({ fill, sizes, ...props }: AppImageProps) {
	const resolvedSizes = fill && !sizes ? "100vw" : sizes

	return <Image {...props} fill={fill} sizes={resolvedSizes} />
}
