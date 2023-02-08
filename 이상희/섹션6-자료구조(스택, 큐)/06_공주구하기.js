function solution(n, k) {
  let answer;
  const queue = Array.from({ length: n }, (v, i) => i + 1); // js는 항상 첫번째 인자는 value 두번째는 index
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift(); // k번 외친 사람 - 그냥 제거
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

console.log(solution(8, 3));
