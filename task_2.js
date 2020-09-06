const primeNumber = (number) => {
  for (i = 2; i * i < number; i++) {
    if (number % i == 0) {
      console.log(number + " is not a Prime Number");
    } else {
      console.log(number + " is a Prime Number");
    }
  }
};

primeNumber(6);
