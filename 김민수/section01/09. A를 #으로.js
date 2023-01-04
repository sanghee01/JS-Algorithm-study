function solution(str){
  return str.replace(/A/g,'#');
}

console.log(solution('BANANA'),'B#N#N#')
console.log(solution('AAAAAA'),'B#N#N#')