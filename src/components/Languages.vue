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
	import { computed } from 'vue'

	// STORE
	import { useUiLanguageStore } from '@/store/uiLanguage'

	// STORE OBJECTS
	const uiLanguageStore = useUiLanguageStore()

	// LOCALE
	const locale = {
		0: { en: 'Beginner', es: 'Principiante', fr: 'Débutant' },
		1: { en: 'Intermediate', es: 'Intermedio', fr: 'Intermédiaire' },
		2: { en: 'Proficient', es: 'Avanzado', fr: 'Avancé' },
		3: { en: 'Bilingual', es: 'Bilingüe', fr: 'Bilingue' },
	}

	// PROPS
	defineProps({
		languages: { type: Array }
	})

	// COMPUTED
	const uiLanguage = computed(() => uiLanguageStore.getUiLanguage())

	// METHODS
	const getLocaleFor = (text) => locale[text][uiLanguage.value.code]
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
		  text-decoration: none;
	}
	li {
		display: flex;
		justify-content: flex-end;
		gap: 5px;
	}
</style>