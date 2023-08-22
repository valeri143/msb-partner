(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const body = document.body; 
  
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (mobileMenu.classList.contains("is-open")) {
      openMenuBtn.classList.add("hidden");
      closeMenuBtn.classList.remove("hidden");
      body.style.overflow = 'hidden'; 
      mobileMenu.style.overflow = 'auto'; 
    } else {
      openMenuBtn.classList.remove("hidden");
      closeMenuBtn.classList.add("hidden");
      body.style.overflow = ''; 
      mobileMenu.style.overflow = ''; 
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    body.style.overflow = ''; 
    mobileMenu.style.overflow = ''; 
  });

  // Close the mobile menu when clicking on a menu link 
  const menuLinks = mobileMenu.querySelectorAll('.footer-link');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('is-open')) {
        toggleMenu();
      }
    });
  });
})();



const contactForm = document.getElementById("contact-form");
const submitSuccess = document.getElementById("submit-success");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    contactForm.classList.add("display-hidden");
    submitSuccess.classList.remove("display-hidden");
});

const cookieBox = document.querySelector(".js-cookie-box")
 const cookieCloseBtn = document.querySelector(".js-close-cookie-button")

cookieCloseBtn.addEventListener("click", function(){
  cookieBox.classList.add("cookie-hidden")
})

window.addEventListener('scroll', function() {
    var header = document.querySelector('.icon-flexbox');
    var headerNav = document.querySelector('.header-nav');

    var headerHeight = header.offsetHeight;
    
    if (window.scrollY >= headerHeight) {
        headerNav.classList.add('sticky-header');
    } else {
        headerNav.classList.remove('sticky-header');
    }
});

// HEADER NAV

const navLinks = document.querySelectorAll('.header-nav-list-flex a');
const menuNavLinks = document.querySelectorAll('.hamburger-menu-nav-list a');

function navCurrentLink (event, link) {

  event.preventDefault();

  const targetId = link.getAttribute('href');

  document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
  });
 
  navLinks.forEach(link => {
      link.classList.remove('hamburger-menu-current-link');
  });
  menuNavLinks.forEach(link => {
    link.classList.remove('hamburger-menu-current-link');
});

  link.classList.add('hamburger-menu-current-link');
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => navCurrentLink(e, link));
});

menuNavLinks.forEach(link => {
  link.addEventListener('click', (e) => navCurrentLink(e, link));
});

