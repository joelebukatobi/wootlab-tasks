const variance = (array, length) => {
  let sum = 0;

  //Finds the sum of elements in the Array
  for (i = 0; i < length; i++) {
    sum += array[i];
  }

  // Finds the average;
  let mean = sum / length;

  // Finds the square of difference
  let squareDifference = 0;
  for (i = 0; i < length; i++) {
    squareDifference += (array[i] - mean) * (array[i] - mean);
  }

  // Calculates the variance
  const varianceValue = squareDifference / length;
  console.log(varianceValue);
  return varianceValue;
};

// Uses the variance to calculate the Standard Deviation
const standardDeviation = (array, length) => {
  const standardDeviationValue = Math.sqrt(variance(array, length));
  console.log(standardDeviationValue);
};

const array = [600, 470, 170, 430, 300];
const length = array.length;

variance(array, length);
standardDeviation(array, length);
