import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
	return {
		theme: ref({}),

		// Getters
		getTheme() { return this.theme },

		// Actions
		setTheme(theme) { this.theme = theme }
	}
})
