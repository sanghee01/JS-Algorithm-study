function solution(n, arr1, arr2){
  let [scoreTotal, timeTotal] = [0, 0];

  // sum1 => 점수, sum2 => 푸는 시간
  function dfs(size, sum1, sum2){
    if(size == arr1.length){
      if(scoreTotal < sum1 && sum2 <= n){
        scoreTotal = sum1;
        timeTotal = sum2;
      }
    }else{
      dfs(size + 1, sum1+arr1[size], sum2+arr2[size])
      dfs(size + 1, sum1, sum2)
    }

  }
  dfs(0,0,0)
  return scoreTotal;
}

// arr1 => 점수 , arr2 => 푸는 시간
console.log(solution(
  20,
  [10 ,25 ,15 ,6 ,7],
  [5 ,12 ,8 ,3 ,4]
))