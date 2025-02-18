
document.addEventListener("DOMContentLoaded", function () {
    let myCarousel = document.querySelector("#heroCarousel");
    let carousel = new bootstrap.Carousel(myCarousel, {
      interval: 3000,
      wrap: true,
    });
  

    document.querySelector(".carousel-control-prev").addEventListener("click", function () {
      carousel.prev();
    });
  
    document.querySelector(".carousel-control-next").addEventListener("click", function () {
      carousel.next();
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    let dropdown = document.getElementById("coursesDropdown");
    if (dropdown) {
      dropdown.addEventListener("click", function(event) {
        event.preventDefault();
        this.nextElementSibling.classList.toggle("show");
      });
    }
  
    document.addEventListener("click", function(event) {
      let isDropdown = dropdown && dropdown.contains(event.target);
      let dropdownMenu = document.querySelector(".dropdown-menu");
  
      if (!isDropdown && dropdownMenu) {
        dropdownMenu.classList.remove("show");
      }
    });

    let exploreButton = document.querySelector(".btn-light");
    if (exploreButton) {
      exploreButton.addEventListener("click", function() {
        alert("Redirecting to courses!");

      });
    }
  });
  