<template>
	<article>
		<ul>
			<li v-for="l in languages" :key="l.name">
				<span :style="{ color: color(l.level) }">{{ l.levelName }}</span>
				<span>{{ l.name }}</span>
			</li>
		</ul>
	</article>
</template>

<script setup>
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
	ul {
		  background-color: #fff;
		  border-radius: 15px;
		  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
		  display: flex;
		  flex-direction: column;
		  gap: 5px;
		  padding: 10px;
		  text-decoration: none;
	}
	li {
		display: flex;
		justify-content: flex-end;
		gap: 5px;
	}
</style>