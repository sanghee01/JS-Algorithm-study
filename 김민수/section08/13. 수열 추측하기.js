function solution(n, m){
  let rArr = [];
  let arr = Array.from({length: n - 1}, (v,i) => i + 1);
  let chk = Array.from({length:arr.length}, ()=>0);
  let tmp = [];
  function dfs(k){ 
    if(k === arr.length && rArr.length == 0){
      let sum = 0;
      // ex) a, b, c, d => a + 3b + 3c + d
      [...tmp].forEach((e, i) => {
        sum += i == 0 ? e : (n - 1) * e;
      })
      sum += n
      if(sum == m) rArr = [...tmp, n];      
    }
    else{
      for(let i = 0; i < arr.length; i++){
        if(chk[i] === 0){
          chk[i] = 1;
          tmp.push(arr[i]);
          dfs(k + 1);
          chk[i] = 0;
          tmp.pop();
        }
      }
    }
  }
  dfs(0);
  return rArr
}

 console.log(solution(4, 16)) // [3, 1, 2, 4]

