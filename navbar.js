const toggleMenuButton = document.getElementById("toggle-menu");
const navMenu = document.getElementById("nav-menu");

const toggleMenu = () => {
  navMenu.classList.toggle("active");
};
// Function to bind event listeners
const bindEvents = () => {
  if (toggleMenuButton) {
    toggleMenuButton.addEventListener("click", toggleMenu);
  }
};

// Initialize event bindings and Owl Carousel after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  bindEvents();
  initializeOwlCarousel();
});
