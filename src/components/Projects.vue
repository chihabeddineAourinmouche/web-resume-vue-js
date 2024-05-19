<template>
	<div id="projects">
		<div v-for="project in data.projects" :key="project.id" class="project">
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
	defineProps({
		data: { type: Object },
		theme: { type: Object },
	})
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

	  @media (max-width: 350px) {
		padding: 20px 20px;
	  }

	  @media (min-width: 351px) {
		padding: 20px 5%;
	  }
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