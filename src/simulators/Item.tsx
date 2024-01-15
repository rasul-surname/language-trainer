import * as React from 'react'
import { ReactNode } from 'react'
import { Reorder, useMotionValue } from 'framer-motion'
import { useRaisedShadow } from './use-raised-shadow'

interface Props {
	item: any
	children: ReactNode
}

export const Item = ({ item, children }: Props) => {
	const x = useMotionValue(0)
	const boxShadow = useRaisedShadow(x)

	return (
		<Reorder.Item
			value={item}
			id={item}
			drag
			style={{ boxShadow, x, position: 'relative' }}
		>
			{children}
		</Reorder.Item>
	)
}
