/**
 * 삼각형의 결정조건
 * 1. 세 변의 길이를 알 때 - 가장 긴 변의 길이가 다른 두 변의 길이의 함보다 크거나 같으면 그릴 수 없다. 길이가 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 삼각형을 그릴 수 있다.
 * 2. 두 변의 길이와 끼인각의 크기를 알 때 -
 * 3. 한 변의 길이와 양쪽 끝각의 크기를 알 때 -
 * 
 * 해당 문제는 세 변의 길이를 알기에 1. 가장 긴 변의 길이를 max로 찾고 2. 나머지 변을 찾은 후 합한 값을 3. 가장 긴 변과 비교했을 때 max 값보다 나머지 변의 길이가 작을 경우 YES를 반환한다.
 * 참고사이트 - https://mathbang.net/92
 */

function solution(a, b, c) {
    let answer = 'YES',
      max;
  
    max = Math.max(...arguments);
    const anotherArraySum = [...arguments].filter((v) => v < max).reduce((a, c) => a + c, 0);
  
    if (max > anotherArraySum) answer = 'NO';
  
    return answer;
  }
  
  console.log(solution(13, 33, 17)); // NO
  console.log(solution(6, 7, 11)); // YES
  console.log(solution(1, 2, 2.999)); // YES