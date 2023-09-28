// /* show-menu */
// const showMenu = (toggleId, navId) => {
//   const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId);
//   hum = document.getElementsByClassName("hamburger");
//   if (toggle && nav && hum) {
//     toggle.addEventListener("click", () => {
//       nav.classList.toggle("show-menu");
//       hum.classList.add("open");
//     });
//   }
// };
// showMenu("nav_toggle", "nav_menu");

// /* remove-menu */
// const navLink = document.querySelectorAll(".nav-link");

// function linkAction() {
//   const navMenu = document.getElementById("nav_menu");
//   navMenu.classList.remove("show-menu");
// }
// navLink.forEach((n) => n.addEventListener("click", linkAction));


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("open");
  navMenu.classList.toggle("open");

})
const navLink = document.querySelectorAll(".nav-link").forEach((n) => n.addEventListener('click',()=>{
  hamburger.classList.remove("open");
  navMenu.classList.remove("open");
}));

const activePage = window.location.pathname;
// console.log(activePage)
const navLinks = document.querySelectorAll(".nav-list a").forEach((link) => {
  // console.log(link.href)
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});
