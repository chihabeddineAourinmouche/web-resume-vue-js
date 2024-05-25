<template>
	<section>
		<section-title :title="sectionTitle" />
		<article>
			<p>{{ about }}</p>
		</article>
	</section>
</template>

<script setup>
	// COMPONENTS
	import SectionTitle from '@/components/SectionTitle.vue'

	// VUE
	import { computed } from 'vue'

	// STORE
	import { useUiLanguageStore } from '@/store/uiLanguage'

	// STORE OBJECTS
	const uiLanguageStore = useUiLanguageStore()

	// LOCALE
	const locale = {
		about: { en: 'About', sp: 'Acerca De', fr: 'A Propos' }
	}

	// PROPS
	defineProps({
		about: { type: String },
	})

	// COMPUTED
	const sectionTitle = computed(() => getLocaleFor('about'))
	const uiLanguage = computed(() => uiLanguageStore.getUiLanguage())

	// METHODS
	const getLocaleFor = (text) => locale[text][uiLanguage.value.code]
</script>

<style scoped>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}
	article {
		background-color: #fff;
		max-width: 700px;
		width: 100%;
		border-radius: 15px;
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
		text-align: center;
	}
	@media screen and (max-width: 350px) {
		article {
			padding: 20px;
		}
	}
	@media screen and (min-width: 350px) {
		article {
			padding: 20px 10%;
		}
	}
</style>