function solution(str,t){
  let [left, right, val] = [str.indexOf(t), str.indexOf(t), ''];
  for(let i = 0; i < str.length; i++){
    // 체크하는 범위 변경 ex) i가 6일때 기존 left = 1, right = 5 => left = 5, right = 10
    if(right < i){
      left = right;
      right = str.indexOf(t, right + 1);
    } 
    // 기준값 좌 우에 있는 t index값을 뺀 뒤 절대값으로 더 작은 값 찾은 후, val에 추가
    let [leftVal,rightVal] = [Math.abs(i - left), Math.abs(i - right)]
    val += leftVal > rightVal ? rightVal : leftVal;      
  }
  return val
}
console.log(solution("teachermodeef","e"),"1012101221001");



