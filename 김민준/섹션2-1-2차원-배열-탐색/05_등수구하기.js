function solution(N, arr) {
  let answer = [];
  // 점수들을 내림차순으로 정렬
  // 그냥 sort 하면 원본 배열인 arr의 값도 같이 바뀐다.
  // 따라서 깊은 복사를 위해 spread operator를 이용했다.
  // 주의할 점은 지금같이 1차원 배열인 경우에만 깊은 복사가 허용된다.
  // 만약 2차원 배열일 경우에는, 전개했을때 안의 값도 배열이므로 값이 아닌 참조가 된다.
  // 따라서 원본도 같이 바뀌게 되므로 1차원 일때만 가능!
  let sortedArr = [...arr].sort((a, b) => b - a);

  let cur = 0;
  for(let i=0; i<N; i+=1) {
    cur = arr[i];

    answer.push(sortedArr.indexOf(cur) + 1);
  }

  return answer;
}

const N = 5;
const arr = [87, 89, 92, 100, 76];
const result = solution(N, arr);
console.log(result);