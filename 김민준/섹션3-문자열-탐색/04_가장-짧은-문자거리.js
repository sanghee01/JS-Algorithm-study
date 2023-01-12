/**
 * 문자열 S에서 현재 인덱스인 idx에서 앞을 찾아보면서 T까지의 거리를 반환하는 함수
 * 
 * @param {string} S 
 * @param {string} T 
 * @param {number} idx 
 * @returns {number}
 */
function searchFront(S, T, idx) {
  let minDistance = S.length;

  let cur = '';
  let distanceFromCur = 0;
  for (let i = idx; i > 0; i -= 1) {
    cur = S[i];
    distanceFromCur = Math.abs(i - idx);

    if (cur === T) {
      minDistance = distanceFromCur;
      break;
    }
  }

  return minDistance;
}

/**
 * 문자열 S에서 현재 인덱스인 idx에서 뒤를 찾아보면서 T까지의 거리를 반환하는 함수
 * 
 * @param {string} S 
 * @param {string} T 
 * @param {number} idx 
 * @returns {number}
 */
function searchBack(S, T, idx) {
  let minDistance = S.length;

  let cur = '';
  let distanceFromCur = 0;
  for (let i = idx; i < S.length; i += 1) {
    cur = S[i];
    distanceFromCur = Math.abs(i - idx);

    if (cur === T) {
      minDistance = distanceFromCur;
      break;
    }
  }

  return minDistance;
}

function solution(S, T) {
  let result = [];

  let minDistance = 0;
  S.split('').forEach((_, idx) => {
    minDistance = Math.min(searchFront(S, T, idx), searchBack(S, T, idx));
    result.push(minDistance);
  });

  result = result.join(' ');
  return result;
}

const S = 'teachermode';
const T = 'e';
const result = solution(S, T);
console.log(result);
