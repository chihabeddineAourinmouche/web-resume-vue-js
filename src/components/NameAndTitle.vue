<template>
	<div id="name-and-title">
		<h2 id="name" :style="{ color: theme.secondaryColor }">{{ data.name }}</h2>
		<h3 id="title">{{ data.title }}</h3>
	</div>
</template>

<script setup>
	defineProps({
		data: { type: Object },
		theme: { type: Object },
	})
</script>

<style scoped>
	#name-and-title {
		padding-top: 20px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		flex-grow: 1;
		text-align: left;
	}
	#name {
		font-size: 1.7rem;
	}
</style>