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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent['cta']['img-src'];

const nav = document.querySelectorAll('a');
nav.forEach((element, index) => {
  element.textContent = siteContent['nav'][`nav-item-${index + 1}`]; 
  element.style.color ="green"; 
});

let newContent = document.createElement('a');
newContent.textContent ="Blog";
newContent.style.display = "inherit";
newContent.style.color = 'green';
nav[5].appendChild(newContent);

let newNav = document.createElement('a');
newNav.textContent = "Login";
newNav.style.color = 'green';
newNav.style.display = "inherit";
nav[0].prepend(newNav);



const ctaHeading = document.querySelector('h1');
ctaHeading.textContent = siteContent.cta.h1;
ctaHeading.style.width = "170px";
ctaHeading.style.marginRight = "150px";
ctaHeading.style.color = "#186C17"

const header = document.querySelector('header');
header.style.background = "#08CBFA";



const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];
ctaButton.style.background = "#186C17";
ctaButton.style.marginRight = "100px";
ctaButton.style.color ="white";

const textHeading = document.querySelectorAll('h4');
textHeading[0].textContent = siteContent["main-content"]["features-h4"];
textHeading[1].textContent = siteContent['main-content']['about-h4'];
textHeading[2].textContent = siteContent['main-content']['services-h4'];
textHeading[3].textContent = siteContent['main-content']['product-h4'];
textHeading[4].textContent = siteContent['main-content']['vision-h4'];



const featText = document.querySelectorAll('p');
featText[0].textContent = siteContent['main-content']["features-content"];
featText[1].textContent = siteContent['main-content']["about-content"];
featText[2].textContent = siteContent['main-content']["services-content"];
featText[3].textContent = siteContent['main-content']["product-content"];
featText[4].textContent = siteContent['main-content']["vision-content"];



// const contentHeading = document.querySelectorAll('h4');
// contentHeading.forEach((element, index) => 
//   element.textContent = siteContent['main-content'][`${index + 1}-h4`]
// );

//
// featText.forEach((el, index) => {
//   el.textContent = siteContent['main-content'][`${index + 1}`];
// });

const contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = siteContent['contact']['contact-h4'];

const info = document.querySelectorAll('.contact p');
info[0].textContent = siteContent['contact']['address'];
info[1].textContent = siteContent['contact']['phone'];
info[2].textContent = siteContent['contact']['email'];

const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];