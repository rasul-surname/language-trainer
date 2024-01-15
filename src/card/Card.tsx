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
		color: '#6B5FF0',
		fontWeight: 600,
		fontSize: '24px',

		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '150px',
		height: '150px',
		padding: '10px',
		borderRadius: '8px',
		border: '3px solid',
		borderColor: '#6B5FF0',
	},
}

export default Card
