<template>
	<p id="about">{{ data.about }}</p>
</template>

<script setup>
	defineProps({
		data: { type: Object }
	})
</script>

<style scoped>
	#about {
		background-color: #fff;
		max-width: 700px;
		width: 100%;
		border-radius: 15px;
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
		text-align: center;
	}
	@media screen and (max-width: 350px) {
		#about {
			padding: 20px;
		}
	}
	@media screen and (min-width: 351px) {
		#about {
			padding: 20px 10%;
		}
	}
</style>