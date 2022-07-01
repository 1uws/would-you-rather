import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLoginData } from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import Question from './Question'

function HomePage() {
	const { question_id } = useParams();
	return (
		<>
			<Question id={question_id}/>
		</>
	)
}

function mapStateToProps({ users, questions }) {
	return {
	}
}

export default connect(mapStateToProps)(HomePage)