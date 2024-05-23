const getWindowInnerWidth = () => window.innerWidth

const setTitle = title => { document.title = title }

const setBodyStyle = style => Object.assign(document.body.style, style)

const watchHorizontalResize = (callback, minWidth = null) => {
	let previousWidth = getWindowInnerWidth()
	window.addEventListener('resize', () => {
		const currentWidth = getWindowInnerWidth()
		const widthDifference = currentWidth - previousWidth
		if (widthDifference !== 0 && minWidth !== null ? !(currentWidth < minWidth && previousWidth < minWidth) : true) {
			callback()
		}
		previousWidth = currentWidth
	})
}

export {
	getWindowInnerWidth,
	setTitle,
	setBodyStyle,
	watchHorizontalResize,
}
