<template>
	<a
		:id="id"
		class="section-title"
		:href="`#${id}`"
		:style="{
			textAlign: randomPosition < 1 ? 'left' : randomPosition < 2 ? 'center' : 'right',
			color: theme.secondaryColor
		}"
	>{{ title }}</a>
</template>

<script setup>
	import { randomInt } from '../utils/random_utils.js'
	import { computed, ref } from 'vue'

	const theme = ref()

	import { useThemeStore } from "../store/theme"
	const themeStore = useThemeStore()
	theme.value = themeStore.getTheme()
	
	const props = defineProps({
		title: { type: String },
	})

	const randomPosition = computed(() => randomInt(0, 3))
	const id = computed(() => `section-title-${props.title.toLowerCase()}`)
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