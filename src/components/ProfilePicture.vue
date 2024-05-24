<template>
	<article>
		<img
			:style="{ borderColor: theme.secondaryColor }"
			:src="profilePictureSrc"
			alt="profile picture"
		/>
	</article>
</template>

<script setup>
	// VUE
	import { computed } from 'vue'

	// STORE
	import { useThemeStore } from "../store/theme"

	// STORE OBJECTS
	const themeStore = useThemeStore()

	// PROPS
	const props = defineProps({
		profilePicture: { type: String },
	})

	// COMPUTED
	const theme = computed(themeStore.getTheme)
	const profilePictureSrc = computed(() => `${new URL('@/assets', import.meta.url).href}/${props.profilePicture}`)// TODO - REMOVE WHEN LINKS COMES READY FROM BACKEND
</script>

<style scoped>
	img {
		height: 150px;
		width: 150px;
		border-radius: 50%;
		border-width: 10px;
		border-style: solid;
	}
</style>