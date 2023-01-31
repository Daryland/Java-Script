function sumOfIntegers(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      sum += parseInt(str[i]);
    }
  }
  return sum;
}


console.log(sumOfIntegers("GH2U87A")); // Output: 17
