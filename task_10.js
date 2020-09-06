const stringCounter = (string) => {
  let array = [...string];
  let x = 0;
  let count = 0;
  for (i = 0; i <= array.length; i++) {
    if (array[i] == array[x]) {
      count++;
      x++;
    }
  }
};

const string = "ssssssstring";
stringCounter(string);
