function solution(n, arr){
  let total = 0;
  function DFS(size, sum){    
    if(size == arr.length){
      // 탈 수 있는 최댓값보다 작고, 기존 저장했던 total 값보다 클 경우
      if (total < sum && sum < n) total = sum
    }else{
      DFS(size+1, sum+arr[size]);
      DFS(size+1, sum);
    }
  }
  DFS(0, 0);
  return total
}

console.log(solution(259, [81, 58, 42, 33, 61]))