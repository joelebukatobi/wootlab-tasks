const sumofNumbers = (array, arrayLength, sum) => {
  let x = 0;
  let y = arrayLength - 1;
  let newArray = [];
  while (x < y) {
    if (array[x] + array[y] == sum) {
      newArray.push(array[x], array[y]);
      return 1;
    } else if (array[x] + array[y] < sum) {
      x++;
    } else {
      y--;
    }
    return 0;
  }
  console.log(newArray);
};

const array = [1, 4, 45, 6, 10, -8];
const sum = 16;
const arrayLength = array.length;

sumofNumbers(array, sum, arrayLength);
