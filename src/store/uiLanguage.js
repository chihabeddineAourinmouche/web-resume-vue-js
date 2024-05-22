import { defineStore } from 'pinia'
import { getItem, setItem, removeItem, clear } from '../utils/localStorage'

export const useUiLanguageStore = defineStore('uiLanguage', () => {
	return {
		uiLanguage: null,

		// Getters
		getUiLanguage() { return getItem('uiLanguage') ?? this.uiLanguage },

		// Actions
		setUiLanguage(language) {
			setItem('uiLanguage', language)
			this.uiLanguage = language
		}
	}
})
