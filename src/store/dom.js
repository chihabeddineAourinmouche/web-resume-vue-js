import { defineStore } from 'pinia'

export const useDomStore = defineStore('dom', () => {
	return {
		// Getters
		getWindowInnerWidth() { return window.innerWidth },

		// Actions
		setTitle(title) { document.title = title },

		setBodyStyle(style) { Object.assign(document.body.style, style) },
	}
})
