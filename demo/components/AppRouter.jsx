import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory, hashHistory } from 'react-router'
import App from './App.jsx'
import ComponentPage from './ComponentPage.jsx'
import ComponentDoc from './ComponentDoc.jsx'

const AppRouter = () => (
    <Router history={ hashHistory }>
		<Route path='/' component={ App }>
			<IndexRoute component={ ComponentPage } />
			<Route path='docs/'>
				<Route path=':name' component={ ComponentDoc }/>
			</Route>

			<Route path='components/' component={ ComponentPage }>
				<Route path=':name' component={ ComponentDoc }/>
			</Route>
		</Route>
	</Router>
)

export default AppRouter