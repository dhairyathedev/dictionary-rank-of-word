function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function getTheRankOfTheWord(str) {
  // const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
  const obj = {};
  const arr = [];
  const factorials = [];
  const product = [];
  // GET THE LETTERS BEFORE IT
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    const sub = str.substring(i + 1);
    for (let j = 0; j < sub.length; j++) {
      if (str[i] > sub[j]) {
        count++;
      }
    }
    obj[str[i]] = count;
    arr.push(count);
  }
  // Find Factorial
  for (let i = 0; i < arr.length; i++) {
    factorials.push(factorial(i));
  }

  // Multiply Number and Factorials
  for (let i = 0; i < factorials.length; i++) {
    product.push(factorials[i] * arr[arr.length - 1 - i]);
  }

  const rank = product.reduce((a, b) => a + b, 0) + 1;
  console.log(rank);

  // console.log(arr);
}

getTheRankOfTheWord("MOTHER");
