<template>
	<article>
		<a
			target="_blank"
			:href="`https://www.google.com/maps/place/${!['', undefined, null].includes(address.street) ? address.street + ' - ' : ''}${address.city} ${address.postal_code}, ${address.state}, ${address.country}`"
		>
			<i class="fa-solid fa-location-dot"></i>
			<span>
				{{ `${!['', undefined, null].includes(address.street) ? address.street + ' - ' : ''}${address.city} ${address.postal_code}, ${address.state}, ${address.country}` }}
			</span>
		</a>
		<a
			target="_blank"
			:href="`mailto:${emailAddress}`"
		>
			<i class="fa-regular fa-envelope"></i>
			<span>{{ emailAddress }}</span>
		</a>
	</article>
</template>

<script setup>
	// PROPS
	defineProps({
		address: { type: Object },
		emailAddress: { type: String },
	})
</script>

<style scoped>
	article {
		  background-color: #fff;
		  border-radius: 15px;
		  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
		  display: flex;
		  flex-direction: column;
		  gap: 15px;
		  padding: 10px;
		  max-width: 300px;
	}
	a {
		display: flex;
		gap: 10px;
		user-select: text;
		align-items: center;
		color: inherit;
	}
	i,
	span {
		cursor: pointer;
	}
	span {
		text-decoration: underline solid #ccc 1px;
	}
</style>