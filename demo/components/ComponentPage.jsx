import React from 'react'
import { Link } from 'react-router'

const comps = [
	{ cate: 'general', items: ['icon'] },
	{ cate: 'button', items: ['flat button','raised button', 'flat action button'] },
	{ cate: 'layout', items: ['card', 'grid'] }
]

class ComponentPage extends React.Component {

	getList () {
		return comps.map( c => (
			<div key={ c.cate }>
				<div style={ style.cate }>{ c.cate }</div>
				{
					c.items.map( item => (
						<Link key={ item } to={ 'components/' + item.replace(' ', '-') } 
							style={ style.item } 
							activeStyle={ Object.assign({}, style.item, style.active) }
						>
							<div>{ item }</div>	
						</Link>
					))
				}
			</div>
		))
	}

	render () {

		return (
			<div>

				<div style={ style.aside }>
					<div style={ style.title }>Components</div>
					{ this.getList() }
				</div>
				<div style={ style.doc }>
					{ this.props.children }
				</div>
			</div>
		)
	}
}

///
const style = {
	aside: {
		boxSizing: 'border-box',
		width: '236px',
		height: '600px',
		borderRight: '1px solid #f0f0f0',
		position: 'absolute'
	},
	title: {
		paddingLeft: '32px',
		color: 'rgba(0,0,0,0.54)',
		fontSize: '20px',
		lineHeight: '48px',
	},
	cate: {
		pointer: 'default',
		paddingLeft: '32px',
		color: 'rgba(0,0,0,0.54)',
		fontSize: '13px',
		lineHeight: '34px',
		marginTop: '6px',
		textTransform: 'capitalize'
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
	doc: {
		marginLeft: '237px'
	},
	active: {
		color: '#2196F3',
		background: 'rgba(33,152,242,0.08)',
		borderRight: '2px solid #2196F3'
	}
}

export default ComponentPage

					