function validate() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email.match(/\S+@\S+/)) {
    document.getElementById("email").className = "";
    document.getElementById("ewarn").style.display = "";
    if (password.length > 8) {
      document.getElementById("password").className = "";
      document.getElementById("pwarn").style.display = "";

      return true;
    } else {
      document.getElementById("password").className = "incorrect";
      document.getElementById("pwarn").style.display = "block";
      return false;
    }
    return false;
  } else {
    document.getElementById("email").className = "incorrect";
    document.getElementById("ewarn").style.display = "block";
    if (password.length > 8) {
      document.getElementById("password").className = "";
      document.getElementById("pwarn").style.display = "none";
    } else {
      console.log("Incorrect pass");
      document.getElementById("password").className = "incorrect";
      document.getElementById("pwarn").style.display = "block";
    }
    return false;
  }
  document.getElementById("email").className = "incorrect";
  document.getElementById("ewarn").style.display = "block";
  return false;
}
