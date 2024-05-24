<template>
	<ul :style="{ color: color }">
		<li v-for="(star, index) in stars" :key="`star-${index}`">
			<i :class="star.cls" :style="{ opacity: star.empty ? .3 : 1 }" />
		</li>
	</ul>
</template>

<script setup>
	// VUE
	import { computed } from 'vue'
	
	// PROPS
	const props = defineProps({
		rating: { type: String }
	})
	
	// COMPUTED
	const color = computed(() => {
		const rating = parseFloat(props.rating)
		return rating <= 1 ? '#bd3a3a' : rating <= 2 ? '#cc9670' : rating <= 3 ? '#b5cc70' : rating <= 4 ? '#78cc70' : '#70adcc'
	})

	const stars = computed(() => {
		const rating = props.rating
		const fullStars = Math.floor(rating)
		const halfStar = rating % 1 === 0.5
		const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)
		let stars = []
		for (let i = 0; i < fullStars; i++) stars.push({ cls: 'fa-solid fa-star', empty: false })
		if (halfStar) stars.push({ cls: 'fa-solid fa-star-half-stroke', empty: false })
		for (let i = 0; i < emptyStars; i++) stars.push({ cls: 'fa-regular fa-star', empty: true })
		return stars
	})
</script>

<style scoped>
	ul {
		font-weight: bold;
		text-align: right;
		display: flex;
		align-items: center;
		font-size: .8em;
	}
</style>