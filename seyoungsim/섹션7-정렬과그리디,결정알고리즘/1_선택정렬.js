function solution(arr) {
  let array = [...arr];

  for (let i = 0; i < array.length - 1; i++) {
    let min = 101;
    for (let j = i; j < array.length; j++) {
      if (min > array[j]) min = array[j];
    }
    array[array.indexOf(min)] = array[i];
    array[i] = min;
  }

  return array;
}

let arr = [13, 5, 11, 7, 23, 15]; // [ 5, 7, 11, 13, 15, 23 ]
console.log(solution(arr));
