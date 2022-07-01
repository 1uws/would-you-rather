import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLoginData } from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import Question from './Question'
import QuestionShort from './QuestionShort'

class HomePage extends Component {
	state = {
		showAnswered: false,
	}
	handleShowAnswered = (showAnswered) => {
		this.setState({ showAnswered });
	}
	render() {
		const { authedUser, users, questions } = this.props;
		return (
			<div>
				<div className='nav'>
					<ul className='home_nav'>
						<li onClick={() => this.handleShowAnswered(false)}>Unanswered Questions</li>
						<li onClick={() => this.handleShowAnswered(true)}>Answered Questions</li>
					</ul>
				</div>
				<ul>
					{Object.keys(questions)
						.map(id => questions[id])
						.filter((question) =>
							this.state.showAnswered === (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)))
						.map((question) =>
						(
							<li key={question.id}>
								<QuestionShort id={question.id} />
							</li>
						))}
				</ul>
			</div>
		)
	}
}

function mapStateToProps({ authedUser, users, questions }) {
	return {
		authedUser, users, questions
	}
}

export default connect(mapStateToProps)(HomePage)