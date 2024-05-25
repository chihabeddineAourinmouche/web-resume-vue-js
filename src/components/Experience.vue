<template>
	<section v-if="experienceUnits.length">
		<section-title :title="sectionTitle" id="experience" />
		<article>
			<ul>
				<li v-for="experienceUnit in experienceUnits" :key="experienceUnit.id">
					<h3>{{ `${experienceUnit.startYear}-${experienceUnit.endYear}, ${experienceUnit.jobTitle} @ ${experienceUnit.company}` }}</h3>
					<p>{{ experienceUnit.description }}</p>
				</li>
			</ul>
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
		experience: { en: 'Professional Experience', sp: 'Experiencia Profesional', fr: 'Experience Professionnelle' }
	}							
	
	// PROPS
	defineProps({
		experienceUnits: { type: Array }
	})

	// COMPUTED
	const sectionTitle = computed(() => getLocaleFor('experience'))
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
	ul {
		background-color: #fff;
		max-width: 700px;
		width: 100%;
		border-radius: 15px;
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 20px;
	}
	@media (max-width: 350px) {
		ul {
			padding: 20px 20px;
		}
	}
	@media (min-width: 350px) {
		ul {
			padding: 20px 5%;
		}
	}
	li {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	p {
		font-size: .8em;
		color: #555;
		text-align: justify;
	}
</style>