//Change button color

const introButton = document.querySelector(".intro-button");
const buttonLink = document.querySelector(".button-link");
const navLinks = document.querySelectorAll(".nav-link");

introButton.onmouseover = () => {
  buttonLink.style.color = "#18d26e";
};

introButton.onmouseleave = () => {
  buttonLink.style.color = "#fff";
};
