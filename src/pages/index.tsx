import React from 'react'
import Card from '../card/Card'

const cards = [
	{ name: 'Мой словарь', link: '/dictionary' },
	{ name: 'Анаграма', link: '/anagram' },
]

const Home = () => {
	return (
		<div style={{ ...styles.wrapper }}>
			{cards.map(({ name, link }, idx) => (
				<a
					key={idx}
					href={link}
					style={{
						textDecoration: 'none',
					}}
				>
					<Card name={name} />
				</a>
			))}
		</div>
	)
}

const styles = {
	wrapper: {
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '20px',
	},
}

export default Home
