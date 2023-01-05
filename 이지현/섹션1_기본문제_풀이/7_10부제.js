function solution(dateNum, a, b, c, d, e, f, g) {
  const ticket = [a, b, c, e, d, f, g].filter(
    (element) => String(element).split("")[1] === String(dateNum)
  );
  return ticket.length;
}

console.log(solution(3, 25, 23, 11, 47, 53, 17, 33));
console.log(solution(0, 12, 20, 54, 30, 87, 91, 30));
