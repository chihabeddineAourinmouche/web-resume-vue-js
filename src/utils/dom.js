const getWindowInnerWidth = () => window.innerWidth

const setTitle = title => { document.title = title }

const setBodyStyle = style => Object.assign(document.body.style, style)

const watchHorizontalResize = (callback, minWidth = null, minWidthDifference = 1) => {
	let previousWidth = getWindowInnerWidth()
	window.addEventListener('resize', () => {
		const currentWidth = getWindowInnerWidth()
		const widthDifference = Math.abs(currentWidth - previousWidth)
		// ONLY callback WHEN WIDTH DIFFERENCE IS minWidthDifference
		if (widthDifference > minWidthDifference && (minWidth !== null ? !(currentWidth < minWidth && previousWidth < minWidth) : true)) {
			previousWidth = currentWidth
			callback()
		}
	})
}

export {
	getWindowInnerWidth,
	setTitle,
	setBodyStyle,
	watchHorizontalResize,
}
