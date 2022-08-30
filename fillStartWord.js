const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  //code here
  if (word===null || word===undefined) return undefined
  else if (startWord.includes(word)) return word
  else return startWord+word
}
module.exports = fillStartWord
