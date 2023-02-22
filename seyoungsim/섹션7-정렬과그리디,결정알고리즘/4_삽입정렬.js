function solution(arr) {
  const array = [...arr];

  for (let i = 1; i < array.length; i++) {
    const insertNum = array[i];

    for (let j = i - 1; j >= 0; j--) {
      const prevNum = array[j];

      if (insertNum < prevNum) {
        [array[j + 1], array[j]] = [prevNum, insertNum];
      } else {
        array[j + 1] = insertNum;
        break;
      }

      console.log(array);
    }
  }

  return array;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
