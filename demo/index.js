import React from 'react'
import { render } from 'react-dom'
import App from './Components/App'

const style = { margin: 8 }

render(
	<App />,
	document.querySelector('#content')
)