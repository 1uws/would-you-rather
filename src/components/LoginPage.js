import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLoginData } from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import { setAuthedUser } from '../actions/authedUser'

function LoginPage({ loginStateChanged, dispatch, users }) {
	const handleSelect = (e) => {
		e.preventDefault();
		dispatch(setAuthedUser(e.target.value));
		loginStateChanged();
	}
	return (
		<select onChange={handleSelect}>
			<option disabled selected value> -- select an user -- </option>
			{Object.keys(users).map((id) =>
				<option value={id} key={id}>
					{users[id].name}
				</option>
			)}
		</select>
	)
}

function mapStateToProps({ users }) {
	return {
		users
	}
}

export default connect(mapStateToProps)(LoginPage)