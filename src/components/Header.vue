<template>
	<section>
		<slot />
		<button @click="$emit('onDataLanguageButtonClick')">
			<span
			class="fa-solid fa-language fa-2x"
			:style="{ color: theme.tertiaryColor }"
			/>
		</button>
	</section>
</template>

<script setup>
	// VUE
	import { computed } from 'vue'

	// STORE
	import { useThemeStore } from "@/store/theme"

	// STORE OBJECTS
	const themeStore = useThemeStore()

	// EMITS
	defineEmits(['onDataLanguageButtonClick'])

	// COMPUTED
	const theme = computed(themeStore.getTheme)
</script>

<style scoped>
	section {
		background-color: #fff;
		width: 100%;
		max-width: 700px;
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
		padding: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 30px;
		position: relative;
	}
	@media screen and (max-width: 500px) {
		section {
			border-radius: 15px;
			flex-direction: column;
		}
	}
	@media screen and (min-width: 500px) {
		section {
			border-radius: 100px 15px 15px 100px;
			flex-direction: row;
		}
	}
	button {
		all: unset;
		border: none;
		background: none;
		position: absolute;
		right: 20px;
		top: 20px;
		opacity: .3;
	}
	button:hover {
		opacity: 1;
	}
	button span {
		cursor: pointer;
	}
</style>