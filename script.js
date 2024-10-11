document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Form validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Submit form data or perform other actions here
    alert("Sign-up successful!");
  });
