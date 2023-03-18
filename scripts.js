const prevWord = prompt('First word')
const nextWord = prompt('Second word')

function isAnagram(prevWord, nextWord) {
  if (prevWord.length !== nextWord.length) {
    return false
  }
  const first = prevWord.split('').sort().join('')
  const second = nextWord.split('').sort().join('')
  return first === second
}

alert(isAnagram(prevWord, nextWord))
