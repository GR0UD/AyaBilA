declare global {
	interface Window {
		translate?: (
			langCode: string,
			onComplete?: (result?: unknown) => void,
			onError?: (error?: unknown) => void,
		) => Promise<void>
	}
}

export {}
