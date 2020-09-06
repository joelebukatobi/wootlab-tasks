let input = "Mr John Smith";
const replaceString = (input) => {
  for (i = 0; i < input.length; i++) {
    input = input.replace(" ", "%");
  }
  console.log(input);
};
replaceString(input);
