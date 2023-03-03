function solution(arr, money){
  // 높은 동전의 종류 순서를 변경
  arr = arr.sort((a,b) => b - a);
  let cnt = 0;
  function dfs(index, change){
    // change == 0 일 경우
    if(!change) return
    // 나눌 수 없을 경우
    if(arr[index] <= change){
      let val = parseInt(change / arr[index]);
      cnt += val;
      change = change - val * arr[index];
    }
    dfs(index + 1, change);
  }
  dfs(0, money)
  return cnt;
}

console.log(solution([1,2,5], 15)) // 3
