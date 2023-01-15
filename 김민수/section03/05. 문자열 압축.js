function solution(str){
  let [al,cnt,val] = [str[0],1,''];
  for(let i = 1; i < str.length+1; i++){
    if(al == str[i]){
      cnt += 1;
    }else{
      val += al;
      if(cnt != 1) val += cnt
      al = str[i];
      cnt = 1;
    }
  }
  return val
}
console.log(solution("KKHSSSSSSSE"),"K2HS7E");



