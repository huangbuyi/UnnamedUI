import React from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/themes/prism.css'
import marked from 'marked'
import 'github-markdown-css/github-markdown.css'
import './Demo.css'
import CodeIcon from '../components/SvgIcon/code'

marked.setOptions({
  	gfm: true,
	highlight: function (code) {
	   	return Prism.highlight(code, Prism.languages.jsx)
	}
});

function splitBetween(target, pre, post){
	if( target.indexOf(pre) === -1 || target.indexOf(post) === -1 || target.indexOf(post) < target.indexOf(pre) ){
		return ''
	} 
	return target.split(pre)[1].split(post)[0]
}

class Demo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			codeVisible: false
		}
		this.toggleVisible = this.toggleVisible.bind(this)
	}

	toggleVisible () {
		this.setState({
			codeVisible: !this.state.codeVisible
		})
	}

	render () {
		var { title, description, code, children } = this.props
		var visible = this.state.codeVisible
		//var code = splitBetween(code, '```', '```').trim()
		var codeHtml = { 
			__html: marked( code )
		}

		return (
			<div style={ container }>
				<div style={ header }>
					{ title }
				</div>
				<div style={ textBlock }>
					{ description }
				</div>
				<div style={ componentBlock }>
					{ children }
				</div>
				<div style={ codeToggle }>
					<span 
						title='查看源代码' 
						onClick={ this.toggleVisible } 
						style={ codeTip }
					>
						<CodeIcon 
							style={ codeIcon } 
							color={ visible ? "rgba(33,150,243,0.62)" : "#9e9e9e" }  
							hoverColor={ visible ? "rgba(33,150,243,1)" : "#424242" }
						/>
					</span>
				</div>
				{ this.state.codeVisible ?
					<div dangerouslySetInnerHTML={ codeHtml } style={ codeBlock } className='markdown-body demo-code'></div>
					: null
				}
			</div>
		)
	}
}

///
React.defaultProps = {
	code: ''
}

React.proptypes = {
	title: React.PropTypes.string,
	description: React.PropTypes.string,
	code: React.PropTypes.string
}

const container = {
	border: '1px solid #c9c9c9',
	borderRadius: '4px',
	width: '500px'
}

const header = {
	color: 'rgba(0,0,0,0.74)',
	height: '62px',
	lineHeight: '62px',
	fontSize: '18px',
	padding: '0 16px',
	borderBottom: '1px solid #c9c9c9'
}

const textBlock = {
	color: 'rgba(0,0,0,0.87)',
	lineHeight: '22px',
	fontSize: '13px',
	padding: '16px'
}

const componentBlock = {
	padding: '0 16px'
}

const codeToggle = {
	overflow: 'hidden',
	padding: '12px 16px'
}

const codeIcon = {
	width:'20px', 
	height:'20px'
}

const codeTip = {
	cursor: 'pointer',
	float: 'right'
}

const codeBlock = {
	borderTop: '1px dashed #c9c9c9'
}

export default Demo