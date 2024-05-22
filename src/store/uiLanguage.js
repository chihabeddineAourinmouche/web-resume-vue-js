import { defineStore } from 'pinia'
import { getItem, setItem } from '../utils/localStorage'

const KEY_NAME = 'uiLanguage'

export const useUiLanguageStore = defineStore('uiLanguage', () => {
	return {
		uiLanguage: null,

		// GETTERS
		getUiLanguage() { return getItem(KEY_NAME) ?? this.uiLanguage },

		// ACTIONS
		setUiLanguage(language) {
			setItem(KEY_NAME, language)
			this.uiLanguage = language
		}
	}
})
