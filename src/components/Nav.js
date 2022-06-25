import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav({ user }) {
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
					Hello, {user.name}

				</li>
				<li>
					<img src={user.avatarURL}
						alt={`Avatar of ${user.name}`}
						className='avatar_small' />
				</li>
				<li>
					<NavLink to='/'>
						Logout
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}