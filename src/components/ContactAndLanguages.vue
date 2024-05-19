<template>
	<div id="contact-languages">
		<slot />
	</div>
</template>

<script setup />

<style scoped>
	#contact-languages {
		max-width: 700px;
		width: 100%;
		display: flex;
		gap: 20px;
		justify-content: space-around;
	}
	
	@media (max-width: 490px) {
		#contact-languages {
			flex-direction: column;
			align-items: flex-end;
		}
	}
	
	@media (min-width: 491px) {
		#contact-languages {
			flex-direction: row;
			align-items: flex-start;
		}
	}
</style>