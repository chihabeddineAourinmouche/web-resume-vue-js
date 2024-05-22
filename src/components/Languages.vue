<template>
	<div id="languages">
		<div class="language" v-for="l in languages" :key="l.name">
			<span class="language-level" :style="{ color: color(l.level) }">{{ l.levelName }}</span>
			<span class="language-name">{{ l.name }}</span>
		</div>
	</div>
</template>

<script setup>
	// VUE
	import { computed } from 'vue'
	
	// PROPS
	defineProps({
		languages: { type: Array }
	})

	// METHODS
	const color = (l) => {
		const level = l.toLowerCase()
		return level === 'beginner' ? '#bd3a3a' : level === 'intermediate' ? '#cc9670' : level === 'proficient' ? '#b5cc70' : '#70adcc'
	}
</script>

<style scoped>
	#languages {
		  background-color: #fff;
		  border-radius: 15px;
		  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
		  display: flex;
		  flex-direction: column;
		  gap: 5px;
		  padding: 10px;
		  text-decoration: none;
	}
	.language {
		display: flex;
		justify-content: flex-end;
		gap: 5px;
	}
</style>