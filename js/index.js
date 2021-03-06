const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM\n Is\n Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ancors = document.querySelectorAll("header nav a");
ancors.forEach((item, i) => item.textContent = siteContent["nav"][`nav-item-${i}`]);

let ctah1 = document.querySelector(".cta-text h1");
ctah1.textContent = siteContent["cta"]["h1"];

let ctabtn = document.querySelector(".cta-text button");
ctabtn.textContent = siteContent["cta"]["button"];

let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let topContentH4 = document.querySelectorAll(".top-content .text-content h4");
topContentH4[0].textContent = siteContent["main-content"]["features-h4"];
topContentH4[1].textContent = siteContent["main-content"]["about-h4"];

let topContentP = document.querySelectorAll(".top-content .text-content p");
topContentP[0].textContent = siteContent["main-content"]["features-content"];
topContentP[1].textContent = siteContent["main-content"]["about-content"];

let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottomContentH4 = document.querySelectorAll(".bottom-content .text-content h4");
bottomContentH4[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentH4[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentH4[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomContentP = document.querySelectorAll(".bottom-content .text-content p");
bottomContentP[0].textContent = siteContent["main-content"]["services-content"];
bottomContentP[1].textContent = siteContent["main-content"]["product-content"];
bottomContentP[2].textContent = siteContent["main-content"]["vision-content"];

let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

let copyright = document.querySelector("footer p");
copyright.textContent = siteContent["footer"]["copyright"];

//added new content
ancors.forEach((item) => item.style.color = 'green');

let nav = document.querySelector("header nav");
let el1 = document.createElement('a');
let el2 = document.createElement('a');
el1.textContent = 'Child';
el2.textContent = 'Child';
nav.appendChild(el1);
nav.prepend(el2);

//styling
let cta = document.querySelector(".cta");
cta.setAttribute("style", "display:flex; justify-content:flex-end");
// cta.style.display = "flex";
// cta.style.justifyContent = "flex-end";
console.log(cta)

let contact = document.querySelector(".contact");
contact.setAttribute("style", "display:flex; flex-direction: column; align-items: center;");


ctah1.style.color = "blue";