<template>
	<div id="contact">
		<div class="contact-address">
			<i class="fa-solid fa-location-dot" />
			<a
				target="_blank"
				:href="`https://www.google.com/maps/place/${!['', undefined, null].includes(data.address.street) ? data.address.street + ' - ' : ''}${data.address.city} ${data.address.postal_code}, ${data.address.state}, ${data.address.country}`"
			>{{ `${!['', undefined, null].includes(data.address.street) ? data.address.street + ' - ' : ''}${data.address.city} ${data.address.postal_code}, ${data.address.state}, ${data.address.country}` }}</a>
		</div>
		<div class="contact-email">
			<i class="fa-regular fa-envelope" />
			<a
				target="_blank"
				:href="`mailto:${data.emailAddress}`"
			>{{ data.emailAddress }}</a>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		data: { type: Object }
	})
</script>

<style scoped>
	#contact {
		  background-color: #fff;
		  border-radius: 15px;
		  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
		  display: flex;
		  flex-direction: column;
		  gap: 15px;
		  padding: 10px;
		  max-width: 300px;
	}
	.contact-address {
		display: flex;
		gap: 10px;
		user-select: text;
	}
	.contact-email {
		display: flex;
		gap: 10px;
		user-select: text;
	}
	i {
		display: flex;
		align-items: center;
	}
	a {
		color: inherit;
		user-select: inherit;
		cursor: pointer;
	}
</style>