import axios from 'axios'
import { defineStore } from 'pinia'

const JSON_BIN_API_URL = import.meta.env.VITE_JSON_BIN_API_URL
const X_MASTER_KEY = import.meta.env.VITE_JSON_BIN_X_MASTER_KEY

export const useDataStore = defineStore('data', () => {
	return {
		data: null,

		// Getters
		getTheme() { return this.data?.theme },
		getUiLanguages() { return this.data?.uiLanguages },
		getData(language) { return this.data?.resumes[language] },

		// Actions
		async fetchData() {
			try {
				const response = await axios.get(JSON_BIN_API_URL, {
					headers: {
						'x-master-key': X_MASTER_KEY,
					},
				})
				this.data = response.data.record
			} catch (error) {
				console.error('Error fetching data:', error)
				throw error
			}
		}
	}
})
