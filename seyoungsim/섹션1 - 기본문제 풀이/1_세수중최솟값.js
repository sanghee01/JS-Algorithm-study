/** 
 * 세 수 중 최솟값
 * 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.
 * (정렬을 사용하면 안됩니다)
 */

/** 처음에 푼 솔루션입니다. */
function solution(a, b, c) {
  return Math.min(...arguments);
}

console.log(solution(2, 5, 1));

// 기존 코드와의 벤치마크 결과를 비교하면서, arguments 를 가져와 전개구문(...)으로 Math.min 에 넘겨서
// 최솟값을 구하는게 ifelse 보다는 느린 것을 알게되었습니다. 
// 인터넷에서 리서칭한 결과, if가 min/max 보다는 빠르지만 코드를 이해하기는 min/max가 낫다는 의견이었습니다.