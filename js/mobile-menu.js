(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const body = document.body; // Получаем ссылку на <body>
  
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (mobileMenu.classList.contains("is-open")) {
      openMenuBtn.classList.add("hidden");
      closeMenuBtn.classList.remove("hidden");
      body.style.overflow = 'hidden'; // Запрещаем скролл на всем сайте
      mobileMenu.style.overflow = 'auto'; 
    } else {
      openMenuBtn.classList.remove("hidden");
      closeMenuBtn.classList.add("hidden");
      body.style.overflow = ''; // Восстанавливаем стандартное поведение скролла
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
    body.style.overflow = ''; // Восстанавливаем стандартное поведение скролла при изменении ориентации
    mobileMenu.style.overflow = ''; 
  });
})();


