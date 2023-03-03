function solution(str) {
  // str 중 최초 특수문자 => ex) 352+*9- 중 최초 특수문자 : '+'
  let fOpe = str.search(/\D/);
  // 최초 숫자 : 위의 특수문자 인덱스 기준 -2
  let val = parseInt(str[fOpe - 2]);
  // 최초 숫자를 제외한 나머지 다시 붙이기
  str = str.substring(0, fOpe - 2) + str.substring(fOpe - 1, str.length);

  while (isNaN(str)) {
    fOpe = str.search(/\D/);
    if (str[fOpe] == "+") val += parseInt(str[fOpe - 1]);
    if (str[fOpe] == "-") val -= parseInt(str[fOpe - 1]);
    if (str[fOpe] == "*") val *= parseInt(str[fOpe - 1]);
    if (str[fOpe] == "/") val /= parseInt(str[fOpe - 1]);
    str = str.substring(0, fOpe - 1) + str.substring(fOpe + 1, str.length);
  }
  return val;
}
console.log(solution("352+*9-"), 12);
