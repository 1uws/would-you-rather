import React, { Component, Fragment, useState } from 'react'
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLoginData } from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import { handleAddQuestion } from '../actions/questions'

function AddPage({ dispatch }) {
	const history = useNavigate();
	const [getOptionOne, setOptionOne] = useState('');
	const [getOptionTwo, setOptionTwo] = useState('');
	const handleChangeOptionOne = (e) => {
		e.preventDefault();
		setOptionOne(() => e.target.value);
	}
	const handleChangeOptionTwo = (e) => {
		e.preventDefault();
		setOptionTwo(() => e.target.value);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(handleAddQuestion(getOptionOne,getOptionTwo));
		history(`/`, { replace: true });
	}
	return (
		<>
			<p>Create New Question</p>
			<p>Complete the question:</p>
			<p>Would You Rather...</p>
			<form onSubmit={handleSubmit}>
				<input type="input" name='option' placeholder='Enter Option One Text Here' value={getOptionOne} onChange={handleChangeOptionOne} />
				<p>OR</p>
				<input type="input" name='option' placeholder='Enter Option Two Text Here' value={getOptionTwo} onChange={handleChangeOptionTwo} /><br />
				<input type="submit" value="Submit" />
			</form>
		</>
	)
}

function mapStateToProps({ users, questions }) {
	return {
		users
	}
}

export default connect(mapStateToProps)(AddPage)