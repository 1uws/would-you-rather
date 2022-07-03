import { ADD_QUESTION, SUBMIT_ANSWER } from '../actions/questions'
import { RECEIVE_USERS } from '../actions/users'

export default function users(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users
			}
		case ADD_QUESTION:
			return {
				...state,
				[action.question.author]: {
					...state[action.question.author],
					questions: state[action.question.author].questions.concat(action.question.id),
				}
			};
		case SUBMIT_ANSWER:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					answers: {
						...state[action.authedUser].answers,
						[action.id]: action.answer
					}
				}
			}
		default:
			return state
	}
}