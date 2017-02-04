import React from 'react'
import './App.css'
import Header from './Header.jsx'
import Menu from './Menu.jsx'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			menuVisible: false
		}
		this.onIconClick = this.onIconClick.bind(this)
		this.onMenuClick = this.onMenuClick.bind(this)
	}

	onIconClick ( v ) {
		this.setState({
			menuVisible: !this.state.menuVisible
		})
	}

	onMenuClick () {
		this.setState({
			menuVisible: false
		})
	}

	render () {
		var state = this.state,
			props = this.props

		return (
			<div>
				<Header onClick={ this.onIconClick } visible={ state.menuVisible }/>
				<Menu onClick={ this.onMenuClick} visible={ state.menuVisible }/>
				<div style={ style.content }>
					{ props.children }
				</div>
			</div>
		)
	}
}

const style = {
	content: {
		padding: '118px 0 0 0'
	},
}

export default App