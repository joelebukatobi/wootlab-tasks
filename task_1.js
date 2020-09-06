const sumofNum = (array) => {
  let even = 0;
  let odd = 0;

  // New Array
  let newArray = [];

  // Looping through the array to find odd or even numbers
  for (i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      even += array[i];
    } else {
      odd += array[i];
    }
  }

  // Pushes the sum of each set of numbers in to the new array
  newArray.push(even, odd);
  console.log(newArray);
  console.log("Sum of even numbers: " + even);
  console.log("Sum of odd numbers: " + odd);
};

const array = [1, 2, 3, 4, 5, 6];
const num = array.length;

sumofNum(array, num);
