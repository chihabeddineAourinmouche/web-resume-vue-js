import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
	return {
		theme: {// DEFAULT THEME
			primaryColor: "#efefef",
			secondaryColor: "#b35949",
			tertiaryColor: "#d6c6c3",
			backgroundIcons: []
		},

		// Getters
		getTheme() { return this.theme },

		// Actions
		setTheme(theme) { this.theme = theme }
	}
})
