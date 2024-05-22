const generateSizesPositions = (numParticles, containerWidth, containerHeight, minSize, maxSize) => {
	const particles = []
	for (let i = 0; i < numParticles; i++) {
		let validPlacement = false
		let size
		let top
		let left
		while (!validPlacement) {
			// GENERATE RANDOM SIZE AND POSITION WITHIN CONTAINER BOUNDS
			size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize
			top = Math.floor(Math.random() * (containerHeight - size + 1))
			left = Math.floor(Math.random() * (containerWidth - size + 1))
			// CHECK FOR COLLISION WITH OTHER PARTICLES OR CONTAINER EDGES
			validPlacement = true
			for (const particle of particles) {
				const distanceX = Math.abs(left - particle.left)
				const distanceY = Math.abs(top - particle.top)
				const combinedRadius = size / 2 + particle.size / 2
				// COLLISION IF DISTANCE BETWEEN CENTERS IS LESS THAN COMBINED RADIUS
				if (distanceX < combinedRadius && distanceY < combinedRadius) {
					validPlacement = false
					break
				}
			}
			// CHECK FOR PLACEMENT WITHIN CONTAINER BOUNDS
			if (top < 0 || left < 0 || top + size > containerHeight || left + size > containerWidth) {
				validPlacement = false
			}
		}
		particles.push({
			size,
			position: { top, left }
		})
	}
	return particles
}

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export {
	generateSizesPositions,
	randomInt,
}