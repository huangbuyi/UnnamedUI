import React from 'react'
import RaisedButton from '../'
import Icon from '../../SvgIcon/code'

var Demo = () => (
	<div>
		<RaisedButton icon={ Icon } style={ style }>DEFAULT</RaisedButton>
		<RaisedButton icon={ Icon } theme='light' style={ style }>LIGHT</RaisedButton>
	</div>
)

const style = { margin: '8px' }

export default Demo