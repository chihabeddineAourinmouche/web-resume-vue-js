<template>
	<header :style="{ justifyContent: alignment }">
		<h2>
			<a
				:id="id"
				:href="`#${id}`"
				:style="{ color: theme.secondaryColor }"
			>{{ title }}</a>
		</h2>
	</header>
</template>

<script setup>
	// VUE
	import { computed } from 'vue'

	// UTILS
	import { randomInt } from '@/utils/random.js'

	// STORE
	import { useThemeStore } from "@/store/theme"

	// STORE OBJECTS
	const themeStore = useThemeStore()

	// PROPS
	const props = defineProps({
		title: { type: String },
		id: { type: String },
	})

	// COMPUTED
	const theme = computed(themeStore.getTheme)
	const alignment = computed(() => {
		const r = randomInt(0, 3)
		return r < 1 ? 'flex-start' : r < 2 ? 'center' : 'flex-end'
	})
	// const id = computed(() => `section-title-${encodeURIComponent(props.title).toLowerCase()}`)
</script>

<style scoped>
	header {
		flex-basis: 100%;
		width: 100%;
		display: flex;
		align-items: center;
	}
	a {
		max-width: 700px;
		margin-top: 20px;
		padding: 0px 50px;
		outline: none;
		cursor: pointer;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>