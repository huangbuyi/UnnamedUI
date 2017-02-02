import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory, hashHistory } from 'react-router'

const AppRouter = () => (
    <Router history={ hashHistory }>
		<Route path='/' component={ }>
			<IndexRoute component={} />
			<Route path='get-started' component={}/>
			<Route path='need-to-know' component={}/>
			<Route path='components' component={}>
				
			</Route>
		</Route>
	</Router>
)
