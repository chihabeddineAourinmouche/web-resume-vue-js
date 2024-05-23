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
		<div class="skill" v-for="s in filteredSkills" :key="s.name">
			<star-rating :rating="s.level" />
			<span class="skill-name">{{ s.name }}</span>
			<span class="skill-category">( {{ s.category }} )</span>
		</div>
	</div>
</template>

<script setup>
	// COMPONENTS
	import StarRating from './StarRating.vue'

	// VUE
	import { ref, computed } from 'vue'

	// STORE
	import { useThemeStore } from "../store/theme"

	// STORE OBJECTS
	const themeStore = useThemeStore()

	// REF
	const filterHint = ref('Filter by category')
	const selectedCategories = ref(['Method'])

	// PROPS
	const props = defineProps({
		skills: { type: Array }
	})

	// COMPUTED
	const theme = computed(themeStore.getTheme)
	const skillsSortedBylevelDesc = computed(() => props.skills.sort((a, b) => b.level - a.level))
	const filteredSkills = computed(() => skillsSortedBylevelDesc.value.filter(skill => selectedCategories.value.includes(skill.category) || selectedCategories.value.length === 0))
	const skillCategorySet = computed(() => new Set(props.skills.map(skill => skill.category)))

	// METHODS
	const categorySelected = (category) => selectedCategories.value.includes(category)
	const clearFilter = () => selectedCategories.value = []
	const selectCategory = (category) => selectedCategories.value.push(category)
	const unSelectCategory = (category) => selectedCategories.value = selectedCategories.value.filter(c => c !== category)
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
		  padding: 10px;
		  text-decoration: none;
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