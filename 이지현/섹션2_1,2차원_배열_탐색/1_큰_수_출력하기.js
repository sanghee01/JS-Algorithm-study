function solution(num, arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0) {
      answer.push(arr[i]);
    }

    if (arr[i] < arr[i + 1]) {
      answer.push(arr[i + 1]);
    }
  }
  return answer.join(" ");
}

console.log(solution(6, [7, 3, 9, 5, 6, 12]));
