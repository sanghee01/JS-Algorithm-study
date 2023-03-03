function solution(n, m){
  let cnt = 0;
  function dfs(size){
    if(size == m){
      cnt += 1;
      return;
    }

    for(let i = 0; i < n; i++){
      dfs(size + 1);
    }
  }
  dfs(0);
  return cnt;
}

console.log(solution(3, 2))

