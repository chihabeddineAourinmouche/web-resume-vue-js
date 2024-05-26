<template>
	<section>
		<section-title :title="sectionTitle" :id="uiName" />
		<slot />
	</section>
</template>

<script setup>
	// COMPONENTS
	import SectionTitle from '@/components/SectionTitle.vue';
	
	// VUE
	import { computed, ref } from 'vue';

	// UTILS
	import { getUiText } from '@/utils/ui'

	// STORE
	import { useUiLanguageStore } from '@/store/uiLanguage'

	// STORE OBJECTS
	const uiLanguageStore = useUiLanguageStore()

	// REF
	const uiName = ref('contactandlanguages')

	// PROPS
	const props = defineProps({
		languages: { type: Array },
	})
	
	// COMPUTED
	const locale = computed(() => getUiText(uiName.value))
	const sectionTitle = computed(() => `
		${getLocaleFor('contact')}
		${props.languages.length ? ' & ' : ''}
		${props.languages.length ? getLocaleFor('languages') : ''}
	`)
	const uiLanguage = computed(() => uiLanguageStore.getUiLanguage())

	// METHODS
	const getLocaleFor = (text) => locale.value[text][uiLanguage.value.code]
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