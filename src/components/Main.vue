<template>
	<div id="main" :style="{ backgroundColor: theme.primaryColor }">
		<slot />
	</div>
</template>

<script setup>
	// VUE
	import { ref } from 'vue'

	// STORE
	import { useThemeStore } from "../store/theme"

	// STORE OBJECTS
	const themeStore = useThemeStore()
	
	// REF
	const theme = ref()

	// METHODS
	const setTheme = () => { theme.value = themeStore.getTheme() }

	setTheme()
</script>

<style scoped>
	#main {
		width: 100%;
		min-width: 350px;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>