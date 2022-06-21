import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLoginData } from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleLoginData())
	}
	render() {
		return (
			<Router>
				<Fragment>
					<LoadingBar />
				</Fragment>
			</Router>
		)
	}
}

function mapStateToProps({ authedUser }) {
	return {
		loading: authedUser === null
	}
}

export default connect(mapStateToProps)(App)