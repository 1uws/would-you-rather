import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Navigate, unstable_HistoryRouter, useNavigate } from 'react-router-dom'
import { handleSubmitAnswer } from '../actions/questions';

function Question({ authedUser, author, qid, question, dispatch }) {
	const state = {
		option: null,
	};
	const answeredOne = question.optionOne.votes.includes(authedUser);
	const answeredTwo = question.optionTwo.votes.includes(authedUser);
	const answered = answeredOne || answeredTwo;
	const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
	const votesOnePercentage = Math.round(question.optionOne.votes.length * 100 / totalVotes);
	const votesTwoPercentage = Math.round(question.optionTwo.votes.length * 100 / totalVotes);

	const handleChange = (e) => {
		state.option = e.target.value;
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		if (null === state.option) {
			return
		}
		dispatch(handleSubmitAnswer({
			authedUser,
			qid,
			answer: state.option,
		}));
	}
	if (!question) {
		return <p>404! This question doesn't exist</p>
	}

	return (
		<div className='question'>
			{answered ?
				<>
					<div>
						<p>Asked by {author.name}</p>
					</div>
					<div className='question_content'>
						<img src={author.avatar}
							alt={`Avatar of ${author.name}`}
							className='avatar' />
						<div>
							<p>Results:</p>
							<form>
								<div style={{ borderWidth: '1px 1px 1px 6px', borderColor: answeredOne ? 'orange' : 'white', borderStyle: 'solid' }}>
									<p className='question_full' >{question.optionOne.text}</p>
									<p className='question_percent'>{question.optionOne.votes.length} out of {totalVotes} votes ({votesOnePercentage}%)</p>
								</div>
								<div style={{ borderWidth: '1px 1px 1px 6px', borderColor: answeredTwo ? 'orange' : 'transparent', borderStyle: 'solid' }}>
									<p className='question_full'>{question.optionTwo.text}</p>
									<p className='question_percent'>{question.optionTwo.votes.length} out of {totalVotes} votes ({votesTwoPercentage}%)</p>
								</div>
							</form>
						</div>
					</div>
				</>
				:
				<>
					<div>
						<p>{author.name} ask:</p>
					</div>
					<div className='question_content'>
						<img src={author.avatar}
							alt={`Avatar of ${author.name}`}
							className='avatar' />
						<div>
							<p>Would You Rather...</p>
							<form onSubmit={handleSubmit}>
								<input type="radio" name='option' value="optionOne" onChange={handleChange} />
								<p className='question_full'>{question.optionOne.text}</p><br />
								<input type="radio" name='option' value="optionTwo" onChange={handleChange} />
								<p className='question_full'>{question.optionTwo.text}</p><br />
								<input type="submit" value="Submit" />
							</form>
						</div>
					</div>
				</>
			}
		</div >
	)
}

function mapStateToProps({ users, questions, authedUser }, { id }) {
	const question = questions[id];
	const author = question ? { name: users[question.author].name, avatar: users[question.author].avatarURL } : null;
	return {
		qid: id,
		question,
		author,
		authedUser,
	}
}

export default connect(mapStateToProps)(Question)