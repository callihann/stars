/**
 * Generates a string of stars and spaces.
 *
 * @param {number} lines - The number of lines in the generated string.
 * @param {number} [frequency=10] - The frequency of stars in the generated string.
 * @param {number} [length=process.stdout.rows] - The length of each line in the generated string.
 * @returns {string} The generated string of stars and spaces.
 */
const generate = (lines, frequency = 10, length = process.stdout.rows) => {
	let stars = [`\u02DA`, `\u2726`, `\u2605`, `\u22C6`, `\u066D`, `.`, `\uFE61`];
	let space = `\u3000`;
	let out = ``;
	for (let n = 0; n < lines; n++) {
		for (let i = 0; i < length; i++) {
			if (Math.floor(Math.random() * frequency) == 1) {
				out += stars[Math.floor(Math.random() * stars.length)];
			} else {
				out += space;
			}
		}
	}

	return out;
}

module.exports = { generate };