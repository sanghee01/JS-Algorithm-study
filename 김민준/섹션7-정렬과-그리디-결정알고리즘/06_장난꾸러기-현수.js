function solution(N, HEIGHT_LIST) {
  let result = [];
  const SORTED_HEIGHT_LIST = [...HEIGHT_LIST].sort((a, b) => a - b);

  HEIGHT_LIST.forEach((el, idx) => {
    if (el !== SORTED_HEIGHT_LIST[idx]) {
      result.push(idx + 1);
    }
  });

  return result;
}

const N = 6;
const HEIGHT_LIST = [120, 130, 150, 150, 130, 150];
const ANSWER = solution(N, HEIGHT_LIST);
console.log(ANSWER);
