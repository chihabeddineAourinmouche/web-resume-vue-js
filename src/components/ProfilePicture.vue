<template>
	<img
		id="profile-picture"
		:style="{ borderColor: theme.secondaryColor }"
		:src="data.profilePicture"
		alt="profile picture"
		@click="$emit('onClick')"
	/><!-- TODO - REMOVE @click event -->
</template>

<script setup>
	defineEmits([ 'onClick' ])// TODO - REMOVE onClick emit
	defineProps({
		data: { type: Object },
		theme: { type: Object },
	})
</script>

<style scoped>
	#profile-picture {
		height: 150px;
		width: 150px;
		border-radius: 50%;
		border-width: 10px;
		border-style: solid;
	}
</style>