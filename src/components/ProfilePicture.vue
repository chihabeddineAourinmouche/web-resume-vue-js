<template>
	<img
		id="profile-picture"
		:style="{ borderColor: theme.secondaryColor }"
		:src="profilePicture"
		alt="profile picture"
	/>
</template>

<script setup>
	import { ref } from 'vue'

	const theme = ref()

	import { useThemeStore } from "../store/theme"
	const themeStore = useThemeStore()
	theme.value = themeStore.getTheme()

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