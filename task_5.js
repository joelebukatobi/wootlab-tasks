const replaceString = (input) => {
  // Loops throught the input to find spaces
  for (i = 0; i < input.length; i++) {
    input = input.replace(" ", "%");
  }
  console.log(input);
};

let input = "Mr John Smith";

// Calls the replaceString function
replaceString(input);
