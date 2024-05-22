<template>
	<div id="background">
		<i v-for="particle in particles" :key="particle.id" :class="particle.className" :style="{
			color: theme.secondaryColor,
			fontSize: `${particle.size / 20}rem`,
			opacity: .25 / randomInt(3, 10),
			top: `${particle.position.top}px`,
			left: `${particle.position.left}px`,
		}" />
	</div>
</template>

<script setup>
	// VUE
	import { ref } from 'vue'

	// UTILS
	import { generateSizesPositions, randomInt } from '../utils/random'
	import { calculateSubsetRatio } from '../utils/calculations'
	import { getWindowInnerWidth } from '@/utils/dom'

	// STORE
	import { useThemeStore } from "../store/theme"

	// STORE OBJECTS
	const themeStore = useThemeStore()
	
	// CONSTS
	const MIN_WIDTH = 350

	// REF
	const theme = ref()
	const particles = ref([])

	// METHODS
	const setTheme = () => { theme.value = themeStore.getTheme() }
	const generateParticles = () => {
		const faClassNames = [].concat(...Array(3).fill(theme.value.backgroundIcons))
		const randomSubset = faClassNames
			.slice()
			.sort(() => Math.random() - 0.5)
			.slice(0, Math.floor(faClassNames.length * calculateSubsetRatio(Math.max(getWindowInnerWidth(), MIN_WIDTH))))
		const sizesPositions = generateSizesPositions(
			randomSubset.length,
			Math.max(getWindowInnerWidth(), MIN_WIDTH),
			200, 30,
			Math.min(getWindowInnerWidth() / 10, 70)
		)
		for (let i = 0; i < randomSubset.length; i++) {
			const sp = sizesPositions[i]
			const cn = randomSubset[i]
			particles.value.push({ id: `${cn}-${i}`, className: cn, size: sp.size, position: sp.position })
		}
	}
	const clearParticles = () => particles.value = []
	const updateParticles = () => {
		clearParticles()
		generateParticles()
	}
	const onHorizontalResize = () => updateParticles()
	const init = () => generateParticles()
	const watchResize = () => {
		let previousWidth = getWindowInnerWidth()
		window.addEventListener('resize', () => {
			const currentWidth = getWindowInnerWidth()
			const widthDifference = currentWidth - previousWidth
			if (widthDifference !== 0 && !(currentWidth < MIN_WIDTH && previousWidth < MIN_WIDTH)) {
				onHorizontalResize()
			}
			previousWidth = currentWidth
		})
	}

	setTheme()
	init()
	watchResize()
</script>

<style scoped>
	#background {
		width: 100%;
		height: 200px;
		position: relative;
		overflow-x: hidden;
	}
	i {
		position: absolute;
	}
</style>