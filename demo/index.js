import React from 'react'
import { render } from 'react-dom'
import AppRouter from './Components/AppRouter.jsx'

render(
	<AppRouter />,
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

