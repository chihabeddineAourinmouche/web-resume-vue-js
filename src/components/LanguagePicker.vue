<template>
	<div id="language-picker">
		<p id="message">{{ message }}</p>
		<div id="buttons">
			<div
				v-for="(language, index) in languages" :key="language"
				class="language-button"
				@click="pickLanguage(language)"
			>
				<span class="language-name" :style="{ color: index === 0 ? '#888' : '#aaa' }">
					{{ language.toUpperCase() }}
				</span>
				<span
					v-if="index === 0"
					id="counter"
					:style="{ color: theme.tertiaryColor }"
				>{{ counter }}</span>
			</div>
		</div>
	</div>
</template>

<script setup>
	const TARGET_TIME = 10
	const DEFAULT_LANGUAGE = 'en'

	// VUE
	import { computed, onBeforeMount, ref } from 'vue'

	// STORE
	import { useThemeStore } from '../store/theme'

	// STORE OBJECTS
	const themeStore = useThemeStore()

	// UTILS
	import { countDown } from '../utils/time'
	
	// EMITS
	const emit = defineEmits([ 'pick' ])

	// REF
	const counterValue = ref(TARGET_TIME)
	const message = ref("Pick a language you would like to view the UI in (Default is English)")
	const countDownId = ref() // NECESSARY TO ALLOW INTERRUPTING THE COUNTDOWN
	
	// PROPS
	defineProps({
		languages: { type: Array },
	})

	// COMPUTED
	const counter = computed(() => counterValue.value)
	const theme = computed(themeStore.getTheme)
	
	// METHODS
	const pickLanguage = (l = DEFAULT_LANGUAGE) => {
		clearInterval(countDownId.value)
		emit('pick', l)
	}
	const cancelPicking = () => clearInterval(countDownId.value)

	// LIFECYCLE HOOKS
	onBeforeMount(() => {
		countDownId.value = countDown(
			TARGET_TIME,
			() => { counterValue.value-- },
			() => { pickLanguage() }
		)
	})

	// EXPORT METHODS
	defineExpose({ cancelPicking })
</script>

<style>
	#language-picker {
		background: inherit;
		background-color: #fff;
		width: 100%;
		max-width: 350px;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}
	.language-button {
		background-color: #fafafa;
		width: 100%;
		max-width: 150px;
		min-width: 100px;
		height: 50px;
		border-radius: 15px;
		cursor: pointer;
		display: flex;
		place-content: center;
		place-items: center;
		margin: 10px;
		color: #aaa;
		font-weight: bold;
		font-size: 1.2em;
		position: relative;
	}
	.language-button:hover {
		background-color: #efefef;
	}
	#message {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px;
	}
	.language-name {
		cursor: inherit;
	}
	#counter {
		width: 30px;
		height: 30px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		position: absolute;
		right: 10px;
		cursor: inherit;
	}
</style>