function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER; // 안정적인 가장 큰 값
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function solution2(arr) {
  let answer = Math.min(...arr); // ...는 배열을 인자 각각으로 펼쳐줌
  /* 
  전개연산자 안쓰려면 
  Math.min.apply(null, arr); 
  첫번째 인자: 객체(this), 두번째 인자: 배열 
  하지만 전개연산자 쓰는걸 추천 
  */
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution2(arr));
