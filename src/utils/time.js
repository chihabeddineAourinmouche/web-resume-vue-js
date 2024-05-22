const countDown = (targetTime, intervalCallback, timeoutCallback) => {
	let t = Math.abs(targetTime)
	const intervalId = setInterval(() => {
		t--
		intervalCallback(t)
		if (t <= 0) {
			clearInterval(intervalId)
			timeoutCallback()
		}
	}, 1000)
	return intervalId // NECESSARY SO IT'S POSSIBLE TO STOP INTERRUPT THE COUNTDOWN
}

export {
	countDown,
}