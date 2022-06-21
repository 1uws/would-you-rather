import { getLoginData, getAppData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function handleLoginData() {
	return (dispatch) => {
		dispatch(showLoading())
		return getLoginData()
			.then((users) => {
				dispatch(receiveUsers(users))
				dispatch(hideLoading())
			})
	}
}

export function handleUserData() {
	return (dispatch) => {
		dispatch(showLoading())
		return getAppData()
			.then((questions) => {
				dispatch(receiveQuestions(questions))
				dispatch(hideLoading())
			})
	}
}