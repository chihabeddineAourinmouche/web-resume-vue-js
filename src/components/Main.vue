<template>
	<div id="main" :style="{ backgroundColor: theme.primaryColor }">
		<slot />
	</div>
</template>

<script setup>
	defineProps({
		theme: { type: Object },
	})
</script>

<style scoped>
	#main {
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>