import React from 'react'
import MenuIcon from './MenuIcon'
import setShadow from '../utils/setShadow'

class Header extends React.Component {

	render () {
		return (
			<div style={ style.header }>
				<div style={ style.logo }>LOGO</div>
				<div style={ style.menu }>
					<MenuIcon onClick={ this.props.onClick }/>
				</div>
				<div style={ style.link }>Link</div>
			</div>
		)
	}
}
///
const style = {
	header: {
		position: 'relative',
		width: '100%',
		height: '86px',
		background: '#2196F3',
		boxShadow: setShadow(4),
		zIndex: 4
	},
	logo: {
		width: '236px',
		height: '86px',
		lineHeight: '86px',
		textAlign: 'center',
		fontSize: '24px',
		color: '#FFF'
	},
	menu: {
		position: 'absolute',
		left: '266px',
		top: '25px',
		width: '36px',
		height: '36px',
	},
	link: {
		position: 'absolute',
		right: '46px',
		top: '31px',
		width: '24px',
		height: '24px'
	}
}

export default Header