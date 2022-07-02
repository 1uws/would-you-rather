import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLoginData } from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'

class HomePage extends Component {
	render() {
		const { users } = this.props;
		return (
			<>
				{
					Object.keys(users)
						.map(id => users[id])
						.sort((userA, userB) => (Object.keys(userA.answers).length + userA.questions.length < Object.keys(userB.answers).length + userB.questions.length) ? 1 : -1)
						// .sort((userA, userB) => userA.questions.length < userB.questions.length?1:-1)
						.map(user =>
							<div className='leaderboard'>
								<img src={user.avatarURL}
									alt={`Avatar of ${user.name}`}
									className='avatar' />
								<div>
									<p className='leaderboard_name'>{user.name}</p>
									<p>Created questions: {user.questions.length}</p>
									<p>Answered questions: {Object.keys(user.answers).length}</p>
								</div>
								<div>
									<p className='leaderboard_score'>Score: {Object.keys(user.answers).length + user.questions.length}</p>
								</div>
							</div>)
				}
			</>
		)
	}
}

function mapStateToProps({ users, questions }) {
	return {
		users
	}
}

export default connect(mapStateToProps)(HomePage)