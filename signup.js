let name;
let email;
let password;
let nameErr=document.getElementById("nameErr");
let emailErr=document.getElementById("emailErr");
let passwordErr=document.getElementById("passwordErr");

function userName(e){
    name =e.target.value;
    nameErr.innerText="";
}
function userEmail(e){
    name =e.target.value;
    emailErr.innerText="";
}
function userpassword(e){
    name =e.target.value;
    passwordErr.innerText="";
}
function submitSignup(){
    if(!name && !email &&!password){
        nameErr.innerText="This is required";
        emailErr.innerText="This is required";
        passwordErr.innerText="This is required";
    }
}
