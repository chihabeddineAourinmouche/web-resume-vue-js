<template>
	<section v-if="filteredSkills.length">
		<section-title :title="sectionTitle" />
		<article>
			<h3>{{ filterHintText }}</h3>
			<ul id="filter">
				<li
					class="filter-criteria"
					v-for="category in skillCategorySet" :key="category"
					:style="{
						backgroundColor: categorySelected(category) ? theme.secondaryColor : theme.tertiaryColor,
						color: theme.tertiaryColorContrast,
						fontWeight: categorySelected(category) ? 'bolder' : 'normal'
					}"
					@click="categorySelected(category) ? unSelectCategory(category) : selectCategory(category)"
				>{{ category }}</li>
				<i v-if="selectedCategories.length" id="filter-clear" class="fa-solid fa-xmark" @click="clearFilter" />
			</ul>
			<ul v-if="isSmallScreen" class="skill-view" id="skill-view-small-screen">
				<li class="skill" v-for="s in filteredSkills" :key="s.name">
					<star-rating :rating="s.level" />
					<span class="skill-name">{{ s.name }}</span>
				</li>
			</ul>
			<ul v-else class="skill-view">
				<li class="segment" v-for="segment in filteredSkillSegments" :key="segment">
					<ul class="segment-skills">
						<li class="skill" v-for="s in segment" :key="s.name">
							<star-rating :rating="s.level" />
							<span class="skill-name">{{ s.name }}</span>
						</li>
					</ul>
				</li>
			</ul>
		</article>
	</section>
</template>

<script setup>
	// CONSTS
	const MIN_WIDTH = 460

	// COMPONENTS
	import StarRating from '@/components/StarRating.vue'
	import SectionTitle from '@/components/SectionTitle.vue'

	// VUE
	import { ref, computed, onBeforeMount } from 'vue'

	// UTILS
	import { getWindowInnerWidth, watchHorizontalResize } from '@/utils/dom'

	// STORE
	import { useThemeStore } from "@/store/theme"
	import { useUiLanguageStore } from '@/store/uiLanguage'

	// STORE OBJECTS
	const themeStore = useThemeStore()
	const uiLanguageStore = useUiLanguageStore()

	// LOCALE
	const locale = {
		skills: { en: 'Skills', sp: 'Habilidades', fr: 'Compétences' },
		filterhinttext: {
			en: "Filter by category",
			sp: "Filtrar por categoría",
			fr: "Filtrer par catégorie"
		}
	}

	// REF
	const selectedCategories = ref([])
	const isSmallScreenRef = ref(getWindowInnerWidth() <= MIN_WIDTH)

	// PROPS
	const props = defineProps({
		skills: { type: Array }
	})

	// COMPUTED
	const sectionTitle = computed(() => getLocaleFor('skills'))
	const filterHintText = computed(() => getLocaleFor('filterhinttext'))
	const uiLanguage = computed(() => uiLanguageStore.getUiLanguage())
	const isSmallScreen = computed(() => isSmallScreenRef.value)
	const theme = computed(themeStore.getTheme)
	const skillsSortedBylevelDesc = computed(() => props.skills.sort((a, b) => b.level - a.level))
	const skillCategorySet = computed(() => new Set(props.skills.map(skill => skill.category)))
	const filteredSkills = computed(() => skillsSortedBylevelDesc.value.filter(skill => selectedCategories.value.includes(skill.category) || selectedCategories.value.length === 0))
	const filteredSkillSegments = computed(() => {
		const localFilteredSkills = [...filteredSkills.value]
		const segmentLength = 6
		const nbSegments = Math.ceil(localFilteredSkills.length / segmentLength)
		const segments = []
		for (let i = 0; i < nbSegments; i ++) { segments.push(localFilteredSkills.splice(0, segmentLength)) }
		return segments
	})

	// METHODS
	const getLocaleFor = (text) => locale[text][uiLanguage.value.code]
	const categorySelected = (category) => selectedCategories.value.includes(category)
	const clearFilter = () => selectedCategories.value = []
	const selectCategory = (category) => selectedCategories.value.push(category)
	const unSelectCategory = (category) => selectedCategories.value = selectedCategories.value.filter(c => c !== category)
	const onHorizontalResize = () => { isSmallScreenRef.value = getWindowInnerWidth() <= MIN_WIDTH }
	
	// LIFECYCLE HOOKS
	onBeforeMount(() => watchHorizontalResize(onHorizontalResize, MIN_WIDTH))
</script>

<style scoped>
	section {
		width: 100%;
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
		  display: flex;
		  flex-direction: column;
		  justify-content: center;
		  gap: 20px;
		  padding: 30px;
		  text-decoration: none;
	}
	.skill-view {
		display: flex;
		flex-wrap: wrap;
		gap: 15px;
	}
	#skill-view-small-screen {
		  flex-direction: column;
		  justify-content: center;
		  gap: 5px;
	}
	.skill {
		display: flex;
		justify-content: flex-start;
		gap: 5px;
		flex-wrap: wrap;
	}
	.skill-name {
		text-align: left;
		font-weight: bold;
	}
	#filter {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 5px;
		font-size: .7em;
	}
	h3 {
		opacity: .3;
		font-size: 1em;
	}
	.filter-criteria {
		padding: 2px 5px;
		display: flex;
		border-radius: 15px;
		cursor: pointer;
	}
	#filter-clear {
		color: #e35549;
		cursor: pointer;
	}
</style>