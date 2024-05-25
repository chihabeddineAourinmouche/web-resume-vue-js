import { defineStore } from 'pinia'
import { getItem, setItem } from '@/utils/localStorage'

const KEY_NAME = 'uiLanguage'

const getUiLanguage = () => getItem(KEY_NAME)

export const useUiLanguageStore = defineStore('uiLanguage', () => {
	return {
		defaultUiLanguage: { code: 'en', name: 'English' },
		uiLanguages: [{code: 'en', name: 'English'}, {code: 'sp', name: 'Spanish'}, {code: 'fr', name: 'French'}],
		uiLanguage: null,

		// GETTERS
		getDefaultUiLanguage() { return this.defaultUiLanguage },
		getUiLanguages() { return this.uiLanguages },
		getUiLanguage() { return getUiLanguage() ?? this.uiLanguage },

		// ACTIONS
		setUiLanguage(language = null) {
			language = language ?? this.defaultUiLanguage
			setItem(KEY_NAME, language)
			this.uiLanguage = language
		}
	}
})

export {
	getUiLanguage
}