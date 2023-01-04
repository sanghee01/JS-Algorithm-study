function solution(a,arr){ 
  let cnt = 0;
  arr.forEach(e => { if(e.toString()[e.toString().length-1] == a.toString()) cnt+=1  })
  return cnt;
}


console.log(solution(3,[25, 23, 11, 47, 53, 17, 33]),3)
// console.log(solution(0,[12, 20, 54, 30, 87, 91, 30]),3)