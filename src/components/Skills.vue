<template>
	<div id="skills">
		<div class="skill" v-for="s in skillsSortedBylevelDesc" :key="s.name">
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
	import { computed } from 'vue'

	// PROPS
	const props = defineProps({
		skills: { type: Array }
	})

	// COMPUTED
	const skillsSortedBylevelDesc = computed(() => props.skills.sort((a, b) => b.level - a.level))
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
</style>