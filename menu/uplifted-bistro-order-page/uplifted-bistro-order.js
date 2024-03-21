
  
  
  // NAV BAR FUNCTION START (...)
  
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

  // NAV BAR FUNCTION START (...)






      // Location Bar Size
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
  });    // Location Bar Size
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
