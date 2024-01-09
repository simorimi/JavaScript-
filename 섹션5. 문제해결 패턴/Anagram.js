// 아나그램
// my solution
// - 두 문자열의 길이를 비교하여 길이가 다르면 false를 리턴한다.
// - 두 문자열이 영어로만 이루어져있는지 확인한다.
// - 각 문자열을 소문자화 한다.
// - 각 문자열을 split 하여 배열화 한다.
// - 빈도수 세기 객체를 생성하여 비교한다.

// feedBack - 조금 더 자세히 적기 빈도수 세기의 경우 각 빈 객체를 생성하고 해당 객체에 반복문을 통하여 값을 넣는다. 정도까지 하면 좋을듯 

function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  const REG_EXP = /[a-zA-Z]/g;
  if (!(REG_EXP.test(string1) && REG_EXP.test(string2))) {
    if (!(string1 === "" && string2 === "")) return false;
  }

  const LOWER_STR1 = string1.toLowerCase();
  const LOWER_STR2 = string2.toLowerCase();

  const STR1_ARRAY = LOWER_STR1.split("");
  const STR2_ARRAY = LOWER_STR2.split("");

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of STR1_ARRAY) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of STR2_ARRAY) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// // solution.
// function validAnagramSolution(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }

//   const lookup = {};
//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     // if letter exists, increment, otherwise set to 1
//     lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
//   }

//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     // can't find letter or letter is zero then it's not an anagram
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }
//     return true;
// }