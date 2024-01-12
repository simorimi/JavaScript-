// Sliding Window - maxSubarraySum
// 정수의 배열과 숫자가 주어졌을 때, 함수에 전달된 숫자의 길이를 가진 하위 배열의 최대 합을 구하는 maxSubarraySum이라는 함수를 작성하세요.

// my solution
// 배열에 0부터 주어진 숫자길이 만큼 배열의 합을 구한다.
// 해당 배열의 합을 max에 저장하고 해당 합에서 제일 처음 값을 빼고 그 다음 값을 더한 값을 임시 값에 저장한다.
// 두 값을 비교하여 임시 값이 max 값보다 큰 경우 max에 저장한다.
// 해당 과정을 배열이 끝날때까지 반복한다.
// max 값을 return 한다.

function maxSubarraySum(arr, num) {
    let max = 0;
    let temp = 0;

    if(arr.length < num) {
        return null;
    }

    for(let i = 0; i < num; i ++) {
        max += arr[i];
        temp = max;
    }

    for(let i = 0; i < arr.length - num; i ++) {
        temp = temp - arr[i] + arr[i+num];
        console.log(temp);
        if(temp > max) {
            max = temp;
        }
    }
    return max;
}

console.log(maxSubarraySum([3,5,4,2,3,5,6,4], 3));

// feedback
// 반복문을 중첩해서 사용할 수 없는 것이지 여러번 사용할 수 있다는 점을 놓쳤다.
// 실행 자체가 안되는 경우에 대해서도 고려하지 못하였다.
// temp는 맥스에서 빼는게 아니라 temp 자체에서 빼야하는데 이 부분으로 인해 오래 걸렸다.