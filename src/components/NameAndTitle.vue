<template>
	<div id="name-and-title">
		<h2 id="name" :style="{ color: theme.secondaryColor }">{{ name }}</h2>
		<p id="title">{{ title }}</p>
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
	
	// PROPS
	defineProps({
		name: { type: String },
		title: { type: String },
	})

	// METHODS
	const setTheme = () => { theme.value = themeStore.getTheme() }

	setTheme()
</script>

<style scoped>
	#name-and-title {
		padding-top: 20px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		flex-grow: 1;
		text-align: left;
	}
	#name {
		font-size: 1.7em;
		font-weight: 500;
	}
</style>