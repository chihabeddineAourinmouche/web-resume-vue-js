<template>
	<section>
		<section-title  :title="sectionTitle" />
		<slot />
	</section>
</template>

<script setup>
	// COMPONENTS
	import SectionTitle from '@/components/SectionTitle.vue';
	
	// VUE
	import { computed } from 'vue';
	
	// COMPUTED
	const sectionTitle = computed(() => 'Contact & Languages')
</script>

<style scoped>
	section {
		max-width: 700px;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: space-around;
	}
	
	@media (max-width: 490px) {
		section {
			flex-direction: column;
			align-items: flex-end;
		}
	}
	
	@media (min-width: 490px) {
		section {
			flex-direction: row;
			align-items: flex-start;
		}
	}
</style>