function solution(arr) {
  let array = [...arr];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        const big = array[j];
        array[j] = array[j + 1];
        array[j + 1] = big;
      }
    }
  }

  return array;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
