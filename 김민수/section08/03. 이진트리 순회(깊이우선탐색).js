function solution(n){
  const arr = [];
  function dfs(v){
    if(v > 7) return;
    else{
      arr.push(v);
      dfs(v * 2)
      dfs((v * 2) + 1)
    }
  }
  dfs(n)
  return arr
}

console.log(solution(1))