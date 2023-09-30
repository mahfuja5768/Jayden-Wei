
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

// const activePage = window.location.pathname;
// // console.log(activePage)
// const navLinks = document.querySelectorAll(".nav-list a").forEach((link) => {
//   // console.log(link.href)
//   if (link.href.includes(`${activePage}`)) {
//     link.classList.add("active");
//   }
// });
