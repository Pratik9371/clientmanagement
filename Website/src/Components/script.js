$(function () {
  var $inputfield = $("#email");
  var $otpButton = $("#otp");
  var $emailError = $(".emailError");
  var $otpError = $(".otpError");

  $("#addEmail").on("click", function () {
    if ($inputfield.val() == "") {
      //Display Email error.
      $emailError.css({ display: "block" });
    } else {
      //Flip the button.
      $(".vButtonFlipper").addClass("flipped");
      //Disabling the error message.
      $emailError.css({ display: "none" });

      //Post request for sending email.
      $.ajax({
        type: "POST",
        url:
          "http://app.pointtopointonline.com/index.php?/registeruser/registerByEmail",
        data: { email: $inputfield.val() },
        success: function (data) {
          console.log(data);
        },
        dataType: "text",
        error: function () {
          alert("Error");
        },
      });

      //Storing the email value in localstorage.
      localStorage.setItem("email", $inputfield.val());
      //setting the value of text box to empty and placeholder value to enter otp.
      $inputfield.val("");
      $inputfield.attr("placeholder", "Enter OTP");
      $otpButton.html("Verify OTP");
    }
  });

  $(document).ready(function () {
    $("#otp").click(function () {
      $.ajax({
        type: "POST",
        url:
          "http://app.pointtopointonline.com/index.php?/registeruser/verifyOTP",
        data: {
          email: localStorage.getItem("email"),
          otp: $inputfield.val(),
        },
        success: function (data) {
          var response = JSON.parse(data);
          console.log(response.userId);
          //Checking if the entered otp is correct with the one which we are getting from response.
          if (response.isOtpValid) {
            $otpButton.html("Verifying...");
            $otpError.css({ display: "none" });
            window.location.assign(
              "http://app.pointtopointonline.com/index.php?/setup/account/" +
                response.userId
            );
          } else {
            $otpError.css({ display: "block" });
            $inputfield.val("");
          }
        },
        dataType: "text",
        error: function () {},
      });
    });
  });
});
