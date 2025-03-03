document.getElementById("signupForm").addEventListener("submit", function (event) {
event.preventDefault();
console.log("Form submission prevented! Validating fields...");
document.querySelectorAll(".error-message").forEach((el) => (el.style.display = "none"));

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const tel = document.getElementById("tel").value.trim();
const password = document.getElementById("password").value.trim();
const refer = document.getElementById("refer").value;
const preferred = document.querySelector('input[name="contact"]:checked');
const terms = document.getElementById("terms").checked;

let valid = true;

if(!name){
    valid = false;
    document.getElementById("nameError").style.display= "block";
}
if(!email || !validateEmail(email)){
    valid = false;
    document.getElementById("emailError").style.display= "block";
}
if(!tel || !validatePhone(tel)){
    valid = false;
    document.getElementById("telError").style.display= "block";
}
if(!password || !validatePassword(password)){
    valid = false;
    document.getElementById("passwordError").style.display= "block";
}
if(!refer){
    valid = false;
    document.getElementById("referError").style.display= "block";
}
if(!preferred){
    valid = false;
    document.getElementById("PreferredContactError").style.display= "block";
}
if(!terms){
    valid = false;
    document.getElementById("termsError").style.display= "block";
}
if(valid){
    // document.getElementById("signupForm").submit();
    alert("Form submitted successfully!");
    this.submit();
}else {
    console.log("Form submission stopped due to missing fields.");
}
});
function validateEmail(email){
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validEmail.test(email);
}
function validatePhone(phone) {
    const validTel = /^\+?[1-9]\d{1,14}$/;
    return validTel.test(phone);
  }
  
  function validatePassword(password) {
    const validPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return validPass.test(password);
  }

  document.querySelectorAll("input, select").forEach(element => {
    element.addEventListener("input", function() {
        let errorId = this.id + "Error";
        let errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.style.display = "none";
        }
        const allFilled = [...document.querySelectorAll("input, select")].every(input => input.value.trim() !== "");
        document.querySelector(".book-btn").disabled = !allFilled;
    });
});
document.querySelectorAll("input[type='radio'], input[type='checkbox']").forEach((element) => {
    element.addEventListener("change", function() {
        let errorId = this.classList.contains("dining-space") ? "PreferredContactError" : this.id + "Error";
        let errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.style.display = "none";
        }
    });
});

