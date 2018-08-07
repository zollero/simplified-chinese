
// import { POLY_PHONE, FULL_DICT, CHAR_DICT } from './dict'

import { getEveryLetters, getPinyinOfWords } from './utils'

export interface convertToPinyinOptions {
	separator?: string
	capitalizeFirstLetter?: boolean
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

function getFirstLetters(word: string, options?: object): string {

	return ''
}


const Chinese = {
	convert2Pinyin,
	getFirstLetters
}

export default Chinese