function solution(str){
  let setArr = new Set(str.split(''));
  return [...setArr].join('')
}

console.log(solution("ksekkset"),"kset")



