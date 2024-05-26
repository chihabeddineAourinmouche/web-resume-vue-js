<template>
	<article>
		<img
			:style="{ borderColor: theme.secondaryColor }"
			:src="profilePictureSrc"
			alt="profile picture"
			draggable="false"
		/>
	</article>
</template>

<script setup>
	// CONSTS
	const DEFAULT_SRC = 'https://raw.githubusercontent.com/chihabeddineAourinmouche/web-resume-vue-js.github.io/main/src/assets/images/default_profile_picture.jpg'

	// VUE
	import { computed } from 'vue'

	// STORE
	import { useThemeStore } from "@/store/theme"

	// STORE OBJECTS
	const themeStore = useThemeStore()

	// PROPS
	const props = defineProps({
		profilePicture: { type: String },
	})

	// COMPUTED
	const theme = computed(themeStore.getTheme)
	const profilePictureSrc = computed(() => props.profilePicture || DEFAULT_SRC)
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