const checkPassword = (userPassword) => {
  // Regular Expression that checks for both cases of the alphabet
  let veryWeakPassword = /^[a-zA-Z]+$/;

  // Regular Expression that checks numbers
  let weakPassword = /^[0-9]+$/;

  // Regular Expression that checks for both cases of the alphabet and numbers
  let strongPassword = /^[a-zA-Z0-9]+$/;

  // Regular Expression that checks for both cases of the alphabet, numbers and special character
  let veryStrongPassword = /^[a-zA-Z0-9!@#$%^*_-]+$/;

  // If statements that check each of the password strength
  if (userPassword.match(veryWeakPassword)) {
    console.log(
      `Very Weak Password - Please input a password that has one uppercase letter, one lowercase letter, one number and a special character`
    );
  } else if (userPassword.match(weakPassword)) {
    console.log(
      `Weak Password - Please input a password that has one uppercase letter, one lowercase letter, one number and a special character`
    );
  } else if (userPassword.match(strongPassword)) {
    console.log(`Strong Password but its missing a special character`);
  } else if (userPassword.match(veryStrongPassword)) {
    console.log("Very Strong Password");
  } else {
    console.log(
      `Please input a password that has one uppercase letter, one lowercase letter, one number and a special character`
    );
  }
};

const userPassword = "password123";

checkPassword(userPassword);
