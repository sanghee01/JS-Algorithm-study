function solution(arr){
  let setArr = new Set(arr);
  return [...setArr]
}

console.log(solution(["good", "time", "good", "time", "student"]), ["good", "time", "student"])



