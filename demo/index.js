import React from 'react'
import { render } from 'react-dom'
import RaisedButton from '../components/RaisedButton'
import Demo from './Demo'
import md from '../components/BackTop/demo/basic.md'

var { ...props } = {
	title: '按钮类型',
	description: '这里是关于组件的一段描述，介绍了组件的配置，以及该配置下组件的用途和设计思想',
	code: md
}

render(
	<Demo { ...props }>
		<RaisedButton>DEFAULT</RaisedButton>
	</Demo>,
	document.querySelector('#content')
)