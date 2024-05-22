import { defineStore } from 'pinia'
import { getItem, setItem } from '../utils/localStorage'

const KEY_NAME = 'uiLanguage'

const getUiLanguage = () => getItem(KEY_NAME)

export const useUiLanguageStore = defineStore('uiLanguage', () => {
	return {
		uiLanguage: null,

		// GETTERS
		getUiLanguage() { return getUiLanguage() ?? this.uiLanguage },

		// ACTIONS
		setUiLanguage(language) {
			setItem(KEY_NAME, language)
			this.uiLanguage = language
		}
	}
})

export {
	getUiLanguage
}