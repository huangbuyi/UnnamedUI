import React from 'react'

class Item extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hover: false,
			active: false
		}
		this.onMouseEnter = this.onMouseEnter.bind(this)
		this.onMouseLeave = this.onMouseLeave.bind(this)
		this.onMouseDown = this.onMouseDown.bind(this)
		this.onMouseUp = this.onMouseUp.bind(this)
	}

	onMouseEnter () {
		this.setState({
			hover: true
		})
	}

	onMouseLeave () {
		this.setState({
			hover: false,
			active: false
		})
	}

	onMouseDown () {
		this.setState({
			active: true
		})
	}

	onMouseUp () {
		this.setState({
			active: false
		})
	}



	getState () {
		var state = this.state
		if( state.active ) {
			return 2
		}
		if( state.hover ) {
			return 1
		}
		return 0
	}

	render () {
		var { children, hoverStyle, activeStyle, ...props } = this.props,
			state = this.state
		
		

		var getStyle = () => Object.assign( {}, children.props.style, 
			[{}, hoverStyle, activeStyle][ this.getState() ]
		)

		console.log(getStyle())

		return React.cloneElement(children, {
			style: getStyle(),
			onMouseEnter: this.onMouseEnter,
			onMouseLeave: this.onMouseLeave,
			onMouseDown: this.onMouseDown,
			onMouseUp: this.onMouseUp
		})
	}
}

Item.defaultProps = {
	hoverStyle: {background: 'red'},
	activeStyle: {background: 'blue'},
}

Item.proptypes = {
	hoverStyle: React.PropTypes.object,
	activeStyle: React.PropTypes.object,
}

export default Item
