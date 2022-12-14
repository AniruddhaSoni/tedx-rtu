const menuBtn = document.querySelectorAll(".menuBtn");
const menu = document.querySelector(".menu");
const header = document.querySelector("header");
const menuItems = document.querySelectorAll(".navEle");

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 0) {
    header.classList.add("bg-blur");
    header.classList.add("padding");
  }
  if (window.scrollY <= 0) {
    // header.classList.remove("bg-blur");
    header.classList.remove("padding");
  }
});

menuBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      menu.classList.add("hide");
    } else {
      menu.classList.remove("hide");
      menu.classList.add("show");
    }

    console.log("clicked");
  });
});
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});
