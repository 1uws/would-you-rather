import React from 'react'
import { useParams } from 'react-router-dom'
import Question from './Question'

export default function QuestionPage() {
	const { question_id } = useParams();
	return (
		<Question id={question_id} />
	)
}