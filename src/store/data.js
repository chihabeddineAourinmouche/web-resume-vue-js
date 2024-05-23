import axios from 'axios'
import { defineStore } from 'pinia'

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
				const response = await axios.get('https://api.jsonbin.io/v3/b/664e631ce41b4d34e4f7e30a', {
					headers: {
						'x-master-key': 'PUT KEY HERE',
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
