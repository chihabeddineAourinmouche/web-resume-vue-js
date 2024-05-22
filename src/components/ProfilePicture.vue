<template>
	<img
		id="profile-picture"
		:style="{ borderColor: theme.secondaryColor }"
		:src="profilePicture"
		alt="profile picture"
	/>
</template>

<script setup>
	// VUE
	import { computed } from 'vue'

	// STORE
	import { useThemeStore } from "../store/theme"

	// STORE OBJECTS
	const themeStore = useThemeStore()

	// COMPUTED
	const theme = computed(themeStore.getTheme)

	// PROPS
	defineProps({
		profilePicture: { type: String },
	})
</script>

<style scoped>
	#profile-picture {
		height: 150px;
		width: 150px;
		border-radius: 50%;
		border-width: 10px;
		border-style: solid;
	}
</style>