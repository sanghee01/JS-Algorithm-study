function solution(INPUT) {
  let result = 0;
  let pipeCnt = 0;

  INPUT.split('').forEach((cur, idx) => {
    // 파이프의 시작
    if (cur === '(') {
      pipeCnt += 1;
    }
    // ')'일 경우
    else {
      pipeCnt -= 1;
      // 만약 바로 앞이 '('라면 파이프가 아니라 레이저
      if (INPUT[idx - 1] === '(') {
        // 잘린 개수 추가
        result += pipeCnt;
      }
      // 레이저가 아니라면 파이프의 끝이므로 파이프 개수 + 1
      else {
        result += 1;
      }
    }
  });

  return result;
}

const INPUT = '(((()(()()))(())()))(()())';
const ANSWER = solution(INPUT);
console.log(ANSWER);
