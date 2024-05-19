import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
	return {
		on: false,

		// Getters
		isOn() {
			return this.on
		},

		// Actions
		switchOnOff() {
			this.on = !this.on
		}
	}
})
