function solution(num, arr) {
  const answer = arr.sort((a, b) => a.length - b.length);
  return answer[num - 1];
}

console.log(solution(5, ["teacher", "time", "student", "beautiful", "good"]));
