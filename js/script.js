{
  const body = document.querySelector(".js-body");
  const changeBackground = () => {
    body.classList.toggle("body--brightBackground");
  };

  const nextColorName = document.querySelector(".js-navigation__nextColorName");
  const changeText = () => {
    nextColorName.innerText = body.classList.contains("body--brightBackground")
      ? "CIEMNY"
      : "JASNY";
  };

  const init = () => {
    const changeBackgroundButton = document.querySelector(
      ".js-navigation__listItem--changeBackgroundButton"
    );
    changeBackgroundButton.addEventListener("click", changeBackground);
    changeBackgroundButton.addEventListener("click", changeText);
  };

  init();
}
