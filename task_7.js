const variance = (array, length) => {
  let sum = 0;
  for (i = 0; i < length; i++) {
    sum += array[i];
  }

  let mean = sum / length;
  let squareDifference = 0;
  for (i = 0; i < length; i++) {
    squareDifference += (array[i] - mean) * (array[i] - mean);
  }

  const varianceValue = squareDifference / length;
  console.log(varianceValue);
  return varianceValue;
};

const standardDeviation = (array, length) => {
  const standardDeviationValue = Math.sqrt(variance(array, length));
  console.log(standardDeviationValue);
};

const array = [600, 470, 170, 430, 300];
const length = array.length;

variance(array, length);
standardDeviation(array, length);
