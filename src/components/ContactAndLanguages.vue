<template>
	<section>
		<section-title :title="sectionTitle" />
		<slot />
	</section>
</template>

<script setup>
	// COMPONENTS
	import SectionTitle from '@/components/SectionTitle.vue';
	
	// VUE
	import { computed } from 'vue';

	// STORE
	import { useUiLanguageStore } from '@/store/uiLanguage'

	// STORE OBJECTS
	const uiLanguageStore = useUiLanguageStore()

	// LOCALE
	const locale = {
		contact: { en: 'Contact', sp: 'Contacto', fr: 'Contact' },
		languages: { en: 'Languages', sp: 'Idiomas', fr: 'Langues' },
	}

	// PROPS
	const props = defineProps({
		languages: { type: Array },
	})
	
	// COMPUTED
	const sectionTitle = computed(() => `
		${getLocaleFor('contact')}
		${props.languages.length ? ' & ' : ''}
		${props.languages.length ? getLocaleFor('languages') : ''}
	`)
	const uiLanguage = computed(() => uiLanguageStore.getUiLanguage())

	// METHODS
	const getLocaleFor = (text) => locale[text][uiLanguage.value.code]
</script>

<style scoped>
	section {
		max-width: 700px;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: space-around;
	}
	
	@media (max-width: 490px) {
		section {
			flex-direction: column;
			align-items: flex-end;
		}
	}
	
	@media (min-width: 490px) {
		section {
			flex-direction: row;
			align-items: flex-start;
		}
	}
</style>