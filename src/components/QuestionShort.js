import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function QuestionShort({ author, question }) {
	const history = useNavigate();
	const handleView = (e) => {
		e.preventDefault();
		history(`/questions/${question.id}`, { replace: true });
	}
	if (!question) {
		return <p>404! This question doesn't exist</p>
	}

	return (
		<div className='question'>
			<div>
				<p>{author.name} ask:</p>
			</div>
			<div className='question_content'>
				<img src={author.avatar}
					alt={`Avatar of ${author.name}`}
					className='avatar' />
				<div>
					<p>Would you rather</p>
					<p className='question_short'>{question.optionOne.text.substring(0, 20)}...</p>
					<button onClick={handleView}>View Poll</button>
				</div>
			</div>
		</div>
	)
}

function mapStateToProps({ users, questions }, { id }) {
	const question = questions[id];
	const author = question ? { name: users[question.author].name, avatar: users[question.author].avatarURL } : null;
	return {
		question,
		author,
	}
}

export default connect(mapStateToProps)(QuestionShort)