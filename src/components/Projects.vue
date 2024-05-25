<template>
	<section v-if="projectsFilteredBySkills.length">
		<section-title :title="sectionTitle" />
		<article>
			<label for="project-search-input">
				<span class="search-icon fa-solid fa-magnifying-glass" :style="{ color: theme.tertiaryColor }" />
				<input
					id="project-search-input"
					type="text"
					:placeholder="`ex. ${placeholderSkills}`"
					v-model="searchString"
					:style="{ borderBottomColor: theme.tertiaryColor }"
				/>
			</label>
			<ul id="project-list">
				<li v-for="project in projectsFilteredBySkills" :key="project.id" class="project">
					<h3>{{ project.name }}</h3>
					<p>{{ project.description }}</p>
					<ul class="project-skill-list">
						<li v-for="skill in project.skills" :key="skill">
							<span
								class="project-skill"
								:style="{ backgroundColor: theme.tertiaryColor, color: theme.tertiaryColorContrast }"
							>{{ skill }}</span>
						</li>
					</ul>
				</li>
			</ul>
		</article>
	</section>
</template>

<script setup>
	// COMPONENTS
	import SectionTitle from '@/components/SectionTitle.vue'
	
	// VUE
	import { ref, computed } from 'vue'

	// STORE
	import { useThemeStore } from "@/store/theme"
	import { useUiLanguageStore } from '@/store/uiLanguage'

	// STORE OBJECTS
	const themeStore = useThemeStore()
	const uiLanguageStore = useUiLanguageStore()

	// LOCALE
	const locale = {
		projects: { en: 'Projects', sp: 'Proyectos', fr: 'Projets' }
	}

	// REF
	const searchString = ref('')

	// PROPS
	const props = defineProps({
		projects: { type: Array },
	})

	// COMPUTED
	const sectionTitle = computed(() => getLocaleFor('projects'))
	const uiLanguage = computed(() => uiLanguageStore.getUiLanguage())
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

	// METHODS
	const getLocaleFor = (text) => locale[text][uiLanguage.value.code]
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
	  justify-content: space-between;
	  gap: 20px;
	}
	@media (max-width: 350px) {
		article {
			padding: 20px 20px;
		}
	}
	@media (min-width: 350px) {
		article {
			padding: 20px 5%;
		}
	}
	label {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
	}
	.search-icon {
		position: absolute;
		left: 10px;
	}
	input {
		outline: none;
		border: none;
		border-bottom-width: 2px;
		border-bottom-style: solid;
		width: 100%;
		height: 50px;
		padding: 5px 5px 5px 35px;
		cursor: text;
	}
	#project-list {
	  display: flex;
	  flex-direction: column;
	  justify-content: space-between;
	  gap: 20px;
	}
	p {
		font-size: .8em;
		color: #555;
		text-align: justify;
	}
	.project-skill-list {
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