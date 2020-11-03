function getPassword() {
    var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var chars =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
  var passwordLength = 10;
  var alphabetsPassword = "";
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  for (var i = 0; i < 1; i++ ){
    var randomNumber = Math.floor(Math.random() * alphabets.length);
    alphabetsPassword += alphabets.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").innerHTML =alphabetsPassword + password;
}
