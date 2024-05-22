<template>
	<div id="language-picker">
		<div v-for="language in languages" :key="language" class="language-button" @click="pickLanguage(language)">{{ language.toUpperCase() }}</div>
	</div>
</template>

<script setup>
	// EMITS
	const emit = defineEmits([ 'pick' ])

	// PROPS
	defineProps({
		languages: { type: Array },
	})

	// METHODS
	const pickLanguage = (l) => {
		emit('pick', l)
	}
</script>

<style>
	#language-picker {
		background: inherit;
		background-color: #fff;
		width: 100%;
		max-width: 350px;
		max-height: 350px;
		overflow-y: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.language-button {
		background-color: coral;
		max-width: 150px;
		min-width: 100px;
		height: 50px;
		border-radius: 15px;
		cursor: pointer;
		display: flex;
		place-content: center;
		place-items: center;
		margin: 10px;
		color: white;
		font-weight: bold;
		font-size: 1.2em;
	}
</style>