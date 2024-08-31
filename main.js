// Constants for DOM elements
const heroCarousel = document.getElementById("hero-carousel");
const topMovieSlide = document.getElementById("top-movie-slide");
const movieSlides = document.querySelectorAll(".movie-slide");

// Function to initialize the Owl Carousel
const initializeOwlCarousel = () => {
  if (heroCarousel) {
    $(heroCarousel).owlCarousel({
      items: 1,
      dots: false,
      loop: true,
      nav: true,
      nav: false,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      mouseDrag: true,
      touchDrag: true,
    });
  }

  if (topMovieSlide) {
    $(topMovieSlide).owlCarousel({
      items: 2,
      dots: false,
      loop: true,
      nav: false, // Set this to false to hide the navigation arrows
      margin: 15,
      responsive: {
        500: {
          items: 3,
        },
        1280: {
          items: 4,
        },
        1600: {
          items: 6,
        },
      },
    });
  }

  // Initialize carousels for individual movie slides if needed
  movieSlides.forEach((slide) => {
    $(slide).owlCarousel({
      items: 2,
      dots: false,
      nav: true,
      margin: 15,
      navText: [
        "<i class='fa-solid fa-chevron-left'></i>",
        "<i class='fa-solid fa-chevron-right'></i>",
      ],
      responsive: {
        500: {
          items: 2,
        },
        1280: {
          items: 4,
        },
        1600: {
          items: 6,
        },
      },
    });
  });
};
