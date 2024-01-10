// 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.
// 입력받은 값을 각각 배열화 한다.
// 빈 객체를 만든다.
// 각 배열을 각 객체에 키 값과 빈도수를 넣는다.
// 각 객체의 key 값은 일치하는지 value 값은 일치하는지 비교한다.

function sameFrequency(num1, num2) {
  const STRING_NUM1 = String(num1);
  const STRING_NUM2 = String(num2);
  
  const mapfn = (arg) => Number(arg);

  const ARR1 = Array.from(STRING_NUM1, mapfn);
  const ARR2 = Array.from(STRING_NUM2, mapfn);
  
  let num1Frequency = {};
  let num2Frequency = {};

  for (let num of ARR1) {
    num1Frequency[num] = (num1Frequency[num] || 0) + 1;
  }

  for (let num of ARR2) {
    num2Frequency[num] = (num2Frequency[num] || 0) + 1;
  }

  for (let key in num1Frequency) {
    if (!(key in num2Frequency)) {
      return false;
    }
    if (num1Frequency[key] !== num2Frequency[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(123, 321));
