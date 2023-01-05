function solution(a, b, c){
  return (a+b+c - Math.max(a,b,c)) <= Math.max(a,b,c) ? "NO" : "YES"
}

console.log(solution(13, 33, 20));