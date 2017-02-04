import React from 'react'
import './MenuIcon.css'

class MenuIcon extends React.Component {
	constructor(props) {
		super(props)
		this.onClick = this.onClick.bind(this)
		this.isInit = true
	}

	shouldComponentUpdate(nextProps, nextState) {
		if( nextProps.visible === this.props.visible ) {
			return false
		}

		return true
	}

	onClick () {
		this.props.onClick()
	}

	componentDidMount() {
		this.isInit = false
	}

	render () {

		var className = this.isInit ? '' : ( this.props.visible ? ' hidden' : ' show')
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

export default MenuIcon

