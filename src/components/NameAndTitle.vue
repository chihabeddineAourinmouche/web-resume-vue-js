<template>
	<div id="name-and-title">
		<h2 id="name" :style="{ color: theme.secondaryColor }">{{ name }}</h2>
		<h3 id="title">{{ title }}</h3>
	</div>
</template>

<script setup>
	defineProps({
		name: { type: String },
		title: { type: String },
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