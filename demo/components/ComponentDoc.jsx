import React from 'react'
import 'whatwg-fetch'
import Doc from './Doc.jsx'


import RaisedButton from '../../components/RaisedButton'
import Demo from './Demo.jsx'
import Icon from '../../components/SvgIcon/code'
import buttonMd from '../../components/RaisedButton/index.md'
import md from '../../components/BackTop/demo/basic.md'
import splitBetween from '../utils/splitBetween'

import demos from '../demos'

class ComponentDoc extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			doc: '',
			demos: []
		}
	}

	getDemo ( d, i ) {
		var demo = React.createElement( d.demo ),
			doc = d.md,
			{ ...props } = doc ? {
				title: splitBetween(doc, '# title', '#').trim(),
				description: splitBetween(doc, '# description', '#').trim(),
				code: doc.split('# code')[1].trim(),
			} : {}

		return (
			<Demo key={ i } { ...props }>
				{ demo }
			</Demo>
		)
	}

	getDemos () {

		return this.state.demos.map( (demo, i) => this.getDemo(demo, i) )
	}

	componentDidUpdate(prevProps, prevState) {
		if( this.props.params.name !== prevProps.params.name ){
			this.componentDidMount()
		}
	}

	componentDidMount() {
		var name = this.props.params.name.split('-').map( name => {
			var chars = name.split('')
			chars[0] = chars[0].toUpperCase()
			return chars.join('')
		}).join('')

		var d = demos[ name ]

		this.setState({
			doc: d.md,
			demos: d.demos
		})
	}

	render () {
		var state = this.state
		return (
			<Doc document={ state.doc } demo={ this.getDemos() }/>
		)
	}
}

export default ComponentDoc