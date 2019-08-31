function signUp() {
  var username = document.getElementById("username-input");
  var email = document.getElementById("email-input");

  document.getElementById("signup-success").innerHTML = "We have sent a success notification to your Email.";

  console.log("Sending message to " + email);

}
