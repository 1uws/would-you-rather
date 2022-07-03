import { hideLoading, showLoading } from "react-redux-loading-bar"
import { saveQuestion, saveQuestionAnswer } from "../utils/api"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	}
}

function submitAnswer({ authedUser, qid, answer }) {
	return {
		type: SUBMIT_ANSWER,
		id: qid,
		authedUser,
		answer
	}
}

export function handleSubmitAnswer(info) {
	return (dispatch) => {
		dispatch(submitAnswer(info))

		return saveQuestionAnswer(info)
			.catch((e) => {
				console.warn('Error in handleToggleTweet: ', e)
				dispatch(submitAnswer(info))
				alert('The was an error liking the tweet. Try again.')
			})
	}
}

function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question,
	}
}

export function handleAddQuestion(optionOneText, optionTwoText) {
	return (dispatch, getState) => {
		const { authedUser } = getState()

		dispatch(showLoading())

		return saveQuestion({
			optionOneText,
			optionTwoText,
			author: authedUser,
		})
			.then((question) => dispatch(addQuestion(question)))
			.then(() => dispatch(hideLoading()))
	}
}