import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionShort from './QuestionShort'

class HomePage extends Component {
	state = {
		showAnswered: false,
	}
	handleShowAnswered = (showAnswered) => {
		this.setState({ showAnswered });
	}
	render() {
		const { authedUser, questions } = this.props;
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
						.sort((questionA, questionB) => (questionA.timestamp < questionB.timestamp) ? 1 : -1)
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

function mapStateToProps({ authedUser, questions }) {
	return {
		authedUser, questions
	}
}

export default connect(mapStateToProps)(HomePage)