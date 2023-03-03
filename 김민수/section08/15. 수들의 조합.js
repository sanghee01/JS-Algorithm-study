function solution(n, arr, m){
  let cnt = 0;
  let tmp = Array.from({length : n}, () => 0);
  function dfs(a, b){
    if(n == a){
      let sum = 0;
      [...tmp].forEach(e => {
        sum += arr[e-1];
      })
      if(sum % m == 0) cnt += 1; 
    } 
    else{
      for(let i = b; i <= arr.length; i++){
        tmp[a] = i;
        dfs(a+1, i+1);
      }
    }
  }
  dfs(0, 1)
  return cnt
}

console.log(solution(3,[2 ,4 ,5 ,8 ,12], 6))