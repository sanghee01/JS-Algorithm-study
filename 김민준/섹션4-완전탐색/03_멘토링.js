function solution(N, M, TEST_RESULT_LIST) {
  // 자신을 key로 갖고, 자기보다 낮은 등수에 있는 사람들을 value로 갖는 객체
  let lowerRankListObj = {};
  for (let i = 1; i <= N; i += 1) {
    lowerRankListObj[i] = [];
  }

  let standard = 0; // 기준
  let test = [];
  for (let i = 0; i < M; i += 1) {
    test = TEST_RESULT_LIST[i]; // 한 row
    for (let j = 0; j < N; j += 1) {
      standard = test[j];
      // 기준보다 뒤에 있는 값들 value에 추가
      lowerRankListObj[standard].push(...test.slice(j + 1));
    }
  }

  let lowerRankCountList = []; // 학생번호를 인덱스로 갖는 배열
  let lowerRankList = [];
  let pairCount = 0;
  for (const NUMBER in lowerRankListObj) {
    lowerRankCountList = Array.from({ length: N + 1 }, () => 0);
    lowerRankList = lowerRankListObj[NUMBER]; // 객체 key 값 하나씩 순회

    lowerRankList.forEach((rank) => {
      lowerRankCountList[rank] += 1;
    });

    lowerRankCountList.forEach((count) => {
      // 만약 count가 N - 1 이라면,
      // 모든 row에서 자기 자신보다 낮은 등수라는 의미이므로
      // 멘토-멘티가 성립됨
      if (count === N - 1) pairCount += 1;
    });
  }

  return pairCount;
}

// N = 반 학생 수
// M = 수학테스트 결과
const [N, M] = [4, 3];
const TEST_RESULT_LIST = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
const ANSWER = solution(N, M, TEST_RESULT_LIST);
console.log(ANSWER);
