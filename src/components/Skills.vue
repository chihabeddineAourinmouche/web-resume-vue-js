<template>
	<div id="skills">
		<div id="filter">
			<p id="filter-hint">{{ filterHint }}</p>
			<span
				class="filter-criteria"
				v-for="category in skillCategorySet" :key="category"
				:style="{
					backgroundColor: categorySelected(category) ? theme.secondaryColor : theme.tertiaryColor,
					color: theme.tertiaryColorContrast,
					fontWeight: categorySelected(category) ? 'bolder' : 'normal'
				}"
				@click="categorySelected(category) ? unSelectCategory(category) : selectCategory(category)"
			>{{ category }}</span>
			<i v-if="selectedCategories.length" id="filter-clear" class="fa-solid fa-xmark" @click="clearFilter" />
		</div>
		<div v-if="isSmallScreen" class="skill-view" id="skill-view-small-screen">
			<div class="skill" v-for="s in filteredSkills" :key="s.name">
				<star-rating :rating="s.level" />
				<span class="skill-name">{{ s.name }}</span>
			</div>
		</div>
		<div v-else class="skill-view">
			<div class="segment" v-for="segment in filteredSkillSegments" :key="segment">
				<div class="skill" v-for="s in segment" :key="s.name">
					<star-rating :rating="s.level" />
					<span class="skill-name">{{ s.name }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	// CONSTS
	const MIN_WIDTH = 460

	// COMPONENTS
	import StarRating from './StarRating.vue'

	// VUE
	import { ref, computed, onBeforeMount } from 'vue'

	// UTILS
	import { getWindowInnerWidth, watchHorizontalResize } from '../utils/dom'

	// STORE
	import { useThemeStore } from "../store/theme"

	// STORE OBJECTS
	const themeStore = useThemeStore()

	// REF
	const filterHint = ref('Filter by category')
	const selectedCategories = ref([])
	const isSmallScreenRef = ref(getWindowInnerWidth() <= MIN_WIDTH)

	// PROPS
	const props = defineProps({
		skills: { type: Array }
	})

	// COMPUTED
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
	const categorySelected = (category) => selectedCategories.value.includes(category)
	const clearFilter = () => selectedCategories.value = []
	const selectCategory = (category) => selectedCategories.value.push(category)
	const unSelectCategory = (category) => selectedCategories.value = selectedCategories.value.filter(c => c !== category)
	const onHorizontalResize = () => { isSmallScreenRef.value = getWindowInnerWidth() <= MIN_WIDTH }
	
	// LIFECYCLE HOOKS
	onBeforeMount(() => watchHorizontalResize(onHorizontalResize, MIN_WIDTH))
</script>

<style scoped>
	#skills {
		  background-color: #fff;
		  max-width: 700px;
		  width: 100%;
		  border-radius: 15px;
		  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
		  display: flex;
		  flex-direction: column;
		  justify-content: center;
		  gap: 5px;
		  /* padding: 10px; */
		  text-decoration: none;
	}
	.skill-view {
		display: flex;
		flex-wrap: wrap;
		gap: 15px;
		padding: 30px;
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
	.skill-category {
		text-align: left;
		font-size: .7em;
	}
	#filter {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 5px;
		font-size: .6em;
	}
	@media screen and (max-width: 350px) {
		#filter {
			padding: 20px;
		}
	}
	@media screen and (min-width: 350px) {
		#filter {
			padding: 20px 5%;
		}
	}
	#filter-hint {
		width: 100%;
		height: 30px;
		opacity: .3;
		font-size: 1.5em;
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