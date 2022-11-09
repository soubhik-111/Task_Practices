const navHeading = document.getElementsByClassName("navHeading")[0];
const navText = document.getElementsByClassName("navText")[0];
const navTask = document.getElementsByClassName("navTask")[0];
const navContainer = document.getElementsByClassName("navContainer")[0];
const navEmpty = document.getElementsByClassName("navEmpty")[0];
const navBar = () => {
  if (navText.style.display == "none") {
    navText.style.display = "flex";
    navTask.style.display = "block";
    navContainer.style.maxWidth = "19vw";
    navHeading.style.maxWidth = "19vw";
    navEmpty.style.display = "none";

  } else {
    navText.style.display = "none";
    navTask.style.display = "none";
    navContainer.style.maxWidth = "6vw";
    navEmpty.style.display="block"
  }
};
