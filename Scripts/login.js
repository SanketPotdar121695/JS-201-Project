function myFunction(){
    let x = document.getElementById("password");
    let y = document.getElementById("hide1");
    let z = document.getElementById("hide2");
    
    if (x.type === "password"){
        x.type = "text";
        y.style.display = "none";
        z.style.display = "inline";
    }
    else {
        x.type = "password";
        y.style.display = "inline";
        z.style.display = "none";
    }
}

let form = document.querySelector("form");

const logIn = (event) => {
    event.preventDefault();
    let signup_data = JSON.parse(localStorage.getItem("user-data")) || [];
    let login_data = JSON.parse(localStorage.getItem("login-data")) || "";

    let username = form.username.value;
    let password = form.password.value;

    if (username === "" || password === "") {
        alert("Please fill all the credentials!");
        return;
    }

    if (username == login_data.username){
        alert("You are already logged in");
        return;
    }

    if (signup_data.length === 0){
        if (login_data){
            alert("You are already logged in!");
            return;
        }
        alert("User does not exist");
        window.location.reload();
        return;
    }

    let isMatch = false;

    for (let i = 0; i < signup_data.length; i++){
        if (signup_data[i].username == username && signup_data[i].password == password){
            isMatch = true;
            localStorage.setItem("login-data", JSON.stringify(signup_data[i]));
            break;
        }
    }
    
    if (isMatch === true){
        alert("Login Successful");
        window.location.href = "/index.html";
    }
    else {
        alert("Please enter correct credentials");
    }
}
form.addEventListener("submit", logIn);