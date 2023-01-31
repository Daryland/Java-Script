function getDifference(num) {
  if (num > 27) {
    return (num - 27) * 2;
  }
  return 27 - num;
}

console.log(getDifference(42)); // Output: 30



function sumTriple(a, b) {
  if (a === b) {
    return (a + b) * 3;
  }
  return a + b;
}

console.log(sumTriple(12, 12)); // Output: 72



function checkSum(a, b) {
  return (a === 40 || b === 40 || a + b === 40);
}


console.log(checkSum(40, 40)); // Output: true
console.log(checkSum(20, 20)); // Output: true
console.log(checkSum(30, 25)); // Output: false
console.log(checkSum(35, 5)); // Output: true
