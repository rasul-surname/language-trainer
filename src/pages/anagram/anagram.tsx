import React from 'react'
import AnagramSimulator from '../../simulators/AnagramSimulator'
import { shuffleArray } from '../../helpers/shuffleArray'

const data = [{ word: 'Привет', translate: 'Hello' }]

const dataAnagram = data?.map((item) => {
	return {
		word: item?.word,
		translateSymbols: item?.translate?.split('')?.map((symbolItem, idx) => {
			return { symbol: symbolItem, ordering: idx }
		}),
	}
})
console.log({ dataAnagram })

const Anagram = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			{dataAnagram.map(({ word, translateSymbols }) => (
				<AnagramSimulator
					key={word}
					word={word}
					invalidSymbols={shuffleArray(translateSymbols)}
					validSymbols={translateSymbols}
				/>
			))}
		</div>
	)
}

export default Anagram
