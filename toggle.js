document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {

      document.getElementById("monthb").innerHTML="19.99";
      document.getElementById("monthp").innerHTML="24.99";
      document.getElementById("monthm").innerHTML="39.99";

    } else {
      document.getElementById("monthb").innerHTML="199.99";
      document.getElementById("monthp").innerHTML="249.99";
      document.getElementById("monthm").innerHTML="399.99";

    }
  });
});
