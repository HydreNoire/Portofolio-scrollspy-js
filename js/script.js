let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

// Apparition du menu
menu.addEventListener("click", showMenu);

function showMenu() {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
  document.body.classList.toggle("active");
}

// Gestion du scroll

window.onscroll = () => {
  if (window.innerWidth < 990) {
    menu.classList.remove("fa-times");
    header.classList.remove("active");
    document.body.classList.remove("active");
  }

  document.querySelectorAll("section").forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      document.querySelectorAll(".header .navbar a").forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
