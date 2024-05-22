<template>
	<div id="main" :style="{ backgroundColor: theme.primaryColor }">
		<slot />
	</div>
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