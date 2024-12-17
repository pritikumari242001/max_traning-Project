let name;
let password;
let passwordErr = document.getElementById("passwordErr");
let nameErr = document.getElementById("nameErr");
function userName(e) {
    name = e.target.value;

    nameErr.innerText = "";
}

function userpassword(e) {
    password = e.target.value;
    passwordErr.innerText = "";
}
let userNameData = "Anjali";
let passwordData = "1234";

function submitasfg() {
    if (!name && !password) {
        passwordErr.innerText = "This is required ";
        nameErr.innerText = "This is required";
        // alert("please filled this form");
    } else if (userNameData !== name && passwordData !== password) {
        passwordErr.innerText = "you type wrong username";
        nameErr.innerText = "you type wrong passord";
    } else if (userNameData === name && passwordData === password) {
        document.getElementById("nameText").value = "";
        document.getElementById("passwordText").value = "";
        window.location.href = "./index.html";
        history.replaceState(null, null, "index.html");
    }
}
