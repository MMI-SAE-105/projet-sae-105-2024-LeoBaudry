
const carousel2 = document.querySelector(".carousel2__container");
const prevButton2 = document.querySelector(".carousel2__button--prev");
const nextButton2 = document.querySelector(".carousel2__button--next");

const premierItem2 = document.querySelector(".carousel2__item");
const scrollAmount2 = premierItem2.clientWidth;

// Largeur de défilement d’un item
if (carousel2) {
  prevButton2.addEventListener("click", () => {
    carousel2.scrollBy({
        left: -scrollAmount2,
        behavior: "smooth",
    });
  });

  // Scroll au clic sur le bouton suivant
  nextButton2.addEventListener("click", () => {
    carousel2.scrollBy({
      left: scrollAmount2,
      behavior: "smooth",
    });
  });
}