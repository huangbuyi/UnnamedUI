import React from 'react'
import setShadow from '../utils/setShadow'
import { Link } from 'react-router'

const items = [
	{target: 'docs/get-started', name: 'get started'},
 	{target: 'docs/write-before', name: '写在前面'},
 	{target: 'docs/design-thiking', name: '设计思想'},
 	{target: 'components/', name: '组件库'}
 ]

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this)
	}

	onClick () {
		this.props.onClick()
	}

	getList () {
		return items.map( item => (
			<Link onClick={ this.onClick } style={ style.item } 
				activeStyle={ Object.assign({}, style.item, style.active) }
				key={ item.target } 
				to={item.target}
			>
				{ item.name }
			</Link>
		))
	}

	render () {
		var props = this.props
		var menuStyle = Object.assign({}, style.menu, props.visible ? style.show : style.hidden )

		return (
			<div style={ menuStyle }>
				<Link to='/' 
					onClick={ props.onClick } 
					style={ style.logo }
				>
					LOGO<
				/Link>
				<div style={ style.list }>
					{ this.getList() }
				</div>
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
	},
	logo: {
		display: 'block',
		lineHeight: '86px',
		textAlign: 'center',
		fontSize: '24px',
		color: '#FFF',
		background: '#41b6F3'
	},
	list: {
		marginTop: '18px',
	},
	item: {
		paddingLeft: '32px',
		boxSizing: 'border-box',
		display: 'block',
		color: 'rgba(0,0,0,0.87)',
		fontSize: '14px',
		lineHeight: '42px',
		textIndent: '1em',
		textTransform: 'capitalize',
	},
	active: {
		color: '#2196F3',
		background: 'rgba(33,152,242,0.08)',
		borderRight: '2px solid #41b6F3'
	}
}

Menu.defaultProps = {
	visible: false
}

Menu.proptypes = {
	visible: React.PropTypes.bool
}

export default Menu