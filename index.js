const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

const headerMenuToggle = document.querySelector('.header__menu-toggle');
const navMenuToggle = document.querySelector('.nav__menu-toggle');

const navOptions = document.querySelectorAll(".nav__options")

const windowWidth = window.innerWidth;
let prevScrollpos = window.scrollY;

headerMenuToggle.addEventListener('click',() => {
  nav.classList.add('show');
  nav.style.top = "0";
})

navMenuToggle.addEventListener('click',() => nav.classList.remove('show'))

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
    if(prevScrollpos > currentScrollPos) {
      nav.style.top = "6rem";
      nav.classList.remove('show');
    } else if (innerWidth > 768){
      nav.style.top = "-4rem";
      nav.classList.remove('show');
    }
    prevScrollpos = currentScrollPos;
  } 
  else if(innerWidth < 768){
    if(prevScrollpos > currentScrollPos) {
      header.style.top = "0";
    } else {
      header.style.top = "-6rem";
    }
    prevScrollpos = currentScrollPos;
  }
}


const year = document.getElementById('year')
  
const thisYear = new Date().getFullYear();

year.innerText = thisYear;