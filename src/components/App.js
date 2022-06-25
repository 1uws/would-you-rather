import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLoginData } from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import Nav from './Nav'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import LeaderboardPage from './LeaderboardPage'

class App extends Component {
	state = {
		isLogined: false,
	}
	componentDidMount() {
		this.props.dispatch(handleLoginData())
	}
	loginStateChanged = (e) => {
		e.preventDefault();
		this.state.isLogined = true;
		this.forceUpdate();
	}
	render() {
		const { isLogined } = this.state;
		return (
			<Router>
				<Fragment>
					<LoadingBar />
					<div className='container'>
						{this.props.loading ? null :
							(isLogined
								? <>
									<Nav />
									<Routes>
										<Route path='/' element={<HomePage />} />
										<Route path='/questions/:question_id' element={<HomePage />} />
										<Route path='/add' element={<HomePage />} />
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

function mapStateToProps({ loadingBar }) {
	return {
		loading: loadingBar.default
	}
}

export default connect(mapStateToProps)(App)