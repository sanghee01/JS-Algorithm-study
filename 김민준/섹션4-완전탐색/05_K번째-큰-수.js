function solution(N, K, CARD_NUMBER_LIST) {
  let sumList = [];

  let [num1, num2, num3] = [0, 0, 0];
  let sum = 0;
  for(let i=0; i<N-2; i+=1) {
    num1 = CARD_NUMBER_LIST[i];
    for(let j=i+1; j<N-1; j+=1) {
      num2 = CARD_NUMBER_LIST[j];
      for(let k=j+1; k<N; k+=1) {
        num3 = CARD_NUMBER_LIST[k];
        sum = num1 + num2 + num3;

        sumList.push(sum);
      }
    }
  }

  sumList.sort((a, b) => b - a);
  let sumListSet = new Set(sumList);
  
  let result = [...sumListSet].at(K - 1);
  return result;
}

const [N, K] = [10, 3];
const CARD_NUMBER_LIST = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
const ANSWER = solution(N, K, CARD_NUMBER_LIST);
console.log(ANSWER);