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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// used a style to scale navigation links when mouse is hovered over it
const navContainer = document.querySelector('nav');
navContainer.addEventListener("mouseenter", () => {
  navContainer.style.transform = "scale(1.2)"
  navContainer.style.transition = "all 0.3s"
})
navContainer.addEventListener("mouseleave", (event) => {
  event.target.style.transform = "scale(1)"
})

//I used the querySelector method to return the first Element within the document 
// that matches the element im looking for. 
let anchorTag = document.querySelectorAll('a');


anchorTag.forEach(item => item.style.color = 'green');

const anchorTagAuto = siteContent[Object.keys(siteContent)[0]];

// anchorTag[0].innerText = siteContent.nav['nav-item-1'];
// anchorTag[1].innerText = siteContent.nav['nav-item-2'];
// anchorTag[2].innerText = siteContent.nav['nav-item-3'];
// anchorTag[3].innerText = siteContent.nav['nav-item-4'];
// anchorTag[4].innerText = siteContent.nav['nav-item-5'];
// anchorTag[5].innerText = siteContent.nav['nav-item-6'];


// I used a for loop to go through the index of "anchortag" and returned to whole length of it
for (let i = 0; i < anchorTag.length; i++) {
  anchorTag[i].textContent = anchorTagAuto[Object.keys(anchorTagAuto)[i]];
};

// selected element and added "join" to navigation
let appendAnchor = document.createElement('a');
appendAnchor.textContent = 'Join';
appendAnchor.style.color = 'green';
// append is used for addining elements to the beginning of an index
const newNavItem = document.querySelector('nav');
newNavItem.append(appendAnchor);
// selected element and added "Log In" to navigation
let prependAnchor = document.createElement('a');
prependAnchor.textContent = 'Log In';
prependAnchor.style.color = 'green';
//Prepend is used for addining elements to the end of the index
newNavItem.prepend(prependAnchor);
// i used a style tag to alter the background color into pink
const tester = document.querySelector('.cta');
tester.style.backgroundColor = 'pink';

let title = document.querySelector('h1');
title.innerHTML = siteContent.cta.h1;

let btn = document.querySelector('button');
btn.innerText = siteContent.cta.button;
btn.addEventListener("mouseenter", () => {
  btn.style.transform = "scale(1.5)"
  btn.style.transition = "all 0.3s"

})
// used a style to scale button when mouse is hovered over it
btn.addEventListener("mouseleave", (event) => {
  event.target.style.transform = "scale(1)"
})

let headerImg = document.querySelector('#cta-img');
headerImg.src = siteContent.cta['img-src'];
headerImg.addEventListener("mouseenter", () => {
  headerImg.style.transform = "scale(1.2)"
  headerImg.style.transition = "all 0.3s"
})
// used a style to scale image when mouse is hovered over it
headerImg.addEventListener("mouseleave", (event) => {
  event.target.style.transform = "scale(1)"
})

let mainContent = document.querySelector('#main-content');

let topContent = document.querySelector('.top-content');

let topContentItems = topContent.querySelectorAll('.text-content');
let featuresH4 = topContentItems[0].querySelector('h4');
let featuresP = topContentItems[0].querySelector('p');
featuresH4.innerText = siteContent['main-content']['features-h4'];
featuresP.innerText = siteContent['main-content']['features-content'];

let aboutH4 = topContentItems[1].querySelector('h4');
let aboutP = topContentItems[1].querySelector('p');
aboutH4.innerText = siteContent['main-content']['about-h4'];
aboutP.innerText = siteContent['main-content']['about-content'];

let middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];
middleImg.addEventListener("mouseenter", () => {
  middleImg.style.transform = "scale(1.2)"
  middleImg.style.transition = "all 0.3s"
})
// used a style to scale image when mouse is hovered over it
middleImg.addEventListener("mouseleave", (event) => {
  event.target.style.transform = "scale(1)"
})

let bottomContent = document.querySelector('.bottom-content');
let bottomContentItems = bottomContent.querySelectorAll('.text-content');
let servicesH4 = bottomContentItems[0].querySelector('h4');
console.log(servicesH4);
let servicesP = bottomContentItems[0].querySelector('p');
servicesH4.innerText = siteContent['main-content']['services-h4'];
servicesP.innerText = siteContent['main-content']['services-content'];

let productH4 = bottomContentItems[1].querySelector('h4');
let productP = bottomContentItems[1].querySelector('p');
productH4.innerText = siteContent['main-content']['product-h4'];
productP.innerText = siteContent['main-content']['product-content'];

let visionH4 = bottomContentItems[2].querySelector('h4');
let visionP = bottomContentItems[2].querySelector('p');
visionH4.innerText = siteContent['main-content']['vision-h4'];
visionP.innerText = siteContent['main-content']['vision-content'];

let contactInfo = document.querySelector('.contact');
let contactH4 = contactInfo.querySelector('h4');
contactH4.innerText = siteContent.contact['contact-h4'];

let contactInfoItems = contactInfo.querySelectorAll('p');
contactInfoItems[0].innerHTML = siteContent.contact.address;
contactInfoItems[1].innerText = siteContent.contact.phone;
contactInfoItems[2].innerText = siteContent.contact.email;

let foot = document.querySelector('footer');
let footP = foot.querySelector('p');
footP.innerText = siteContent.footer.copyright;