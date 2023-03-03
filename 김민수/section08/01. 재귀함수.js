function solution(n){
  return n === 1 ? 1 : n + solution(n - 1 );
}
console.log(solution(3))

// 해석
// n이 1일 경우 1을 리턴하지 않는다면 무한루프에 빠짐.
// => solution(3) => 3 + solution(2)
// => solution(2) => 2 + solution(1)
// => solution(1) => 1
// => 3 + 2 + 1