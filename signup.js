const myFunction = () => {
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

let form = document.querySelector ("form");

const signUp = (event) => {
    event.preventDefault();
    let user_data = JSON.parse(localStorage.getItem("user-data")) || [];

    let user = {
        email: form.email.value,
        username: form.username.value,
        password: form.password.value,
    }
    let { email, username, password } = user;

    if (email === "" || username === "" || password === ""){
        alert("Please fill all the credentials!");
        return;
    }
    
    let isExisted = false;
    for (let i = 0; i < user_data.length; i++){
        if (email === user_data.email || username === user_data[i].username){
            isExisted = true;
        }
    }

    if (isExisted === true) {
        alert ("User already exists!");
        return;
    }
    else {
        user_data.push (user);
        localStorage.setItem ("user-data", JSON.stringify(user_data));
        alert("User signed up successfully!");
        window.location.reload();
    }
}
form.addEventListener("submit", signUp);