
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
    a.src = "./Media/video1.mp4";

    video.append(a)
});

let badus = document.querySelectorAll('.badu');
let chotus = document.querySelectorAll('.chotu');

let c = new Array(badus.length).fill(0);

for (let i = 0; i < badus.length; i++) {

    badus[i].addEventListener('click', () => {
        for (let j = 0; j < badus.length; j++) {
            chotus[j].style.display = "none";
        }
        chotus[i].style.display = "block";
        if (c[i]) {
            chotus[i].style.display = "none";
        }
        c[i] = !c[i]
    })
}

for (let i = 0; i < badus.length; i++) {
    let sp = document.ce
}

let plus = '<img class="expand_img" src="https://img.icons8.com/external-others-inmotus-design/452/external-Plus-basic-ui-elements-others-inmotus-design.png" alt=""></img>'

for (let i = 0; i < badus.length; i++) {
    badus[i].innerHTML += plus
}

let obj = [
    {
        image: 'https://eep.io/images/yzco4xsimv0y/3aRoYQUbwXqN573sIHHBBc/1ea8379eb21db1d819a382acec2bfba8/Integrations_CaseStudy_WooCommerce_GoodDyeYoung_RECIRC_1500x855-min.jpg?w=540&fm=webp&q=80',
        subject: 'CASE STUDY',
        title: 'How Good Dye Young Increased Their Monthly E-commerce Revenue by 305%',
        para: 'The hair dye company uses segments and Mailchimp’s WooCommerce integration to boost the relevance of their messaging and drive more sales.',
    },
    {
        image: 'https://eep.io/images/yzco4xsimv0y/6kdJ3uKUolitlvriKjoQZ6/9fe9d149cb039e8fbf556942b62a6303/Segmenting101-recirc.gif?w=540&fm=webp&q=80',
        subject: 'PRODUCT ADVICE',
        title: 'Targeting 101: A Beginner"s Guide to Segmentation',
        para: 'The hardest thing about ‘segmentation’ is the term itself—learn how to get started.',
    },
    {
        image: 'https://eep.io/images/yzco4xsimv0y/5M2jPA8RDaG8KqyqKscGwq/a8c4c1d73ea9740b6c6a9043ce2b618a/Tentpole-CRM.Article-Thumbnail_1520x855.jpg?w=540&fm=webp&q=80',
        subject: 'BUSINESS TIPS',
        title: '4 Simple Steps to Turn Customer Data into Targeted Campaigns That Sell More Stuff',
        para: 'How to use customer data—from email engagement to purchase history—to send more targeted campaigns in Mailchimp.',
    },
]

append(obj)
function append(obj) {

    obj.map((ele, i) => {

        let div = document.createElement('div');

        let img = document.createElement('img');
        let sub = document.createElement('p');
        let title = document.createElement('p');
        let para = document.createElement('p');

        img.src = ele.image;
        img.setAttribute('class', 'changeWindow')
        sub.innerText = ele.subject;
        title.innerText = ele.title;
        title.setAttribute('class', 'changeWindow1')
        para.innerText = ele.para;

        div.append(img, sub, title, para);
        document.querySelector('#container').append(div)
    })
}

let img_change = document.querySelectorAll('.changeWindow');
for (let i = 0; i < img_change.length; i++) {

    img_change[i].addEventListener('click', () => {

        if (i === 0) {
            window.location.href = "https://mailchimp.com/resources/good-dye-young-increased-monthly-ecommerce-revenue/"
        } else if (i === 1) {
            window.location.href = "https://mailchimp.com/resources/beginners-guide-to-segmentation/"
        } else {
            window.location.href = "https://mailchimp.com/4-steps-use-customer-data-to-sell-more-stuff/"
        }

    })
}

let title_change = document.querySelectorAll('.changeWindow1');

for (let i = 0; i < title_change.length; i++) {

    title_change[i].addEventListener('click', () => {

        if (i === 0) {
            window.location.href = "https://mailchimp.com/resources/good-dye-young-increased-monthly-ecommerce-revenue/"
        } else if (i === 1) {
            window.location.href = "https://mailchimp.com/resources/beginners-guide-to-segmentation/"
        } else {
            window.location.href = "https://mailchimp.com/4-steps-use-customer-data-to-sell-more-stuff/"
        }

    })
}

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
        nav.style.backgroundColor = "#f9e0fa";
    }
});

document.addEventListener("scroll", () => {
    
    if (window.scrollY === 0){
        document.getElementById("nav").style.backgroundColor = "#f9e0fa";
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
            nav.style.backgroundColor = "#f9e0fa";
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