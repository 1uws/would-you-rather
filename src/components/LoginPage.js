import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLoginData } from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'

class LoginPage extends Component {
	render() {
		return (
			<>
				<button onClick={(e)=>this.props.loginStateChanged(e)}>Login</button>
			</>
		)
	}
}

function mapStateToProps({ users }) {
	return {
	}
}

export default connect(mapStateToProps)(LoginPage)