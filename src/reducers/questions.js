import { RECEIVE_QUESTIONS, SUBMIT_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions
			}
		case SUBMIT_ANSWER:
			return {
				...state,
				[action.id]: Object.assign({}, state[action.id], action.answer === 'optionOne' ?
					{
						optionOne: {
							...state[action.id].optionOne,
							votes: state[action.id].optionOne.votes.concat([action.authedUser]),
						}
					} :
					{
						optionTwo: {
							...state[action.id].optionTwo,
							votes: state[action.id].optionTwo.votes.concat([action.authedUser]),
						}
					}
				),
			}
		default:
			return state
	}
}