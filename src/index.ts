
// import { POLY_PHONE, FULL_DICT, CHAR_DICT } from './dict'

import { getEveryLetters, getPinyinOfWords, extractFirstLetters } from './utils'

export interface convertToPinyinOptions {
	separator?: string
	capitalizeFirstLetter?: boolean
}

export interface getFirstLettersOptions {
	separator?: string
	uppercase?: boolean
}


function convert2Pinyin (
	words: string, 
	options: convertToPinyinOptions = {
		separator: '',
		capitalizeFirstLetter: true
	}
): string {
	const { separator, capitalizeFirstLetter } = options

	return getPinyinOfWords(
		getEveryLetters(words), 
		separator,
		capitalizeFirstLetter
	)
}

function getFirstLetters(
	words: string, 
	options: getFirstLettersOptions = {
		separator: '',
		uppercase: true
	}
): string {
	const { separator, uppercase } = options

	return extractFirstLetters(
		getEveryLetters(words),
		separator,
		uppercase
	)
}


const Chinese = {
	convert2Pinyin,
	getFirstLetters
}

export default Chinese