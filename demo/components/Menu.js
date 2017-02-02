import React from 'react'
import setShadow from '../utils/setShadow'

class Menu extends React.Component {

	render () {
		var props = this.props
		var menuStyle = Object.assign({}, style.menu, props.visible ? style.show : style.hidden )

		return (
			<div style={ menuStyle }>

			</div>
		)
	}
}

///
const style = {
	menu: {
		position: 'fixed',
		top: '0',
		bottom: '0',
		width: '236px',
		background: '#fff',
		boxShadow: setShadow(16),
		transition: 'left 275ms cubic-bezier(0.4, 0.0, 0.6, 1)',
		zIndex: 16,
		boxSizing: 'border-box',
	},
	hidden: {
		left: '-266px'
	},
	show: {
		left: '0'
	}
}

Menu.defaultProps = {
	visible: false
}

Menu.proptypes = {
	visible: React.PropTypes.bool
}

export default Menu