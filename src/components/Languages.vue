<template>
	<article v-if="languages.length">
		<ul>
			<li v-for="l in languages" :key="l.name">
				<span :style="{ color: color(l.level) }">{{ getLocaleFor(l.level) }}</span>
				<span>{{ l.name }}</span>
			</li>
		</ul>
	</article>
</template>

<script setup>
	// VUE
	import { computed, ref } from 'vue'

	// UTILS
	import { getUiText } from '@/utils/ui'

	// STORE
	import { useUiLanguageStore } from '@/store/uiLanguage'

	// STORE OBJECTS
	const uiLanguageStore = useUiLanguageStore()

	const uiName = ref('languages')

	// PROPS
	defineProps({
		languages: { type: Array }
	})

	// COMPUTED
	const locale = computed(() => getUiText(uiName.value))
	const uiLanguage = computed(() => uiLanguageStore.getUiLanguage())

	// METHODS
	const getLocaleFor = (text) => locale.value[text][uiLanguage.value.code]
	const color = (level) => {
		return level === 0
			? '#bd3a3a'
			: level === 1
				? '#cc9670'
				: level === 2
					? '#b5cc70'
					: '#70adcc'
	}
</script>

<style scoped>
	ul {
		  background-color: #fff;
		  border-radius: 15px;
		  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
		  display: flex;
		  flex-direction: column;
		  gap: 5px;
		  padding: 10px;
	}
	li {
		display: flex;
		justify-content: flex-end;
		gap: 5px;
	}
</style>