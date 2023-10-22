const nav = document.querySelector('.nav');
const headerMenuToggle = document.querySelector('.header__menu-toggle');
const navMenuToggle = document.querySelector('.nav__menu-toggle');

const navOptions = document.querySelectorAll(".nav__options")

headerMenuToggle.addEventListener('click',() => {
  nav.classList.add('show')
  nav.style.top = "0";
})

navMenuToggle.addEventListener('click',() => nav.classList.remove('show'))

navOptions.forEach(option => option.addEventListener('click',() => {
  console.log(event.target);
  nav.classList.remove('show')
}))

document.body.addEventListener("click", (event) => {
  if (!nav.contains(event.target) && event.target !== headerMenuToggle && !event.target.classList.contains('nav__options')) {
    nav.classList.remove('show');
    console.log(event.target);
  }
});

const windowWidth = window.innerWidth;
let prevScrollpos = window.scrollY;

window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  
  if(innerWidth >= 768) {
    if(prevScrollpos > currentScrollPos) {
      nav.style.top = "6rem";
    } else if (innerWidth > 768){
      nav.style.top = "-4rem";
    }
    prevScrollpos = currentScrollPos;
  } 
  // else if(innerWidth < 768){
    nav.style.top = "0";
  // }
}

const year = document.getElementById('year')
  
const thisYear = new Date().getFullYear();

year.innerText = thisYear;