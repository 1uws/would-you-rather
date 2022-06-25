import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav({ userName }) {
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
					Hello, {userName}
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