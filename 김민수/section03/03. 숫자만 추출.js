function solution(str){
  return parseInt(str.replace(/[^0-9]/g, ''));
}

console.log(solution("g0en2T0s8eSoft"),"208");
