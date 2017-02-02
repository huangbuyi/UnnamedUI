import React from 'react'
import './App.css'
import Header from './Header'
import Menu from './Menu'
import Aside from './Aside'

import RaisedButton from '../../components/RaisedButton'
import Demo from './Demo'
import Icon from '../../components/SvgIcon/code'
import buttonMd from '../../components/RaisedButton/index.md'
import Doc from './Doc'
import md from '../../components/BackTop/demo/basic.md'

var CodeDemo = () => (
	<Demo { ...props }>
		<RaisedButton style={ style }>DEFAULT</RaisedButton>
		<RaisedButton icon={ Icon } theme='light' style={ style233 }>LIGHT</RaisedButton>
	</Demo>
)

var { ...props } = {
	title: '按钮类型',
	description: '这里是关于组件的一段描述，介绍了组件的配置，以及该配置下组件的用途和设计思想',
	code: md
}

const style233 = { margin: 8 }

///
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			menuVisible: false
		}
		this.onClick = this.onClick.bind(this)
	}

	onClick ( v ) {
		this.setState({
			menuVisible: v
		})
	}

	render () {
		var state = this.state

		return (
			<div>
				<Header onClick={ this.onClick }/>
				<Menu visible={ state.menuVisible }/>
				<div style={ style.content }>
					<div style={ style.aside }>
						<Aside />
					</div>
					<div style={ style.doc }>
						<Doc demo={ CodeDemo } document={ buttonMd } />
					</div>
				</div>
			</div>
		)
	}
}

///
const style = {
	content: {
		padding: '32px 0 0 0'
	},
	aside: {
		position: 'absolute'
	},
	doc: {
		marginLeft: '237px'
	}
}

export default App