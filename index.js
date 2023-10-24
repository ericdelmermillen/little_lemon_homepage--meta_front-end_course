const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

const headerMenuToggle = document.querySelector('.header__menu-toggle');
const navMenuToggle = document.querySelector('.nav__menu-toggle');

const navOptions = document.querySelectorAll(".nav__options");

const windowWidth = window.innerWidth;
let prevScrollPos = window.scrollY;

window.onload = function() {
  setTimeout(() => {
    window.scrollTo(0, 1000)}, 1000);
};


headerMenuToggle.addEventListener('click',() => {
  nav.classList.add('show');
  nav.style.top = "0";
})


navMenuToggle.addEventListener('click',() => nav.classList.remove('show'));

navOptions.forEach(option => option.addEventListener('click',() => {
  nav.classList.remove('show');
}))

document.body.addEventListener("click", (event) => {
  if (!nav.contains(event.target) && event.target !== headerMenuToggle && !event.target.classList.contains('nav__options')) {
    nav.classList.remove('show');
  }
});

window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  nav.style.top = "0";
  
  if(innerWidth >= 768) {
    nav.style.height = '4rem';
    if(prevScrollPos > currentScrollPos) {
      nav.style.top = "6rem";
    } else if (innerWidth > 768){
      nav.style.top = "-4rem";
    }
    prevScrollPos = currentScrollPos;
  } 
  else if(innerWidth < 768){
    nav.style.height = '100vh';
    if(prevScrollPos > currentScrollPos) {
      header.style.top = "0";
    } else {
      header.style.top = "-6rem";
    }
    prevScrollPos = currentScrollPos;
  }
}

window.addEventListener('resize', () => {
  if(innerWidth < 768) {
    nav.style.height = '100dvh';
    nav.style.top = "0";
  } else if (innerWidth >= 768) {
    nav.style.height = "4rem";
    nav.style.top = "-2rem";
    nav.classList.remove('show')
  }
});

const year = document.getElementById('year');
  
const thisYear = new Date().getFullYear();

year.innerText = thisYear;


