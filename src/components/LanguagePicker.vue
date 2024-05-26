<template>
	<article id="language-picker">
		<p id="message">{{ message }}</p>
		<ul>
			<li
				v-for="(language, index) in languages" :key="language.code"
				@click="pickLanguage(language)"
			>
				<span class="language-name" :style="{ color: index === 0 ? '#888' : '#aaa' }">
					{{ language.name }}
				</span>
				<span
					v-if="index === 0"
					id="counter"
					:style="{ color: theme.tertiaryColor }"
				>{{ counter }}</span>
			</li>
		</ul>
	</article>
</template>

<script setup>
	const WAITING_TIME = 10

	// VUE
	import { computed, onBeforeMount, ref } from 'vue'

	// STORE
	import { useThemeStore } from '@/store/theme'

	// STORE OBJECTS
	const themeStore = useThemeStore()

	// UTILS
	import { countDown } from '@/utils/time'
	
	// EMITS
	const emit = defineEmits([ 'pick' ])

	// REF
	const counterValue = ref(WAITING_TIME)
	const countDownId = ref() // NECESSARY TO ALLOW INTERRUPTING THE COUNTDOWN
	
	// PROPS
	defineProps({
		languages: { type: Array },
		message: { type: String, default: 'Pick a language' },
	})

	// COMPUTED
	const counter = computed(() => counterValue.value)
	const theme = computed(themeStore.getTheme)
	
	// METHODS
	const pickLanguage = (l = null) => {
		clearInterval(countDownId.value)
		emit('pick', l)
	}
	const cancelPicking = () => clearInterval(countDownId.value)

	// LIFECYCLE HOOKS
	onBeforeMount(() => {
		countDownId.value = countDown(
			WAITING_TIME,
			() => { counterValue.value-- },
			() => { pickLanguage() }
		)
	})

	// EXPORT METHODS
	defineExpose({ cancelPicking })
</script>

<style scoped>
	article {
		background: inherit;
		background-color: #fff;
		width: 100%;
		max-width: 350px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		gap: 5px;
	}
	ul {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		gap: 10px;
		overflow-y: auto;
	}
	li {
		background-color: #fafafa;
		width: 100%;
		max-width: 150px;
		min-width: 100px;
		height: 50px;
		border-radius: 15px;
		padding: 10px;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #aaa;
		font-size: 1.2em;
	}
	li:hover {
		background-color: #efefef;
	}
	p {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px 50px;
		text-align: justify;
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
		cursor: inherit;
	}
</style>