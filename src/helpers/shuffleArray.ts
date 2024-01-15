export function shuffleArray(array: any) {
	// Создаем копию исходного массива
	const shuffledArray = array.slice()

	// Перетасовка элементов массива
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
	}

	// Возвращаем перетасованный массив
	return shuffledArray
}
