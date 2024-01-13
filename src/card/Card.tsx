import React from 'react'

interface CardProps {
	name: string
}

const Card = ({ name }: CardProps) => {
	return (
		<div style={{ ...styles.wrapper }}>
			<p>{name}</p>
		</div>
	)
}

const styles = {
	wrapper: {
		width: '150px',
		height: '150px',
		padding: '10px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '8px',
		background: 'white',
	},
}

export default Card
