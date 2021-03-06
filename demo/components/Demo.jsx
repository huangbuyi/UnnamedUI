import React from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/themes/prism.css'
import marked from 'marked'
import 'github-markdown-css/github-markdown.css'
import './Demo.css'
import CodeIcon from '../../components/SvgIcon/code'

marked.setOptions({
  	gfm: true,
	highlight: function (code) {
	   	return Prism.highlight(code, Prism.languages.jsx)
	}
})


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
							color={ !visible ? "rgba(33,150,243,1)" : "#424242" }  
							hoverColor={ !visible ? "rgba(33,150,243,0.64)" : "#969696" }
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
Demo.defaultProps = {
	code: '',
	title: '',
	description: ''
}

Demo.proptypes = {
	title: React.PropTypes.string,
	description: React.PropTypes.string,
	code: React.PropTypes.string
}

const container = {
	border: '1px solid #e3e3e3',
	borderRadius: '4px',
	marginBottom: '20px'
}

const header = {
	color: 'rgba(0,0,0,0.74)',
	height: '56px',
	lineHeight: '56px',
	fontSize: '18px',
	padding: '0 16px',
	borderBottom: '1px solid #e3e3e3'
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
	borderTop: '1px dashed #e3e3e3'
}

export default Demo