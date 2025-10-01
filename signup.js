document.getElementById("signupForm").addEventListener("submit", function(event)
{
    event.preventDefault();
    let valid = true;

    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    let username = document.getElementById("username");
    if (username.value.trim() === "")
    {
        document.getElementById("usernameError").textContent = "Username is required.";
        valid = false;
    }


    let email = document.getElementById("email");
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "")
        {
        document.getElementById("emailError").textContent = "Email is required.";
        valid = false;
        }

    else if (!emailPattern.test(email.value))
        {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        valid = false;
        }

    let password = document.getElementById("password");
    if (password.value.trim() === "")
        {
        document.getElementById("passwordError").textContent = "Password is required.";
        valid = false;
        }


    let confirmPassword = document.getElementById("confirmPassword");
    if (confirmPassword.value.trim() === "")
        {
        document.getElementById("confirmPasswordError").textContent = "Confirm Password is required.";
        valid = false;
        }

    else if (confirmPassword.value !== password.value)
    {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        valid = false;
    }

    if (valid)
        {
        alert("Form submitted successfully!");
        document.getElementById("signupForm").reset();
        }
});
