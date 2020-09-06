const palindromeCheck = (str) => {
  // Sets strings to lowercase
  let res = str.toLowerCase();

  // Splits the string into elements in an array
  let array = res.split("");
  let newArray = [];
  let back = [];

  // Loops through using a regular expression
  for (var i = 0; i < array.length; i++) {
    if (/[a-z]/i.test(array[i]) || /\d/i.test(array[i]) === true) {
      newArray.push(array[i]);
      back.push(array[i]);
    }
  }
  back.reverse();

  if (back.toString() === newArray.toString()) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

str = "mom";
palindromeCheck(str);
