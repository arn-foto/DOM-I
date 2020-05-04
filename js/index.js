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
    "h1": "DOM Is Awesome",
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
logo.setAttribute('src', siteContent["nav"]["img-src"])


//I used the querySelector method to return the first Element within the document 
// that matches the element im looking for. 
let anchorTag = document.querySelectorAll('a');


anchorTag.forEach(item => item.style.color = 'green');

const anchorTagAuto = siteContent[Object.keys(siteContent)[0]];

// I used a for loop to go through the index of "anchortag" and returned to whole length of it
for (let i = 0; i < anchorTag.length; i++) {
  anchorTag[i].textContent = anchorTagAuto[Object.keys(anchorTagAuto)[i]];
};

// used a style to scale navigation links when mouse is hovered over it
const navContainer = document.querySelector('nav');
navContainer.addEventListener("mouseenter", () => {
  navContainer.style.transform = "scale(1.2)"
  navContainer.style.transition = "all 0.3s"
})
navContainer.addEventListener("mouseleave", (event) => {
  event.target.style.transform = "scale(1)"
})

let middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

//https://www.w3schools.com/jsref/dom_obj_all.asp for DOM elements
// used a style to scale image up when mouse hovers over it
middleImg.addEventListener("mouseenter", () => {
  middleImg.style.transform = "scale(1.2)"
  middleImg.style.transition = "all 0.3s"
})
// used a style to scale back down
middleImg.addEventListener("mouseleave", (event) => {
  event.target.style.transform = "scale(1)"
})