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
	import { computed, onBeforeMount, onBeforeUpdate, onUpdated, ref } from 'vue'

	// UTILS
	import { generateSizesPositions, randomInt } from '@/utils/random'
	import { calculateSubsetRatio } from '@/utils/calculations'
	import { getWindowInnerWidth, watchHorizontalResize } from '@/utils/dom'

	// STORE
	import { useThemeStore } from "@/store/theme"

	// STORE OBJECTS
	const themeStore = useThemeStore()
	
	// CONSTS
	const MIN_WIDTH = 350

	// REF
	const ptcls = ref([])
	
	// COMPUTED
	const theme = computed(themeStore.getTheme)
	const particleRepeatTimes = computed(() => {
		// RULE OF THUMB FOR ICON DENSITY
		return theme.value.backgroundIcons
			? theme.value.backgroundIcons.length <= 5
				? 8
				: theme.value.backgroundIcons.length <= 10
					? 4
					: theme.value.backgroundIcons.length <= 20
						? 2
						: 1
			: 2
	})
	const particles  = computed(() => ptcls.value)

	// METHODS
	const generateParticles = () => {
		const repeatTimes = particleRepeatTimes.value
		const faClassNames = [].concat(...Array(repeatTimes).fill(theme.value.backgroundIcons))
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
			ptcls.value.push({ id: `${cn}-${i}`, className: cn, size: sp.size, position: sp.position })
		}
	}
	const clearParticles = () => ptcls.value = []
	const updateParticles = () => {
		clearParticles()
		generateParticles()
	}
	const onHorizontalResize = () => updateParticles()
	const init = () => generateParticles()

	// LIFECYCLE HOOKS
	onBeforeMount(() => {
		init()
		watchHorizontalResize(onHorizontalResize, MIN_WIDTH, 100)
	})
	onBeforeUpdate(updateParticles)
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