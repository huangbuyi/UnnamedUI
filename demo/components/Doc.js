import React from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import marked from 'marked'
import 'github-markdown-css/github-markdown.css'

class CodeDemo extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {
		return (
			<div>123</div>
		)
	}
}

marked.setOptions({
	gfm: true,
	highlight: function (code) {
	   	return Prism.highlight(code, Prism.languages.jsx)
	}
})

class Doc extends React.Component {
	constructor(props) {
		super(props)
	}

	getDocs () {
		var { document, splitMark } = this.props,
			docArr = document.split(splitMark),
			docs = ['', '']

		docs[0] = docArr[0]
		if ( docArr.length > 2 ) {
			docs[1] = docArr.slice(1).join()
		} else {
			docs[1] = docArr[1] ? docArr[1] : ''
		}

		return docs
	}

	render () {
		var { demo } = this.props
		var docs = this.getDocs()
		
	
		return (
			<div style={ style.doc }>
				<div 
					className='markdown-body' 
					dangerouslySetInnerHTML={{__html: marked( docs[0] ) }}>
				</div>
				<div style={ style.demo }>
					{ React.createElement(demo) }
				</div>
				<div 
					className='markdown-body' 
					dangerouslySetInnerHTML={{__html: marked( docs[1] ) }}>
				</div>
			</div>
		)
	}
}

Doc.defaultProps = {
	splitMark: '{{mark}}'
}

Doc.proptypes = {
	demo: React.PropTypes.node,
	document: React.PropTypes.string.isRequired,
	splitMark: React.PropTypes.string
}

const style = {
	doc: {
		padding: '0 40px 120px 40px'
	},
	demo: { 
		margin: '16px 0 24px 0'  
	}
}

export default Doc