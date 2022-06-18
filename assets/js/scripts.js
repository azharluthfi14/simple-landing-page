const date = new Date();
let time = date.getFullYear();
document.getElementById("dateYear").innerHTML = time;

const navbarMenu = document.getElementById("navbar-menu"),
  navbarOpen = document.getElementById("navbar-open"),
  navbarClose = document.getElementById("navbar-close");
if (navbarOpen) {
  navbarOpen.addEventListener("click", () => {
    navbarMenu.classList.add("show__menu");
  });
}

if (navbarClose) {
  navbarClose.addEventListener("click", () => {
    navbarMenu.classList.remove("show__menu");
  });
}

const headerId = document.getElementById("header");
window.onscroll = () => {
  if (window.scrollY > 50) {
    headerId.classList.add("header__shrink");
  } else {
    headerId.classList.remove("header__shrink");
  }
};

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((currentSection) => {
    const sectionHeight = currentSection.offsetHeight;
    const sectionTop = currentSection.offsetTop - 50;

    const sectionId = currentSection.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navbar__menu a[href*=" + sectionId + "]")
        .classList.add("active__link");
    } else {
      document
        .querySelector(".navbar__menu a[href*=" + sectionId + "]")
        .classList.remove("active__link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

const navLink = document.querySelectorAll(".navbar__link");

const linkAction = () => {
  const navMenu = document.getElementById("navbar-menu");
  navMenu.classList.remove("show__menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
