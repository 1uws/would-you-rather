import React from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

function LoginPage({ dispatch, users }) {
	const handleSelect = (e) => {
		e.preventDefault();
		dispatch(setAuthedUser(e.target.value));
	}
	return (
		<select onChange={handleSelect} defaultValue='DEFAULT'>
			<option  value='DEFAULT' disabled> -- select an user -- </option>
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