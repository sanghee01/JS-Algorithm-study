function solution(str){
  return Number.isInteger(str.length / 2) ? str[((str.length)/2)-1]+str[(str.length)/2] : str[parseInt((str.length)/2)]
}

console.log(solution("study"),"u")
// console.log(solution("good"),"oo")


