import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLoginData } from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'

class HomePage extends Component {
	render() {
		return (
			<>
				Home
			</>
		)
	}
}

function mapStateToProps({ users, questions }) {
	return {
	}
}

export default connect(mapStateToProps)(HomePage)