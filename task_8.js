const countNumber = (number, digit) => {
  let result = 0;
  let iteration = digit;
  while (iteration <= number) {
    if (iteration % 10 == digit) {
      result++;
    }

    if (iteration != 0 && Math.floor(iteration / 10) == digit) {
      result++;
      iteration++;
    } else if (Math.floor(iteration / 10) == digit - 1) {
      iteration = iteration + (10 - digit);
    } else {
      iteration = iteration + 10;
    }
  }
  console.log(result);
};

countNumber(35, 3);
