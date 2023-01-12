let changeBackgroundButton = document.querySelector(
  ".js-navigation__listItem--changeBackgroundButton"
);
let body = document.querySelector(".js-body");
let nextColorName = document.querySelector(".js-navigation__nextColorName");

changeBackgroundButton.addEventListener("click", () => {
  body.classList.toggle("body--brightBackground");
  nextColorName.innerText = body.classList.contains("body--brightBackground")
    ? "CIEMNY"
    : "JASNY";
});

// if (document.body.classList.contains("brightBackground")) {
//   changeBackgroundButton.innerText = "ciemny motyw";
// } else {
//    changeBackgroundButton.innerText = "jasny motyw";
// }
