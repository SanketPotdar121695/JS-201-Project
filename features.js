
let navbar = document.querySelector('header');

window.addEventListener('scroll', (e) => {
  
    if(window.scrollY>10){
       navbar.style.backgroundColor = "white"
    }else if(window.scrollY<10){
        navbar.style.backgroundColor = "#f9e0fa"
    }
    console.log(window.scrollY);
    
})