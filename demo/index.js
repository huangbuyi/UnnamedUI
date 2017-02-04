import React from 'react'
import { render } from 'react-dom'
import AppRouter from './Components/AppRouter.jsx'
import { Link } from 'react-router'

import Trigger from './components/Trigger.jsx'

class Test extends React.Component {
	render () {
		var { ...props } = this.props
		return (
			<div { ...props }>321</div>
		)
	}
}

render(
	<Trigger>
		<Test style={{
			color: 'red'
		}} />
	</Trigger>,
	document.querySelector('#content')
)


/*import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import marked from 'marked'
import 'github-markdown-css/github-markdown.css'

import md from './Resume.md'

marked.setOptions({
	gfm: true,
	highlight: function (code) {
	   	return Prism.highlight(code, Prism.languages.jsx)
	}
})

const Resume = () => (
	<div style={ style } className='markdown-body' dangerouslySetInnerHTML={ {
		__html: marked(md)
	} }></div>
)

const style={
	padding: '36px 36px'
}

render(
	<Resume />,
	document.querySelector('#content')
)
*/

