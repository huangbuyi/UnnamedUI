import React from 'react'
import RaisedButton from '../'

var Demo = () => (
	<div>
		<RaisedButton style={ style }>DEFAULT</RaisedButton>
		<RaisedButton theme='light' style={ style }>LIGHT</RaisedButton>
	</div>
)

const style = { margin: '8px' }

export default Demo