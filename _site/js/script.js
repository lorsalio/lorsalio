"use strict";

var themeToggleButton = document.querySelector(".theme-button");
var page = document.querySelector("html");
var darkThemeUse = localStorage.getItem("dark-theme");
if (themeToggleButton) {
  if (darkThemeUse === "true") {
    setDarkTheme();
  } else {
    setLightTheme();
  }
  themeToggleButton.addEventListener("click", switchTheme);
  function switchTheme() {
    darkThemeUse = localStorage.getItem("dark-theme");
    if (darkThemeUse !== "true") {
      setDarkTheme();
    } else if (darkThemeUse === "true") {
      setLightTheme();
    }
  }
  function setDarkTheme() {
    page.classList.add("dark-theme");
    themeToggleButton.classList.add("theme-button--active");
    localStorage.setItem("dark-theme", "true");
  }
  function setLightTheme() {
    page.classList.remove("dark-theme");
    themeToggleButton.classList.remove("theme-button--active");
    localStorage.setItem("dark-theme", "false");
  }
}
;
let shareButtons = document.querySelectorAll(".share__button");
if (shareButtons[0]) {
  let shareLists = document.querySelectorAll(".share__list");
  shareButtons.forEach((button, idx) => {
    button.addEventListener("click", e => {
      e.stopPropagation(); // предотвращаем всплытие события

      const isActive = button.classList.contains("share__button--active");

      // Закрываем все меню
      shareButtons.forEach((btn, i) => {
        btn.classList.remove("share__button--active");
        shareLists[i].classList.remove("share__list--active");
      });

      // Если кнопка не была активна, открываем её меню
      if (!isActive) {
        button.classList.add("share__button--active");
        shareLists[idx].classList.add("share__list--active");

        // Добавляем обработчики для закрытия
        document.addEventListener("click", closeShareList);
        window.addEventListener("keydown", closeShareList);
      }
    });
  });
  function closeShareList(e) {
    if (!e.target.closest(".share") || e.keyCode === 27) {
      shareButtons.forEach((button, idx) => {
        button.classList.remove("share__button--active");
        shareLists[idx].classList.remove("share__list--active");
      });
      document.removeEventListener("click", closeShareList);
      window.removeEventListener("keydown", closeShareList);
    }
  }
}

// let dropdownButtons = document.querySelectorAll(".dropdown__toggle");

// if(dropdownButtons[0]) {
//   let dropdownContents = document.querySelectorAll(".dropdown__list");
//   dropdownButtons.forEach(dropdownButton => {
//     dropdownButton.addEventListener("click", (e) => {
//       const currentButton = e.target;
//       const currentDropdownContent = currentButton.nextElementSibling;

//       dropdownButtons.forEach(el => {
//         if(el !== currentButton) {
//           el.classList.remove("dropdown__toggle--active");
//         }
//       });

//       dropdownContents.forEach(el => {
//         if(el !== currentDropdownContent) {
//           el.classList.remove("dropdown__list--active");
//         }
//       });

//       currentButton.classList.toggle("dropdown__toggle--active");
//       currentDropdownContent.classList.toggle("dropdown__list--active");

//       document.addEventListener("click", closeAllDropdowns);
//       window.addEventListener("keydown", closeAllDropdowns);
//     });
//   });

//   function closeAllDropdowns(e) {
//     if(!e.target.closest(".site-navigation__list") || e.keyCode === 27) {
//       for(let i = 0; i < dropdownButtons.length; i++) {
//         dropdownButtons[i].classList.remove("dropdown__toggle--active");
//         dropdownContents[i].classList.remove("dropdown__list--active");
//       }

//       document.removeEventListener("click", closeAllDropdowns);
//       window.removeEventListener("keydown", closeAllDropdowns);
//     }
//   }
// }
;
var dropdownButton = document.querySelector(".dropdown__button");
if (dropdownButton) {
  var dropdownContent = document.querySelector(".dropdown__content");
  dropdownButton.addEventListener("click", openDropdown);
  function openDropdown() {
    dropdownButton.classList.toggle("dropdown__button--active");
    dropdownContent.classList.toggle("dropdown__content--active");
  }
}
;
var footerYear = document.querySelector(".main-footer__year");
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}
;