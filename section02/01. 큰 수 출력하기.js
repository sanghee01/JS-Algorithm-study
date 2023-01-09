function solution(a,arr){
  // 0이 아닌 1부터 a(arr.length)까지
  for(let i = 1; i < a; i++){
    // 1과 0 비교, 2와 1 비교, 3과 2 비교.... 후에 splice로 제거
    if(arr[i-1] >= arr[i]) arr.splice(i,1)
  }
  return arr
}

console.log(solution(6, [7 ,3 ,9 ,5 ,6 ,12]), [7,9,6,12]);