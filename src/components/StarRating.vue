<template>
	<span class="star-rating" :style="{ color: color }">
		<i v-for="(star, index) in stars" :key="`star-${index}`" :class="star" />
	</span>
</template>

<script setup>
	import { computed } from 'vue'
	
	const props = defineProps({
		data: { type: Object }
	})
	
	const color = computed(() => {
		const rating = parseFloat(props.data.rating)
		return rating <= 1 ? '#bd3a3a' : rating <= 2 ? '#cc9670' : rating <= 3 ? '#b5cc70' : rating <= 4 ? '#78cc70' : '#70adcc'
	})

	const stars = computed(() => {
		const rating = props.data.rating
		const fullStars = Math.floor(rating)
		const halfStar = rating % 1 === 0.5
		const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)
		let stars = []
		for (let i = 0; i < fullStars; i++) stars.push('fa-solid fa-star')
		if (halfStar) stars.push('fa-solid fa-star-half-stroke')
		for (let i = 0; i < emptyStars; i++) stars.push('fa-regular fa-star')
		return stars
	})
</script>

<style scoped>
	.star-rating {
		font-weight: bold;
		text-align: right;
		display: flex;
		align-items: center;
	}
	@media (max-width: 490px) {
		.star-rating {
			font-size: .6rem;
		}
	}
	@media (min-width: 491px) {
		.star-rating {
			font-size: .8em;
		}
	}
</style>