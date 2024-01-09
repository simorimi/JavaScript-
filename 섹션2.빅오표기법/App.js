class loop {
  loopFn(n) {
    return (n * (n + 1)) / 2;
  }
}

const RESULT = new loop().loopFn(5);
console.log(RESULT);


