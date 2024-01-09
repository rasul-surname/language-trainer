import './style.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages'
import RootLayout from './layouts/RootLayout/RootLayout'
import Dictionary from './pages/dictionary/dictionary'
import Anagram from './pages/anagram/anagram'

const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: '/dictionary',
				children: [{ index: true, element: <Dictionary /> }],
			},
			{
				path: '/anagram',
				children: [{ index: true, element: <Anagram /> }],
			},
		],
	},
])

createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
