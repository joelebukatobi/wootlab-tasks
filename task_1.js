const sumofNum = (array, num) => {
  let even = 0;
  let odd = 0;

  for (i = 0; i < num; i++) {
    if (i % 2 == 0) {
      even += array[i];
    } else {
      odd += array[i];
    }
  }

  console.log("Sum of even numbers: " + even);
  console.log("Sum of odd numbers: " + odd);
};

const array = [1, 2, 3, 4, 5, 6];
const num = array.length;

sumofNum(array, num);
