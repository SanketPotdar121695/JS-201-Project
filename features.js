
let navbar = document.querySelector('header');

window.addEventListener('scroll', (e) => {

    if (window.scrollY > 10) {
        navbar.style.backgroundColor = "white"
    } else if (window.scrollY < 10) {
        navbar.style.backgroundColor = "#f9e0fa"
    }

});

let img = document.querySelector('#video>img');
img.addEventListener('click', () => {

    let video = document.querySelector('#video');
    video.innerHTML = ""

    let a = document.createElement('iframe');
    a.src = "video1.mp4";

    video.append(a)
});

