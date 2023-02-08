function solution(NECESSARY_ORDER, CLASS_LIST) {
  const ORDER_REGEX = new RegExp(`[${NECESSARY_ORDER}]`, 'g');
  const NECESSARY_CLASS_LIST = CLASS_LIST.match(ORDER_REGEX);

  let result = NECESSARY_CLASS_LIST.join('') === NECESSARY_ORDER ? 'YES' : 'NO';
  return result;
}

const NECESSARY_ORDER = 'CBA';
const CLASS_LIST = 'CBDAGE';
const ANSWER = solution(NECESSARY_ORDER, CLASS_LIST);
console.log(ANSWER);
