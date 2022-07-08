import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
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
		if ('' === getOptionOne || '' === getOptionTwo) {
			alert('Enter options before submitting!');
			return;
		}
		dispatch(handleAddQuestion(getOptionOne, getOptionTwo));
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

function mapStateToProps({ users }) {
	return {
		users
	}
}

export default connect(mapStateToProps)(AddPage)