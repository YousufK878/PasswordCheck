let button = document.querySelector("#submit-button");

let body = document.querySelector("body");

let usernameInput = document.querySelector("#username");
let passwordInput = document.querySelector("#password");

let successText = document.querySelector("#success");

let errorText = document.querySelector("#error");

button.onclick = function(event) {
    event.preventDefault();

    if (usernameInput.value == "Baby Yoda" && passwordInput.value == "Squirtle") {

        errorText.style.display = "none";
        successText.style.display = "block";
        body.style.backgroundColor = "lightblue";

    } else {

        successText.style.display = "none";
        errorText.style.display = "block";
        body.style.backgroundColor = "rgb(50, 50, 50)";

    }

    usernameInput.value = "";
    passwordInput.value = "";

}