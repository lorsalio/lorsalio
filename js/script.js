"use strict";

var themeToggleButton = document.querySelector(".theme-button");
var page = document.querySelector("html");
var darkThemeUse = localStorage.getItem("dark-theme");

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
} // =====================================================


var slider = document.querySelector(".slider");

if (slider) {
  var swiper = new Swiper(slider, {
    spaceBetween: 10,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    }
  });
}

var dropdownButton = document.querySelector(".dropdown__button");
var dropdownContent = document.querySelector(".dropdown__content");

if (dropdownButton) {
  dropdownButton.addEventListener("click", openDropdown);
}

function openDropdown() {
  dropdownButton.classList.toggle("dropdown__button--active");
  dropdownContent.classList.toggle("dropdown__content--active");
  dropdownButton.setAttribute("aria-expanded", "true");

  if (dropdownButton.classList.contains("dropdown__button--active")) {
    dropdownButton.setAttribute("aria-expanded", "false");
  }
}