$(function () {
  var $email = $("#email");
  var $otp = $("#otp");

  $("#addEmail").on("click", function () {
    if ($email.val() == "") {
      alert("Email is required");
    } else {
      //Flip the button.
      $(".vButtonFlipper").click(function () {
        $(this).toggleClass("flipped");
      });

      //Post request for sending email.
      $.ajax({
        type: "POST",
        url:
          "http://app.pointtopointonline.com/index.php?/registeruser/registerByEmail",
        data: { email: $email.val() },
        success: function (data) {
          console.log(data);
        },
        dataType: "text",
        error: function () {
          alert("Error");
        },
      });

      //Storing the email value in localstorage.
      localStorage.setItem("email", $email.val());
      //setting the value of text box to empty and placeholder value to enter otp.
      $email.val("");
      $email.attr("placeholder", "Enter OTP");
      $otp.html("Verify OTP");
    }
  });

  $(document).ready(function () {
    $("#otp").click(function () {
      $.ajax({
        type: "POST",
        url:
          "http://app.pointtopointonline.com/index.php?/registeruser/verifyOTP",

        // data: { otp: $email.val(), email: email },
        data: { email: localStorage.getItem("email"), otp: $email.val() },
        success: function (data) {
          var response = JSON.parse(data);
          console.log(response.userId);
          window.location.assign(
            "http://app.pointtopointonline.com/index.php?/setup/account/" +
              response.userId
          );
        },
        dataType: "text",
        error: function () {
          alert("Error");
        },
      });
    });
  });
});
