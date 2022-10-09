/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
	return s
		.split(' ')
		.sort((a, b) => a[a.length - 1] - b[b.length - 1])
		.map((w) => w.slice(0, -1))
		.join(' ')
}

console.log(sortSentence('is2 sentence4 This1 a3'))
