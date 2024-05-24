<template>
	<section>
		<slot />
	</section>
</template>

<script setup></script>

<style scoped>
	section {
		background-color: #fff;
		width: 100%;
		max-width: 700px;
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
		padding: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 30px;
	}
	@media screen and (max-width: 500px) {
		section {
			border-radius: 15px;
			flex-direction: column;
		}
	}
	@media screen and (min-width: 500px) {
		section {
			border-radius: 100px 15px 15px 100px;
			flex-direction: row;
		}
	}
</style>