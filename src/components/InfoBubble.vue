<template>
	<span
		class="info-bubble"
		@mouseleave="switchInfoBubbleOff"
		:style="{
			backgroundColor: isInfoBubbleOn ? theme.tertiaryColor : 'inherit',
		}"
	>
		<span
			@click="switchInfoBubble"
			class="info-bubble-icon fa-solid fa-circle-info fa-lg"
			:style="{
				color: isInfoBubbleOn ? theme.primaryColor : theme.tertiaryColor,
			}"
		/>
		<span
			v-if="isInfoBubbleOn"
			class="info-bubble-text"
			:style="{
				color: theme.tertiaryColorContrast,
			}"
		>{{ infoBubbleText }}</span>
	</span>
</template>

<script setup>
	// VUE
	import { ref, computed } from 'vue'

	// STORE
	import { useThemeStore } from "@/store/theme"

	// STORE OBJECTS
	const themeStore = useThemeStore()

	// REF
	const isInfoBubbleOn = ref(false)

	// PROPS
	defineProps({
		infoBubbleText: { type: String }
	})

	// COMPUTED
	const theme = computed(themeStore.getTheme)

	// METHODS
	const switchInfoBubble = () => { isInfoBubbleOn.value = !isInfoBubbleOn.value }
	const switchInfoBubbleOff = () => { isInfoBubbleOn.value = false }
</script>

<style scoped>
	.info-bubble {
		all: unset;
		border: none;
		background: none;
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-end;
		align-items: center;
		gap: 10px;
		padding: 5px;
		height: 20px;
		max-width: 490px;
		border-radius: 5px 15px 15px 5px;
		cursor: default;
		margin: auto; margin-right: 0; /* MAKE ELEMENT VERTICALLY ALIGN TO THE LEFT AGAINST PARENT FLEX ITEM ALIGNMENT*/
		opacity: .3;
	}
	.info-bubble:hover {
		opacity: 1;
	}
	.info-bubble-icon {
		cursor: pointer;
	}
	.info-bubble-text {
		font-size: .7em;
	}
</style>