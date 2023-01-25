function solution(N, M, COST_LIST) {
  // 상품가격과 배송비를 합한 값으로 오름차순으로 정렬
  COST_LIST = COST_LIST.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  let costSum = 0;
  let cnt = 0;

  for (let i = 0; i < N; i += 1) {
    let [productPrice, deliveryFee] = COST_LIST[i];
    costSum = productPrice + deliveryFee;

    // 만약 상품가격과 배송비를 합한 가격이 남은 예산보다 크다면
    if (costSum > M) {
      // 쿠폰을 써서 상품가격을 반으로 낮춤
      productPrice /= 2;
      costSum -= productPrice;
    }

    // 예산에서 합한 가격을 빼줌
    M -= costSum;
    // 만약 예산에서 합한 가격을 빼줬는데 남은 예산이 마이너스가 되었다면
    if (M < 0) {
      // 빼준 값을 다시 더해주고 continue
      M += costSum;
      continue;
    }
    // continue가 되지 않았다면 예산 안에서 충족했다는 뜻이므로
    // cnt를 하나 더해줌
    cnt += 1;
  }

  return cnt;
}

const [N, M] = [5, 28];
const COST_LIST = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
const ANSWER = solution(N, M, COST_LIST);
console.log(ANSWER);
