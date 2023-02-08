function solution(N, K) {
  let numberList = Array.from({ length: N }, (_, i) => i + 1);

  // K번째는 배열에서 K-1의 인덱스를 가짐
  let idx = K - 1;
  while (numberList.length > 1) {
    idx = idx % numberList.length;
    numberList.splice(idx, 1);
    idx += K - 1;
  }

  let result = numberList.at(0);
  return result;
}

const [N, K] = [8, 3];
const ANSWER = solution(N, K);
console.log(ANSWER);
