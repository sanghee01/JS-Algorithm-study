function solution(word, alphabet) {
  let count = 0;
  word.split("").forEach((element) => {
    if (element === alphabet) {
      count++;
    }
  });
  return count;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));
