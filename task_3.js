const primeNumber = (number) => {
  for (i = 2; i * i < number; i++) {
    if (number % i == 0) {
      // console.log(number + " is not a Prime Number");
      return false;
    } else {
      // console.log(number + " is a Prime Number");
      return true;
    }
  }
};

const primeNumberArray = (array) => {
  let newArray = [];
  for (i = 0; i <= array.length; i++) {
    if (primeNumber(array[i]) == true) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
};

const array = [1, 2, 3, 4, 5, 6, 7];
primeNumberArray(array);
