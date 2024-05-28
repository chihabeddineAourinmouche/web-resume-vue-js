<template>
	<button
		@mouseleave="switchInfoBubbleOff"
		:style="{
			backgroundColor: isInfoBubbleOn ? theme.tertiaryColor : 'inherit',
		}"
	>
		<span
			@click="switchInfoBubble"
			id="button-icon"
			class="fa-solid fa-circle-info fa-lg"
			:style="{
				color: isInfoBubbleOn ? theme.primaryColor : theme.tertiaryColor,
			}"
		/>
		<span
			v-if="isInfoBubbleOn"
			id="info-bubble"
			:style="{
				color: theme.tertiaryColorContrast,
			}"
		>{{ infoBubbleText }}</span>
	</button>
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
	button {
		all: unset;
		border: none;
		background: none;
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-end;
		align-items: center;
		gap: 10px;
		padding: 5px 5px 5px 10px;
		height: 20px;
		max-width: 490px;
		border-radius: 15px;
		cursor: default;
		margin: auto; margin-right: 0; /* MAKE ELEMENT VERTICALLY ALIGN TO THE LEFT AGAINST PARENT FLEX ITEM ALIGNMENT*/
	}
	#button-icon {
		cursor: pointer;
		opacity: .3;
	}
	#button-icon:hover {
		opacity: 1;
	}
	#info-bubble {
		font-size: .7em;
	}
</style>