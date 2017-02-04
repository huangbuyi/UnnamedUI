import React from 'react'
import MenuIcon from './MenuIcon.jsx'
import setShadow from '../utils/setShadow'
import { Link } from 'react-router'

class Header extends React.Component {

	render () {
		var props = this.props

		return (
			<div style={ style.header }>
				<Link to='/' style={ style.logo }>LOGO</Link>
				<div style={ style.menu }>
					<MenuIcon onClick={ props.onClick } visible={ props.visible }/>
				</div>
				<div style={ style.link }>Link</div>
			</div>
		)
	}
}
///
const style = {
	header: {
		position: 'fixed',
		left: 0,
		top: 0,
		right: 0,
		height: '86px',
		background: '#2196F3',
		boxShadow: setShadow(4),
		zIndex: 4
	},
	logo: {
		display: 'block',
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