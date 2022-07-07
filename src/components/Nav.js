import React from 'react'
import { connect } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser';

function Nav({ user, dispatch }) {
	const history = useNavigate();
	const handleClickLogout=()=>{
		dispatch(setAuthedUser(null));
		history(`/`, { replace: true });
	}
	if (!user)
	{
		return <></>
	}
	return (
		<nav className='nav'>
			<ul>
				<li>
					<NavLink to='/'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/add'>
						New Question
					</NavLink>
				</li>
				<li>
					<NavLink to='/leaderboard'>
						Leader Board
					</NavLink>
				</li>
				<li>
					<div className='nav_username'>
						<p>Hello, {user.name}</p>
						<img src={user.avatarURL}
							alt={`Avatar of ${user.name}`}
							className='avatar_small' />
					</div>
				</li>
				<li onClick={handleClickLogout}>
					Logout
				</li>
			</ul>
		</nav>
	)
}

function mapStateToProps({ users, authedUser }) {
	return {
		user: authedUser ? users[authedUser] : null,
	}
}

export default connect(mapStateToProps)(Nav)