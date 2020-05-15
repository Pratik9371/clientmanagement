$(function () {
  var $inputfield = $("#email");
  var $otpButton = $("#otp");

  $("#addEmail").on("click", function () {
    if ($inputfield.val() == "") {
      alert("Email is required");
    } else {
      //Flip the button.
      $(".vButtonFlipper").addClass("flipped");

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
            window.location.assign(
              "http://app.pointtopointonline.com/index.php?/setup/account/" +
                response.userId
            );
          } else {
            alert("Incorrect otp. Try again");
            $inputfield.val("");
          }
        },
        dataType: "text",
        error: function () {
          alert("Error");
        },
      });
    });
  });
});
