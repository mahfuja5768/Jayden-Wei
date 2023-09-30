//hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navMenu.classList.toggle("open");
});
const navLink = document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navMenu.classList.remove("open");
  })
);

//accordion
const accordionItems = document.querySelectorAll(".accordion_item");

accordionItems.forEach((item) => {
  const label = item.querySelector(".accordion_item_label");
  const icon = item.querySelector(".fa-angle-down");
  const content = item.querySelector(".accordion_item_content");

  label.addEventListener("click", () => {
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("open");
        otherItem.querySelector(".fa-angle-down").classList.remove("rotate");
        otherItem.querySelector(".accordion_item_content").style.display =
          "none";
      }
    });

    item.classList.toggle("open");
    icon.classList.toggle("rotate");
    content.style.display = item.classList.contains("open") ? "block" : "none";
  });
});

//footer current year
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
