/**
 * T와 부분문자열인 subString을 받아서 T의 아나그램이 되는지 판단해서 boolean 값으로 반환하는 함수
 * 
 * @param {string} T 
 * @param {string} subString 
 * @returns {boolean} substring이 T의 아나그램이 된다면 true 반환, 아니면 false 반환
 */
function isAnagram(T, subString) {
  let alphabetCountMap = new Map();

  for (const ALPHABET of T) {
    alphabetCountMap.set(ALPHABET, alphabetCountMap.get(ALPHABET) + 1 || 1);
  }

  for (const ALPHABET of subString) {
    if (alphabetCountMap.get(ALPHABET) === undefined) {
      return false;
    }

    alphabetCountMap.set(ALPHABET, alphabetCountMap.get(ALPHABET) - 1);
  }

  let result = [...alphabetCountMap.values()].every((el) => el === 0);
  return result;
}

function solution(S, T) {
  let cnt = 0;
  let [start, end] = [0, T.length - 1];

  let subString = '';
  while(true) {
    if(end === S.length) break;

    subString = S.slice(start, end + 1);
    
    if(isAnagram(T, subString) === true) {
      cnt += 1;
    }

    start += 1;
    end += 1;
  }

  return cnt;
}

const S = 'bacaAacba';
const T = 'abc';
const ANSWER = solution(S, T);
console.log(ANSWER);