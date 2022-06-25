import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'

class Question extends Component {
	render() {
		if (!this.props.question) {
			<Navigate to='/404' replace />
			return <p>This question doesn't exist</p>
		}

		const { author, question } = this.props;

		return (
			<div className='question'>
				<div>
					<p>{author.name} ask:</p>
				</div>
				<div className='question_info'>
					<img src={author.avatar}
						alt={`Avatar of ${author.name}`}
						className='avatar' />
					<div>
						<p>Would you rather</p>
						<p className='question_short'>{question.optionOne.text.substring(0,20)}...</p>
						<p>View Poll</p>
						{/* <Link to={`/question/${question.id}`} ></Link> */}
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps({ users, questions }, { id }) {
	const question = questions[id];
	const author = users[question.author];
	return {
		question,
		author: {
			name: author.name,
			avatar: author.avatarURL,
		}
	}
}

export default connect(mapStateToProps)(Question)