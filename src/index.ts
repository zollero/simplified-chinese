
import { getEveryLetters, getPinyinOfWords, extractFirstLetters } from './utils'

export interface convertToPinyinOptions {
	separator?: string
	capitalizeFirstLetter?: boolean
	escapeText?: string
}

export interface getFirstLettersOptions {
	separator?: string
	uppercase?: boolean
}

/**
 * Return a string of the chinese words's pinyin
 * @param words chinese words string
 * @param options custorm optins
 */
function convert2Pinyin (
	words: string, 
	options: convertToPinyinOptions = {
		separator: '',
		capitalizeFirstLetter: true
	}
): string {
	const { separator, capitalizeFirstLetter, escapeText } = options

	return getPinyinOfWords(
		getEveryLetters(words, escapeText), 
		separator,
		capitalizeFirstLetter
	)
}

/**
 * Return a string of the first letter in chinese words's pinyin
 * @param words chinese words string
 * @param options custorm options
 */
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