import React from 'react'
import FlatButton from '../'

var Demo = () => (
	<div>
		<FlatButton style={ style }>DEFAULT</FlatButton>
		<FlatButton theme='light' style={ style }>LIGHT</FlatButton>
	</div>
)

const style = { margin: '8px' }

export default Demo