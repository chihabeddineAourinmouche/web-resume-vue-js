<template>
	<div id="education">
		<div v-for="educationUnit in data.educationUnits" :key="educationUnit.id" class="education-unit">
			<h3 class="education-unit-title">{{ `${educationUnit.endYear}, ${educationUnit.major}, ${educationUnit.school}` }}</h3>
			<p class="education-unit-description">{{ educationUnit.description }}</p>
		</div>
	</div>
</template>

<script setup>
	defineProps({
		data: { type: Object }
	})
</script>

<style scoped>
	#education {
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
		#education {
			padding: 20px 20px;
		}
	}
	@media (min-width: 351px) {
		#education {
			padding: 20px 5%;
		}
	}
	.education-unit {
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