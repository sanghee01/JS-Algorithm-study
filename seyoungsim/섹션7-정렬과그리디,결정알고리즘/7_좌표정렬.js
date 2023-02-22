function solution(arr) {
  return [...arr].sort((a, b) => {
    const [ax, ay] = a;
    const [bx, by] = b;

    if (ax === bx) {
      return ay - by;
    } else {
      return ax - bx;
    }
  });
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
