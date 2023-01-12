function solution(INPUT) {
  let result = '';

  let cur = '';
  let compareElement = '';
  let cnt = 0;
  for(let i=0; i<INPUT.length; i+=1) {
    cur = INPUT[i];
    cnt = 0;
    for(let j=i; j<INPUT.length; j+=1) {
      compareElement = INPUT[j];

      if(cur === compareElement) cnt += 1;
      // 같지 않은 경우가 나왔다면, 그 전까지는 같았다는 말이므로,
      // j - 1까지 i를 옮겨줌
      else {
        i = j - 1;
        break;
      }
    }

    result += cur;
    if(cnt > 1) result += cnt.toString();
  }

  return result;
}

const INPUT = 'KKHSSSSSSSE';
const result = solution(INPUT);
console.log(result);