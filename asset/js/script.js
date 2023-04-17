const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

function autoSlide() {
  slidesContainer.scrollLeft = slideIndex * slideWidth;
  slideIndex++;
  if (slideIndex * slideWidth >= slidesContainer.scrollWidth) {
    slideIndex = 0;
  }
}

let slideInterval = setInterval(autoSlide, 3000); // Change 3000 to the interval you want in milliseconds

nextButton.addEventListener("click", () => {
  clearInterval(slideInterval); // Stop auto slide on button click
  slidesContainer.scrollLeft += slideWidth;
  slideIndex++;
  if (slideIndex * slideWidth >= slidesContainer.scrollWidth) {
    slideIndex = 0;
  }
  slideInterval = setInterval(autoSlide, 3000); // Restart auto slide after button click
});

prevButton.addEventListener("click", () => {
  clearInterval(slideInterval); // Stop auto slide on button click
  slidesContainer.scrollLeft -= slideWidth;
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = Math.floor(slidesContainer.scrollWidth / slideWidth) - 1;
  }

slideInterval = setInterval(autoSlide, 3000); // Restart auto slide after button click
});





