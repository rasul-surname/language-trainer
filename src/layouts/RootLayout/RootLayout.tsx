import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'

function RootLayout() {
	return (
		<>
			<ScrollRestoration />
			<div style={{ ...styles.layout }}>
				<Outlet />
			</div>
		</>
	)
}

const styles = {
	layout: {},
}

export default RootLayout
