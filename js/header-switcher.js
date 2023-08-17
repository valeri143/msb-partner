(() => {
    const switcher = document.querySelector(".js-header-lang-container");
    const arrowClose = document.querySelector(".js-header-close-lang");
    const arrowOpen = document.querySelector(".js-header-open-lang");

    const arrowUp = document.querySelector(".header-arrow_up");
    const arrowDown = document.querySelector(".header-arrow_down");

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

    const switcherContent = {
        u: `
          <svg class="svg-counties" id="u" width="29" height="21">
              <use href="./images/sprite.svg#icon-ukr_lang"></use>
          </svg>
        `,
        p: `
          <svg class="svg-counties" id="p" width="29" height="21">
              <use href="./images/sprite.svg#icon-poland_lang"></use>
          </svg>
        `,
        r: `
          <svg class="svg-counties" id="r" width="29" height="21">
              <use href="./images/sprite.svg#icon-rus_lang"></use>
          </svg>
        `,
        a: `
          <svg class="svg-counties" id="a" width="29" height="21">
              <use href="./images/sprite.svg#icon-american_lang"></use>
          </svg>
        `
      };

    const handleFlagClick = (flagId) => {
        const selectedFlag = document.querySelector(`#${flagId}`);
        const currentFlag = document.querySelector(".js-header-current-lang");
        const currentFlagContent = currentFlag.innerHTML;

        selectedFlag.outerHTML = currentFlagContent;
        currentFlag.innerHTML = switcherContent[flagId];

        toggleMenu();
    };

    switcher.addEventListener('click', event => {
        const flagElement = event.target.closest('.icon-counties');
        if (flagElement) {
          const flagId = flagElement.id;
          handleFlagClick(flagId);
        }
      });

})();

