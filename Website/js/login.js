let loginstatus = false;
const usernameInput = $('#username');
const passwordInput = $('password');
const outputContainer = $('#errorField');
const submitButton = $('buttonlogin');


const username = "benutzer";
const password = "1234";
function outputResult(value) {
    if (value) {
        window.open("siteeditor.html");
    }
    else {
        let loginstatus = false;
        outputContainer.style.visibility = "visible";
    }
    document.getElementById("form-signin").addEventListener("click", function (event) {
        event.preventDefault()
    });
}

submitButton.addEventListener('click', function () {
    const usernameInput = usernameInput.value;
    const passwordInput = passwordInput.value;

    if (usernameInput === username && passwordInput === password) {
        outputResult(true);
    } else {
        outputResult(false);
    }
})