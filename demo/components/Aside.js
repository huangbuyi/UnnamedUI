import React from 'react'

class Aside extends React.Component {

	render () {

		return (
			<div style={ style.aside }>
				<div style={ style.title }>Components</div>
				<div style={ style.cate }>Components</div>
				<div style={ style.item }>Flat Button</div>
				<div style={ style.item }>Float Action Button</div>
				<div style={ style.item }>Raised Button</div>
			</div>
		)
	}
}

const style = {
	aside: {
		boxSizing: 'border-box',
		width: '236px',
		height: '600px',
		padding: '0 32px',
		borderRight: '1px solid #f0f0f0'
	},
	title: {
		color: 'rgba(0,0,0,0.54)',
		fontSize: '20px',
		lineHeight: '48px'
	},
	cate: {
		color: 'rgba(0,0,0,0.54)',
		fontSize: '13px',
		lineHeight: '34px',
		marginTop: '6px'
	},
	item: {
		color: 'rgba(0,0,0,0.87)',
		fontSize: '14px',
		lineHeight: '42px',
		textIndent: '1em'
	}
}

export default Aside