import { remark } from 'remark'
import remarkHTML from 'remark-html'
export function markupToHtml(value) {
	return remark()
			.use(remarkHTML)
			.processSync(value)
			.toString()
}
export function formatDate(dateString) {
	const date = new Date(dateString)
	return date.toLocaleDateString("en-GB");
}
const alphabet = {
	'Ё': 'YO',
	'Й': 'I',
	'Ц': 'TS',
	'У': 'U',
	'К': 'K',
	'Е': 'E',
	'Н': 'N',
	'Г': 'G',
	'Ш': 'SH',
	'Щ': 'SCH',
	'З': 'Z',
	'Х': 'H',
	'Ъ': '',
	'ё': 'yo',
	'й': 'i',
	'ц': 'ts',
	'у': 'u',
	'к': 'k',
	'е': 'e',
	'н': 'n',
	'г': 'g',
	'ш': 'sh',
	'щ': 'sch',
	'з': 'z',
	'х': 'h',
	'ъ': '\'',
	'Ф': 'F',
	'Ы': 'I',
	'В': 'V',
	'А': 'a',
	'П': 'P',
	'Р': 'R',
	'О': 'O',
	'Л': 'L',
	'Д': 'D',
	'Ж': 'ZH',
	'Э': 'E',
	'ф': 'f',
	'ы': 'i',
	'в': 'v',
	'а': 'a',
	'п': 'p',
	'р': 'r',
	'о': 'o',
	'л': 'l',
	'д': 'd',
	'ж': 'zh',
	'э': 'e',
	'Я': 'Ya',
	'Ч': 'CH',
	'С': 'S',
	'М': 'M',
	'И': 'I',
	'Т': 'T',
	'Ь': '',
	'Б': 'B',
	'Ю': 'YU',
	'я': 'ya',
	'ч': 'ch',
	'с': 's',
	'м': 'm',
	'и': 'i',
	'т': 't',
	'ь': '',
	'б': 'b',
	'ю': 'yu',
	'і': 'i',
	'ї': 'yi',
	'є': 'ye'
}

export function transliterate(sentence='') {
	return sentence.replace(/ /g,'_').split('').map(function(char) {
		return alphabet[char] || char
	}).join('')
}
