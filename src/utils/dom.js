const getWindowInnerWidth = () => window.innerWidth

const setTitle = title => { document.title = title }

const setBodyStyle = style => Object.assign(document.body.style, style)

export {
	getWindowInnerWidth,
	setTitle,
	setBodyStyle,
}
