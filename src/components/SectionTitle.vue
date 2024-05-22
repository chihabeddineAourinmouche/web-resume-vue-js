<template>
	<a
		:id="id"
		class="section-title"
		:href="`#${id}`"
		:style="{
			textAlign: alignment < 1 ? 'left' : alignment < 2 ? 'center' : 'right',
			color: theme.secondaryColor
		}"
	>{{ title }}</a>
</template>

<script setup>
	// VUE
	import { computed, ref } from 'vue'

	// UTILS
	import { randomInt } from '../utils/random.js'

	// STORE
	import { useThemeStore } from "../store/theme"

	// STORE OBJECTS
	const themeStore = useThemeStore()

	// REF
	const theme = ref()
	
	// PROPDS
	const props = defineProps({
		title: { type: String },
	})

	// COMPUTED
	const alignment = computed(() => randomInt(0, 3))
	const id = computed(() => `section-title-${props.title.toLowerCase()}`)

	// METHODS
	const setTheme = () => { theme.value = themeStore.getTheme() }

	setTheme()
</script>

<style scoped>
	.section-title {
		max-width: 700px;
		width: 100%;
		margin-top: 20px;
		padding: 0px 50px;
		outline: none;
		font-size: 1.3em;
		cursor: pointer;
		text-decoration: none;
		font-family: Verdana, sans-serif;
	}

	.section-title:hover {
		text-decoration: underline;
	}
</style>