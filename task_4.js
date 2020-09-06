const checkPassword = (userPassword) => {
  let veryWeakPassword = /^[a-zA-Z]+$/;
  let weakPassword = /^[0-9]+$/;
  let strongPassword = /^[a-zA-Z0-9]+$/;
  let veryStrongPassword = /^[a-zA-Z0-9!@#$%^*_-]+$/;

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

const userPassword = "joelebuka193";

checkPassword(userPassword);
