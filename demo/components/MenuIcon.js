import React from 'react'
import './MenuIcon.css'

class MenuIcon extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			visible: true
		}
		this.onClick = this.onClick.bind(this)
		this.isInit = true
	}

	onClick () {
		var state = this.state
		this.setState({
			visible: !state.visible
		})
		this.props.onClick( state.visible )
	}

	componentDidMount() {
		this.isInit = false
	}

	render () {

		var className = this.isInit ? '' : ( this.state.visible ? ' show' : ' hidden')
		className = 'menu-icon' + className


		return (
			<div onClick={ this.onClick } className={ className }>
				<span className='top'></span>
				<span className='middle'></span>
				<span className='bottom'></span>
			</div>
		)
	}

	componentWillUnmount() {
		this.isInit = null
	}
}

MenuIcon.defaultProps = {
	onClick: function () {}
}

export default MenuIcon

