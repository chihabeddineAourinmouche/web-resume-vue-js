<template>
	<div id="resume-header">
		<slot />
	</div>
</template>

<script setup></script>

<style scoped>
	#resume-header {
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
	@media screen and (max-width: 460px) {
		#resume-header {
			border-radius: 15px;
			flex-direction: column;
		}
	}
	@media screen and (min-width: 461px) {
		#resume-header {
			border-radius: 100px 15px 15px 100px;
			flex-direction: row;
		}
	}
</style>