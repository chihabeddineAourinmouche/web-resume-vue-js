<template>
	<div id="main" :style="{ backgroundColor: theme.primaryColor }">
		<slot />
	</div>
</template>

<script setup>
	import { ref } from 'vue'

	const theme = ref()

	import { useThemeStore } from "../store/theme"
	const themeStore = useThemeStore()
	theme.value = themeStore.getTheme()
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