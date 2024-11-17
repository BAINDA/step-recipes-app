"use strict";

const /** {NodeElement} */ $HTML = document.documentElement;
const /** {Boolean} */ isDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "light";
}

let /** {Boolean} */ isPressed = false;

const changeTheme = function () {
  isPressed = isPressed ? false : true;
  this.setAttribute("aria-pressed", isPressed);
  $HTML.setAttribute(
    "data-theme",
    $HTML.dataset.theme === "light" ? "dark" : "light"
  );
  sessionStorage.setItem("theme", $HTML.dataset.theme);
  updateElementColors();
};

const updateElementColors = function () {
  const elements = document.querySelectorAll(
    ".display-large, .label-medium, .label-large, span.label-medium"
  );
  elements.forEach((element) => {
    if ($HTML.dataset.theme === "dark") {
      element.style.color = "white";
    } else {
      element.style.color = "black";
    }
  });

  const btnPrimary = document.querySelector(".btn-primary");
  if (btnPrimary) {
    if ($HTML.dataset.theme === "dark") {
      btnPrimary.style.backgroundColor = "white";
      btnPrimary.style.color = "black"; // Ensure text is visible
      btnPrimary.addEventListener("mouseover", handleMouseOver);
      btnPrimary.addEventListener("mouseout", handleMouseOut);
    } else {
      btnPrimary.style.backgroundColor = "";
      btnPrimary.style.color = ""; // Reset to default
      btnPrimary.removeEventListener("mouseover", handleMouseOver);
      btnPrimary.removeEventListener("mouseout", handleMouseOut);
    }
  }
};

const handleMouseOver = function () {
  this.style.backgroundColor = "#3863ff";
};

const handleMouseOut = function () {
  this.style.backgroundColor = "white";
};

window.addEventListener("load", function () {
  const /** {NodeElement} */ $themeBtn =
      document.querySelector("[data-theme-btn]");

  $themeBtn.addEventListener("click", changeTheme);
  updateElementColors();
});
