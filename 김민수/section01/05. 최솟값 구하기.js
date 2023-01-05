function solution(arr){ 
  // ... 안쓰면 안되는 이유 -> 배열이 아니라 고유한 변수를 기대하기 때문
  return Math.min(...arr);
}

console.log(solution([5 ,3 ,7 ,11 ,2 ,15 ,17]));


