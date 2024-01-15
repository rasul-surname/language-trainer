import * as React from 'react'
import { useEffect, useState } from 'react'
import { Reorder } from 'framer-motion'
import { Item } from './Item'

interface SymbolProps {
	symbol: string
	ordering: number
}

interface AnagramSimulatorProps {
	word: string
	invalidSymbols: SymbolProps[]
	validSymbols: SymbolProps[]
}

export default function AnagramSimulator({ word, invalidSymbols, validSymbols }: AnagramSimulatorProps) {
	const [invalidSymbolsState, setInvalidSymbolsState] = useState<SymbolProps[]>(invalidSymbols)
	const [copyInvalidSymbolsState, setCopyInvalidSymbolsState] = useState<SymbolProps[]>(invalidSymbols)

	function checkWordFunc(symbols: SymbolProps[]) {
		return !symbols.some(({ symbol, ordering }, idx) => {
			// если ordering или symbol не соответствуют правильному то возвращаем true
			if (ordering !== validSymbols[idx]?.ordering || symbol !== validSymbols[idx]?.symbol) {
				return true // Вернуть true, чтобы прекратить перебор при выполнении условия
			}

			return false
		})
	}

	function onReorder(newSymbols: SymbolProps[]) {
		// записываем новые символы
		setInvalidSymbolsState(newSymbols)

		// записываем новые символы но меняем ordering чтобы сверить с валидным
		setCopyInvalidSymbolsState(newSymbols.map(({ symbol }, idx) => ({ symbol: symbol, ordering: idx })))
	}

	useEffect(() => {
		const result: boolean = checkWordFunc(copyInvalidSymbolsState)
		console.log({ invalidSymbolsState, validSymbols })

		console.log({ result })
		if (result) {
			console.log('ПОБЕДА')
		}
	}, [invalidSymbolsState])

	return (
		<div>
			<Reorder.Group
				axis="x"
				onReorder={(newSymbols) => onReorder(newSymbols)}
				values={invalidSymbolsState}
				style={{
					display: 'flex',
					listStyleType: 'none',
					gap: '10px',
				}}
			>
				{invalidSymbolsState.map((item: SymbolProps, idx: number) => {
					const trueSymbol = item.symbol === validSymbols[idx].symbol

					return (
						<Item
							key={item.ordering}
							item={item}
						>
							<div
								style={{
									...styles.card,
									borderColor: trueSymbol ? 'inherit' : '#6B5FF0',
									background: trueSymbol ? '#33D976' : 'inherit',
									color: trueSymbol ? 'white' : '#6B5FF0',
								}}
							>
								{item.symbol}
							</div>
						</Item>
					)
				})}
			</Reorder.Group>
			<p
				style={{
					color: '#33D976',
					fontSize: '48px',
					textAlign: 'center',
				}}
			>
				{word}
			</p>
		</div>
	)
}

const styles = {
	card: {
		fontWeight: 500,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '84px',
		height: '76px',
		fontSize: '48px',
		cursor: 'grab',
		background: 'white',
		borderRadius: '7px',
		border: '1px solid',
		hover: {
			borderRadius: '27px',
		},
	},
}
