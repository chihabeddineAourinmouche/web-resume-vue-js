<template>
	<div v-if="isOpen" id="overlay" @click="close" @touchend="close">
		<div id="modal" @click.stop @touchend.stop>
			<i
				id="close" class="fa-solid fa-xmark"
				:style="{ color: theme.secondaryColor }"
				@click="close"
				@touchend="close"
			/>
			<div id="modal-content">
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, defineExpose } from 'vue'

	const isOpen = ref(false)
	
	defineProps({
		theme: { type: Object },
	})

	const lockBackgroundScroll = () => document.body.style.overflowY = 'hidden'
	const unlockBackgroundScroll = () => document.body.style.overflowY = 'auto'

	const switchOpenClose = () => {
		isOpen.value = !isOpen.value
	}

	const open = () => {
		lockBackgroundScroll()
		switchOpenClose()
	}

	const close = () => {
		unlockBackgroundScroll()
		switchOpenClose()
	}

	defineExpose({ open })
</script>

<style scoped>
	#overlay {
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		min-width: 350px;
		height: 100vh;
		min-height: 350px;
		background-color: rgba(0, 0, 0, .9);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#modal {
		background-color: #fff;
		width: 350px;
		height: 350px;
		padding: 30px 0;
		text-align: justify;
		border-radius: 15px;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#close {
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
	}
	#modal-content {
		width: 100%;
		max-height: 290px;
		overflow-y: auto;
		padding: 0 10px;
	}
</style>