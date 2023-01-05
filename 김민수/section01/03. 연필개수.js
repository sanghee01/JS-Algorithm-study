function solution(n){
  return n % 12 > 0 ? parseInt(n / 12) + 1 : parseInt(n / 12);
}

console.log(solution(13));
