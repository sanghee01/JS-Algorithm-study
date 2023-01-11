function solution(text) {
  let str = "";
  text.split("").forEach((element) => {
    if (element === element.toUpperCase()) {
      str += element.toLowerCase();
    } else if (element === element.toLowerCase()) {
      str += element.toUpperCase();
    }
  });
  return str;
}

console.log(solution("StuDY"));
