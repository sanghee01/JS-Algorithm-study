function solution(n,m){
  let sum = 0;
  function dfs(n, m){
    if(n == m) return sum += 1;
    else if(m == 1)return sum += n;
    else{
      dfs(n-1, m-1);
      dfs(n-1, m);
    }
  }

  dfs(n,m);
  return sum
}

// console.log(solution(5,3)) // 10
console.log(solution(33, 19)) // 818809200