import { defineStore } from 'pinia'
import { ref } from 'vue'
import { calculateContrastingColor } from '@/utils/calculations'

export const useThemeStore = defineStore('theme', () => {
	return {
		theme: ref({}),

		// Getters
		getTheme() { return this.theme },

		// Actions
		setTheme(theme) {
			this.theme = theme
			this.theme.primaryColorContrast = calculateContrastingColor(this.theme.primaryColor)
			this.theme.secondaryColorContrast = calculateContrastingColor(this.theme.secondaryColor)
			this.theme.tertiaryColorContrast = calculateContrastingColor(this.theme.tertiaryColor)
		}
	}
})
