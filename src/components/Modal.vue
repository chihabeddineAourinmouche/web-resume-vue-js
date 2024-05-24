<template>
	<section v-if="isOpen" id="overlay" @click="close" @touchend="close">
		<article @click.stop @touchend.stop>
			<header>
				<button @click="close" @touchend="close">
					<span
						id="close" class="fa-solid fa-xmark"
						:style="{ color: theme.secondaryColor }"
					/>
				</button>
			</header>
			<slot />
		</article>
	</section>
</template>

<script setup>
	/*
	* IN ORDER TO USE THIS COMPONENT, FOLLOW THE FOLLOWING STEPS:
	* - WITHIN THE PARENT, CREATE AN INSTANCE IN THE TEMPLATE WITH A REFERENCE (ex: modalRef)
	* - THEN WITHIN THE SCRIPT, CREATE A ref NAMED THE SAME AS THE REFERENCE USED IN THE TEMPLATE
	* - TO OPEN THE MODAL FROM THE PARENT, USE THE SYNTAX: modalRef.value ?? modalRef.value.open()
	* - TO CLOSE THE MODAL FROM THE PARENT, USE THE SYNTAX: modalRef.value ?? modalRef.value.close()
	* IT IS IMPORTANT THAT THE REF USED IN THE TEMPLATE CAN BE USED AS NAME FOR A VARIABLE*
	*/
	
	// VUE
	import { ref, computed } from 'vue'
	
	// STORE
	import { useThemeStore } from "../store/theme"
	import { setBodyStyle } from '@/utils/dom'
	
	// STORE OBJECTS
	const themeStore = useThemeStore()
	
	// REF
	const isOpen = ref(false)

	// EMITS
	const emit = defineEmits([ 'onSelfClose' ])
	
	// COMPUTED
	const theme = computed(themeStore.getTheme)

	// METHODS
	const lockBackgroundScroll = () => setBodyStyle({ overflowY: 'hidden' })
	const unlockBackgroundScroll = () => setBodyStyle({ overflowY: 'auto' })
	const switchOpenClose = () => { isOpen.value = !isOpen.value }
	const open = () => {
		lockBackgroundScroll()
		switchOpenClose()
	}
	const close = () => {
		emit('onSelfClose')
		unlockBackgroundScroll()
		switchOpenClose()
	}

	// EXPOSE
	defineExpose({ open, close })

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
	article {
		background-color: #fff;
		width: 350px;
		height: 350px;/* WHEN MOBILE DEVICE IS IN LANDSCAPE MODE, THE MODAL SHOULD REMAIN FULLY VISIBLE */
		padding: 0 0 30px 0;
		border-radius: 15px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		overflow: hidden;
	}
	header {
		width: 100%;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
	}
	button {
		all: unset;
		border: none;
		background: none;
	}
	#close {
		cursor: pointer;
	}
</style>