function solution(m, arr){         
  let answer=[];
  let ch=Array.from({length:arr.length}, ()=>0);
  let tmp=[];
  function DFS(L){ 
    if(L===m){
      answer.push([...tmp]); 
    }
    else{
      for(let i=0; i<arr.length; i++){
        if(ch[i]===0){
          ch[i]=1;
          tmp.push(arr[i]);
          DFS(L+1);
          ch[i]=0;
          tmp.pop();
        }
      }
    }
  }
  DFS(0);
  return answer;
}


console.log(solution(2, [3,6,9]))
