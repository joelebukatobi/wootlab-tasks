// Arrow Function for Prime Number
const primeNumber = (number) => {
  for (i = 2; i * i < number; i++) {
    // If statement that checks if the number is a prime number
    if (number % i == 0) {
      console.log(number + " is not a Prime Number");
    } else {
      console.log(number + " is a Prime Number");
    }
  }
};

primeNumber(6);
primeNumber(7);
