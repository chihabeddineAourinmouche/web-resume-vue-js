<template>
	<section v-if="projectsFilteredBySkills.length || searchString">
		<section-title :title="sectionTitle" :id="uiName" />
		<article>
			<info-bubble :infoBubbleText="infoBubbleText" />
			<label for="project-search-input" :style="{ borderBottomColor: theme.tertiaryColor }">
				<span class="search-icon fa-solid fa-magnifying-glass" :style="{ color: theme.tertiaryColor }" />
				<input
					id="project-search-input"
					type="text"
					:placeholder="`e.g., ${placeholderSkills}`"
					v-model="searchString"
				/>
				<span v-if="searchString" id="search-clear" class="fa-solid fa-xmark search-icon" @click="setSearchString()" />
			</label>
			<ul v-if="projectsFilteredBySkills.length" id="project-list">
				<li v-for="project in projectsFilteredBySkills" :key="project.id" class="project">
					<h3>{{ project.name }}</h3>
					<p>{{ project.description }}</p>
					<ul class="project-skill-list">
						<li v-for="skill in project.skills" :key="skill">
							<span
								@click="isSkillSearchedFor(skill) ? setSearchString() : setSearchString(skill)"
								@mousemove="(event) => {
									event.target.style.backgroundColor = theme.secondaryColor
									event.target.style.color = theme.secondaryColorContrast
								}"
								@mouseleave="(event) => {
									event.target.style.backgroundColor = isSkillSearchedFor(skill) ? theme.secondaryColor : theme.tertiaryColor
									event.target.style.color = isSkillSearchedFor(skill) ? theme.secondaryColorContrast : theme.tertiaryColorContrast
								}"
								class="project-skill"
								:style="{
									backgroundColor: isSkillSearchedFor(skill) ? theme.secondaryColor : theme.tertiaryColor,
									color: isSkillSearchedFor(skill) ? theme.secondaryColorContrast : theme.tertiaryColorContrast,
									cursor: 'pointer',
								}"
							>{{ skill }}</span>
						</li>
					</ul>
				</li>
			</ul>
			<p v-else id="no-project-fallback">{{ noProjectFallbackText }}</p>
		</article>
	</section>
</template>

<script setup>
	// COMPONENTS
	import SectionTitle from '@/components/SectionTitle.vue'
	import InfoBubble from '@/components/InfoBubble.vue'
	
	// VUE
	import { ref, computed } from 'vue'

	// UTILS
	import { getUiText } from '@/utils/ui'
	import { shuffleArray } from '@/utils/random'

	// STORE
	import { useThemeStore } from "@/store/theme"
	import { useUiLanguageStore } from '@/store/uiLanguage'

	// STORE OBJECTS
	const themeStore = useThemeStore()
	const uiLanguageStore = useUiLanguageStore()

	// REF
	const uiName = ref('projects')
	const searchString = ref('')

	// PROPS
	const props = defineProps({
		projects: { type: Array },
	})

	// COMPUTED
	const locale = computed(() => getUiText(uiName.value))
	const sectionTitle = computed(() => getLocaleFor('projects'))
	const noProjectFallbackText = computed(() => getLocaleFor('noprojectfallback'))
	const infoBubbleText = computed(() => getLocaleFor('infobubbletext'))
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
			const skills = [].concat(...props.projects.map(project => project.skills))
			const distinctSkills = Array.from(new Set(skills))
			const shuffledSkills = shuffleArray(distinctSkills)
			return shuffledSkills.length
				? shuffledSkills.length > 1
					// ? skills.sort(() => Math.random() - 0.5).slice(0, 2).join(',')
					? shuffledSkills.slice(0, 2).join(',')
					: shuffledSkills[0]
				: "leadership,photoshop"
		} else {
			return "leadership,photoshop"
		}
	})
	const projectsSortedBySkillCountDesc = computed(() => props.projects.sort((a, b) => b.skills.length - a.skills.length))

	// METHODS
	const getLocaleFor = (text) => locale.value[text][uiLanguage.value.code]
	const setSearchString = (s = '') => { searchString.value = s }
	const isSkillSearchedFor = (skill) => {
		const searchStrings = searchString.value.split(',').filter(s => s !== '')
		return searchStrings.some(item => {
			return skill.replaceAll(' ', '').toLowerCase().includes(item.replaceAll(' ', '').toLowerCase())
		})
	}

	defineExpose({ setSearchString })
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
	  align-items: flex-end;
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
	article > :not(:first-child):not(:last-child) {
		margin-bottom: 20px;
	}
	label {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		border-bottom-width: 2px;
		border-bottom-style: solid;
	}
	input {
		border: none;
		width: 100%;
		height: 50px;
		padding: 5px 15px;
		cursor: text;
	}
	#search-clear {
		color: #e35549;
		cursor: pointer;
	}
	#project-list {
	  display: flex;
	  flex-direction: column;
	  justify-content: space-between;
	  gap: 20px;
	}
	#project-list > li {
		display: flex;
		flex-direction: column;
		gap: 5px;
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
	#no-project-fallback {
		width: 100%;
	}
</style>