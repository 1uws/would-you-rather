import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitData } from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import Nav from './Nav'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import LeaderboardPage from './LeaderboardPage'
import QuestionPage from './QuestionPage'
import AddPage from './AddPage'

class App extends Component {
	state = {
		isLogined: false,
	}
	componentDidMount() {
		this.props.dispatch(handleInitData())
	}
	loginStateChanged = () => {
		this.state.isLogined = true;
	}
	render() {
		const { isLogined } = this.state;
		return (
			<Router>
				<Fragment>
					<LoadingBar />
					<div className='container'>
						{this.props.loading ? null :
							(this.props.user !== null
								? <>
									<Nav user={this.props.user} />
									<Routes>
										<Route path='/' element={<HomePage />} />
										<Route path='/questions/:question_id' element={<QuestionPage />} />
										<Route path='/add' element={<AddPage />} />
										<Route path='/leaderboard' element={<LeaderboardPage />} />
										<Route path='*' element={<Navigate to='/' replace />} />
									</Routes>
								</>
								: <LoginPage loginStateChanged={this.loginStateChanged} />)
						}
					</div>
				</Fragment>
			</Router>
		)
	}
}

function mapStateToProps({ loadingBar, authedUser, users }) {
	return {
		loading: loadingBar.default,
		user: authedUser ? users[authedUser] : null,
	}
}

export default connect(mapStateToProps)(App)