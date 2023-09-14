let inputs = document.querySelectorAll("input");

// for (let i = 0; i < inputs.length; i++) {
//   if (inputs[i].required === true && inputs[i].value === "") {
//     inputs[i].classList.remove(".required");
//   }
// }

// inputs.forEach((element) => {
//   if (element.required === true && element.value === "") {
//     element.classList.remove(".required");
//   } else {
//     element.required = true;
//   }
// });

let password = document.getElementById("password"),
  confirm_password = document.getElementById("confirm_password");

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity("");
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
