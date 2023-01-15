function solution(str){
  for(let i = 0; i < parseInt(str.length/2); i++){
    if(str[i].toUpperCase() != str[str.length-1-i].toUpperCase()) return "NO";
  }
  return "YES";
}

console.log(solution("gooaooG"),"YES");