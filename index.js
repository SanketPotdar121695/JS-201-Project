let navbar = document.querySelector('#nav');

window.addEventListener('scroll', (e) => {

    if (window.scrollY > 10) {
        navbar.style.backgroundColor = "#fff"
    } else if (window.scrollY < 10) {
        navbar.style.backgroundColor = "#ffe01b"
    }

});

let slider=document.getElementById('slider')
let opt=document.querySelectorAll('.otp')
console.log(opt)
opt.forEach((el)=>{
    el.addEventListener("mouseover",function(){
        slider.style.display='block'
        console.log(slider)
    })
    el.addEventListener("click",function(){
        slider.style.display='none'
    })
})
console.log("hi")

