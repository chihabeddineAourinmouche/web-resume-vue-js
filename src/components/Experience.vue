<template>
	<div id="experience">
		<div v-for="experienceUnit in data.experienceUnits" :key="experienceUnit.id" class="experience-unit">
			<h3 class="experience-unit-title">{{ `${experienceUnit.startYear}-${experienceUnit.endYear}, ${experienceUnit.jobTitle} @ ${experienceUnit.company}` }}</h3>
			<p class="experience-unit-description">{{ experienceUnit.description }}</p>
		</div>
	</div>
</template>

<script setup>
	defineProps({
		data: { type: Object }
	})
</script>

<style scoped>
	#experience {
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
	.experience-unit {
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
</style>