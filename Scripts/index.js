import showProducts from "../Components/products.js";
import showInspirations from "../Components/inspiration.js";
import showResources from "../Components/resources.js";


let nav = document.getElementById("nav");

nav.addEventListener("mouseover", () => {
    nav.style.backgroundColor = "white";
});

nav.addEventListener("mouseout", () => {

    if (document.body.style.overflow === 'hidden'){
        nav.style.backgroundColor = "white";
    }
    else if (window.scrollY === 0){
        nav.style.backgroundColor = "#ffe01b";
    }
});

document.addEventListener("scroll", () => {
    
    if (window.scrollY === 0){
        document.getElementById("nav").style.backgroundColor = "#ffe01b";
    }
    else {
        document.getElementById("nav").style.backgroundColor = "white";
    }
});

let modal = document.querySelector("#slidebar");
let options = document.querySelectorAll("#option > a");
let mini_nav = document.getElementById("mini-nav");
let content = document.getElementById("content");

options.forEach((el) => {
    el.addEventListener("mouseover", () => {
        nav.style.backgroundColor = "white";
        document.body.style.overflow = 'hidden';
        modal.showModal();

        if (el.innerText === "Products"){
            content.innerHTML = null;
            content.innerHTML = showProducts();
        }
        if (el.innerText === "Resources"){
            content.innerHTML = null;
            content.innerHTML = showResources();
        }
        if (el.innerText === "Inspiration"){
            content.innerHTML = null;
            content.innerHTML = showInspirations();
        }
        if (el.innerText === "Pricing"){
            content.innerHTML = null;
            modal.close();
            mini_nav.style.diplay = "none";
            nav.style.backgroundColor = "#ffe01b";
            document.body.style.overflow = "scroll";
        }
    });
});

mini_nav.addEventListener("mouseover", () => {
    nav.style.backgroundColor = "white";
    document.body.style.overflow = 'hidden';
    modal.showModal();
});

let mini_options = document.querySelectorAll("#mini-nav > a");

mini_options.forEach ((el) => {
    el.addEventListener("mouseover", () => {
        if (el.innerText === "Products"){
            content.innerHTML = null;
            content.innerHTML = showProducts();
        }
        if (el.innerText === "Resources"){
            content.innerHTML = null;
            content.innerHTML = showResources();
        }
        if (el.innerText === "Inspiration"){
            content.innerHTML = null;
            content.innerHTML = showInspirations();
        }
    });
});

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		mini_nav.style.diplay = "none";
        nav.style.backgroundColor = "white";
        document.body.style.overflow = "scroll";
	}
});