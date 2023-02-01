function solution(m, arr) {
  let p1 = 0;
  let p2 = 0;
  let count = 0;
  let subtotal = arr[p2];

  while (p1 < arr.length && p2 < arr.length) {
    if (subtotal < m) {
      subtotal += arr[++p2];
    } else {
      subtotal -= arr[p1++];
    }
    if (subtotal === m) {
      count++;
    }
  }

  return count;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(8, a));
