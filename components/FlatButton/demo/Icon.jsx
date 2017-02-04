import React from 'react'
import FlatButton from '../'
import Icon from '../../SvgIcon/code'

var Demo = () => (
	<div>
		<FlatButton icon={ Icon } style={ style }>DEFAULT</FlatButton>
		<FlatButton icon={ Icon } theme='light' style={ style }>LIGHT</FlatButton>
	</div>
)

const style = { margin: '8px' }

export default Demo