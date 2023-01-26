function solution(WORD1, WORD2) {
  const IS_ANAGRAM = {
    YES: 'YES',
    NO: 'NO',
  };
  let alphabetCountMap = new Map();

  for (const ALPHABET of WORD1) {
    alphabetCountMap.set(ALPHABET, alphabetCountMap.get(ALPHABET) + 1 || 1);
  }

  for (const ALPHABET of WORD2) {
    if (alphabetCountMap.get(ALPHABET) === undefined) {
      return IS_ANAGRAM.NO;
    }

    alphabetCountMap.set(ALPHABET, alphabetCountMap.get(ALPHABET) - 1);
  }

  let result = [...alphabetCountMap.values()].every((el) => el === 0);
  result = result ? IS_ANAGRAM.YES : IS_ANAGRAM.NO;
  return result;
}

const WORD1 = 'abaCC';
const WORD2 = 'Caaab';

const ANSWER = solution(WORD1, WORD2);
console.log(ANSWER);
