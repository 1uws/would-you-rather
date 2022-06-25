import { getUsers, getQuestions } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function handleInitData() {
	return (dispatch) => {
		dispatch(showLoading())
		return Promise.all([getUsers(), getQuestions()])
			.then(([users, questions]) => {
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
				dispatch(hideLoading())
			})
	}
}