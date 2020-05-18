$(function () {
  var $password = $(".password");
  var $retypePassword = $(".retypePassword");

  $(document).ready(function () {
    $("form").submit(function (e) {
      e.preventDefault();
      password = $password.val();
      if (password == "") {
        $(".passwordEmpty").css({ display: "block" });
      } else if (password.length < 8 && !validatePassword($password.val())) {
        $(".passwordEmpty").css({ display: "none" });
        $(".passwordValidity").css({ display: "block" });
      } else if ($password.val() != $retypePassword.val()) {
        $(".passwordMatch").css({ display: "block" });
      } else {
        alert("Correct");
      }
    });
  });

  function validatePassword($password) {
    return (
      /[A-Z]/.test($password) &&
      /[0-9]/.test($password) &&
      /[!@#$%&?]/.test($password)
    );
  }
});
