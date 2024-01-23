
  
  // NAV BAR  
  
  function toggleMobileMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    var mobileMenuContainer = document.querySelector('.mobile-menu-container');
    mobileMenu.classList.toggle('show');
    mobileMenuContainer.style.display = mobileMenu.classList.contains('show') ? 'block' : 'none';
  }

  function closeMobileMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    var mobileMenuContainer = document.querySelector('.mobile-menu-container');
    mobileMenu.classList.remove('show');
    mobileMenuContainer.style.display = 'none';
  }

 

  



    // Restaurant Category Filters
    function filterCategory(category) {
      const cards = document.querySelectorAll('.restaurantCard');
  
      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
  
        if (category === 'all' || category === cardCategory) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }
      // Restaurant Category Filter Horizontal Scroll
  var locationBar = document.getElementById('locationBar');
  var prevScrollPos = window.pageYOffset;

  window.addEventListener('scroll', function() {
    var currentScrollPos = window.pageYOffset;

    // Scroll-up effect
    if (prevScrollPos > currentScrollPos || currentScrollPos < 50) {
      locationBar.classList.remove('scroll-up');
    } else {
      locationBar.classList.add('scroll-up');
    }

    prevScrollPos = currentScrollPos;
  });








  //Closed Restaurant Pop Up
  function showPopup() {
    document.getElementById("popup-container").style.display = "flex";
}

function hidePopup() {
    document.getElementById("popup-container").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("popup-container").addEventListener("click", function (event) {
        if (event.target.id === "popup-container") {
            hidePopup();
        }
    });
});












document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");

  carousel.addEventListener("scroll", function () {
    if (carousel.scrollLeft === carousel.scrollWidth - carousel.clientWidth) {
      // Smoothly scroll back to the beginning when reaching the end
      carousel.scrollTo({
        left: 0,
        behavior: "smooth"
      });
    }
  });
});

  