var loginBtn = document.getElementById("login-btn");
var signupBtn = document.getElementById("signup-btn");

var loginBox = document.getElementById("login-Box");
var signupBox = document.getElementById("signUp-Box");

loginBtn.onclick = function () {
    moveLogin();
};
signupBtn.onclick = function () {
    moveSignUp();
};

function moveLogin() {
    signupBox.style.display = "none";
    loginBox.style.display = "flex";

    document.getElementById('login-btn').style.boxShadow ="inset -6px -6px 6px rgba(108, 193, 204, 0.8),inset 6px 6px 6px rgba(133, 194, 179, 0.61)";
    
    document.getElementById('signup-btn').style.boxShadow ="-6px -6px 6px rgba(255, 255, 255, 0.8), 6px 6px 6px rgba(0, 0, 0, 0.2)";
}

function moveSignUp() {
    loginBox.style.display = "none";
    signupBox.style.display = "flex";
    document.getElementById('login-btn').style.boxShadow ="-6px -6px 6px rgba(255, 255, 255, 0.8), 6px 6px 6px rgba(0, 0, 0, 0.2)";
    document.getElementById('signup-btn').style.boxShadow ="inset -6px -6px 6px rgba(108, 193, 204, 0.8),inset 6px 6px 6px rgba(133, 194, 179, 0.61)";
}
