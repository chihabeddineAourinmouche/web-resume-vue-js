<template>
	<div id="projects">
		<input
			type="text"
			placeholder="Search By Skills ( separated by ',' )"
			class="search"
			v-model="searchString"
			:style="{ borderBottomColor: theme.tertiaryColor }"
		/>
		<div v-for="project in filteredData" :key="project.id" class="project">
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
	import { ref, computed } from 'vue'

	const props = defineProps({
		projects: { type: Object },
		theme: { type: Object },
	})

	const searchString = ref('')

	const filteredData = computed(() => props.projects.filter(project => {
		if (searchString.value === '' || searchString.value.replace(' ', '') === '') {
			return true
		}
		const searchStrings = searchString.value.split(',').filter(s => s !== '')
		if (searchStrings.length === 0) {
			return true
		}
		return searchStrings.some(item => 
			project.name.toLowerCase().includes(item.toLowerCase()) ||
			project.description.toLowerCase().includes(item.toLowerCase()) ||
			project.skills.some(skill => skill.toLowerCase().includes(item.toLowerCase()))
		)
	}))
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

	@media (min-width: 351px) {
		#projects {
			padding: 20px 5%;
		}
	}
	.search {
		outline: none;
		border: none;
		border-bottom-width: 2px;
		border-bottom-style: solid;
		/* width: 200px; */
		height: 50px;
		padding: 5px;
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