// 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.

// ## 빈도수 세기
// 숫자를 문자로 바꾸어 배열화 한 이후 그 배열의 요소들을 숫자화 한다.
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

// sameFrequency 솔루션
// function sameFrequency(num1, num2){
//   let strNum1 = num1.toString();
//   let strNum2 = num2.toString();
//   if(strNum1.length !== strNum2.length) return false;
  
//   let countNum1 = {};
//   let countNum2 = {};
  
//   for(let i = 0; i < strNum1.length; i++){
//     countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//   }
  
//   for(let j = 0; j < strNum1.length; j++){
//     countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//   }
  
//   for(let key in countNum1){
//     if(countNum1[key] !== countNum2[key]) return false;
//   }
 
//   return true;
// }

// ## feedback
// Stirng 외에 문자열로 바꾸는 방법 중 toString() 또한 있다는 사실
// 나의 경우 key 값은 존재하는지 또 key 값에 대한 value 값이 존재하는지 둘다 고려하였는데 key 값에 대한 value 값만 고려해도 둘다 포괄할 수 있다. 다만 이러기 위해서는 두 문자열의 길이가 동일하다는 전제가 있어야함.