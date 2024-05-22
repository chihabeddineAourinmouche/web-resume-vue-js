<template>
	<div id="projects">
		<div class="search-container">
			<i class="search-icon fa-solid fa-magnifying-glass" :style="{ color: theme.tertiaryColor }" />
			<input
				class="search-input"
				type="text"
				:placeholder="`ex. ${placeholderSkills}`"
				v-model="searchString"
				:style="{ borderBottomColor: theme.tertiaryColor }"
			/>
		</div>
		<div v-for="project in projectsFilteredBySkills" :key="project.id" class="project">
			<h3 class="project-title">{{ project.name }}</h3>
			<p class="project-description">{{ project.description }}</p>
			<div class="project-skills">
				<span
					v-for="skill in project.skills"
					:key="skill"
					class="project-skill"
					:style="{ backgroundColor: theme.tertiaryColor, color: theme.tertiaryColorContrast }"
				>{{ skill }}</span>
			</div>
		</div>
	</div>
</template>

<script setup>
	// VUE
	import { ref, computed } from 'vue'

	// STORE
	import { useThemeStore } from "../store/theme"

	// STORE OBJECTS
	const themeStore = useThemeStore()

	// REF
	const searchString = ref('')

	// PROPS
	const props = defineProps({
		projects: { type: Array },
	})

	// COMPUTED
	const theme = computed(themeStore.getTheme)
	const projectsFilteredBySkills = computed(() => projectsSortedBySkillCountDesc.value.filter(project => {
		if (searchString.value === '' || searchString.value.replaceAll(' ', '') === '') {
			return true
		}
		const searchStrings = searchString.value.split(',').filter(s => s !== '')
		if (searchStrings.length === 0) {
			return true
		}
		return searchStrings.some(item => 
			project.name.replaceAll(' ', '').toLowerCase().includes(item.replaceAll(' ', '').toLowerCase()) ||
			project.description.replaceAll(' ', '').toLowerCase().includes(item.replaceAll(' ', '').toLowerCase()) ||
			project.skills.some(skill => skill.replaceAll(' ', '').toLowerCase().includes(item.replaceAll(' ', '').toLowerCase()))
		)
	}))
	const placeholderSkills = computed(() => {
		if (props.projects.length) {
			const skills = projectsSortedBySkillCountDesc.value[0].skills
			return skills.length
				? skills.length > 1
					? skills.sort(() => Math.random() - 0.5).slice(0, 2).join(',')
					: skills[0]
				: "leadership,photoshop"
		} else {
			return "leadership,photoshop"
		}
	})
	const projectsSortedBySkillCountDesc = computed(() => props.projects.sort((a, b) => b.skills.length - a.skills.length))
</script>

<style scoped>
	#projects {
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
		#projects {
			padding: 20px 20px;
		}
	}

	@media (min-width: 350px) {
		#projects {
			padding: 20px 5%;
		}
	}
	.search-container {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
	}
	.search-icon {
		position: absolute;
		left: 10px;
	}
	.search-input {
		outline: none;
		border: none;
		border-bottom-width: 2px;
		border-bottom-style: solid;
		width: 100%;
		height: 50px;
		padding: 5px 5px 5px 35px;
		cursor: text;
	}
	.project {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		list-style-type: none;
	}
	p {
		font-size: .8em;
		color: #555;
		text-align: justify;
	}
	.project-skills {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 2px;
		font-size: .6em;
	}
	.project-skill {
		padding: 2px 5px;
		display: flex;
		border-radius: 15px;
	}
</style>