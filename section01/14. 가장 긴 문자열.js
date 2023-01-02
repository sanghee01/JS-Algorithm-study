function solution(arr){
  return arr.sort((a,b)=> a.length - b.length)[arr.length-1]
}

console.log(solution(["teacher","time","student","beautiful","good"]),"beautiful")

