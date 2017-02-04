import React from 'react'
import RaisedButtonMd from '../components/RaisedButton/index.md'
import RaisedButtonBasic from '../components/RaisedButton/demo/Basic.jsx'
import RaisedButtonIcon from '../components/RaisedButton/demo/Icon.jsx'
import raisedButtonBasicMd from '../components/RaisedButton/demo/basic.md'
import raisedButtonIconMd from '../components/RaisedButton/demo/icon.md'

import FlatButtonMd from '../components/FlatButton/index.md'
import FlatButtonBasic from '../components/FlatButton/demo/Basic.jsx'
import FlatButtonIcon from '../components/FlatButton/demo/Icon.jsx'
import FlatButtonBasicMd from '../components/FlatButton/demo/basic.md'
import FlatdButtonIconMd from '../components/FlatButton/demo/icon.md'

var demos = {
	FlatButton: {
		md: FlatButtonMd,
		demos: [{
			md: FlatButtonBasicMd,
			demo: FlatButtonBasic
		}]
	},
	RaisedButton: {
		md: RaisedButtonMd,
		demos: [{
			md: raisedButtonBasicMd,
			demo: RaisedButtonBasic
		},{
			md: raisedButtonIconMd,
			demo: RaisedButtonIcon
		}]
	}
}

export default demos