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

// 해석

// dfs(1) => arr = [1]  
//   dfs(2) => arr = [1, 2]
//     dfs(4) => arr[1, 2, 4]
//       dfs(8) => return
//       dfs(9) => return
//     dfs(5) => arr[1, 2, 4, 5]
//       dfs(10) => return
//       dfs(11) => return
//   dfs(3) => arr = [1, 2, 4, 5, 3]
//     dfs(6) => arr[1, 2, 4, 5, 3, 6]
//       dfs(12) => return
//       dfs(13) => return
//     dfs(7) => arr[1, 2, 4, 5, 3, 6, 7]
//       dfs(14) => return
//       dfs(15) => return
