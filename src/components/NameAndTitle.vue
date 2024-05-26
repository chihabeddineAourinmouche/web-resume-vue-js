<template>
	<header>
		<h2 :style="{ color: theme.secondaryColor }">{{ name }}</h2>
		<h3>{{ title }}</h3>
	</header>
</template>

<script setup>
	// VUE
	import { computed } from 'vue'

	// STORE
	import { useThemeStore } from "@/store/theme"

	// STORE OBJECTS
	const themeStore = useThemeStore()
	
	// COMPUTED
	const theme = computed(themeStore.getTheme)
	
	// PROPS
	defineProps({
		name: { type: String },
		title: { type: String },
	})
</script>

<style scoped>
	header {
		padding-top: 20px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		flex-grow: 1;
		text-align: left;
	}
	h2 {
		font-size: 1.7em;
	}
</style>