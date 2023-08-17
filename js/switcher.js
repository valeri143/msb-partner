(() => {
    const switcher = document.querySelector(".js-lang-container");
    const arrowClose = document.querySelector(".js-close-lang");
    const arrowOpen = document.querySelector(".js-open-lang");

    const arrowUp = document.querySelector(".arrow_white_up");
    const arrowDown = document.querySelector(".arrow_white_down");

    const toggleMenu = () => {
        const isMenuOpen =
            arrowOpen.getAttribute('aria-expanded') === 'true' || false;
        arrowOpen.setAttribute('aria-expanded', !isMenuOpen);
        switcher.classList.toggle('is-open');

        if (switcher.classList.contains("is-open")) {
            arrowDown.classList.add("hidden");
            arrowUp.classList.remove("hidden");
        } else {
            arrowUp.classList.add("hidden");
            arrowDown.classList.remove("hidden");
        }
    };

    arrowOpen.addEventListener('click', toggleMenu);
    arrowClose.addEventListener('click', toggleMenu);

    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        switcher.classList.remove('is-open');
        arrowOpen.setAttribute('aria-expanded', false);
        bodyScrollLock.enableBodyScroll(document.body);
    });

    const switcherContent = {
        ukr: `
          <svg class="svg-countries hamburger-menu-icon-lang" id="ukr" width="29" height="21">
              <use href="./images/sprite.svg#icon-ukr_lang"></use>
          </svg>
        `,
        pld: `
          <svg class="svg-countries hamburger-menu-icon-lang" id="pld" width="29" height="21">
              <use href="./images/sprite.svg#icon-poland_lang"></use>
          </svg>
        `,
        rus: `
          <svg class="svg-countries hamburger-menu-icon-lang" id="rus" width="29" height="21">
              <use href="./images/sprite.svg#icon-rus_lang"></use>
          </svg>
        `,
        usa: `
          <svg class="svg-countries hamburger-menu-icon-lang" id="usa" width="29" height="21">
              <use href="./images/sprite.svg#icon-american_lang"></use>
          </svg>
        `
      };
    const handleFlagClick = (flagId) => {
      const selectedFlag = document.querySelector(`#${flagId}`);
      const currentFlag = document.querySelector(".js-current-lang");
      const currentFlagContent = currentFlag.innerHTML;
      
      selectedFlag.outerHTML = currentFlagContent;
      currentFlag.innerHTML = switcherContent[flagId];
      
      toggleMenu();
      };

    
      switcher.addEventListener('click', event => {
        const flagElement = event.target.closest('.svg-countries');
        if (flagElement) {
          const flagId = flagElement.id;
          handleFlagClick(flagId);
        }
      });

})();
