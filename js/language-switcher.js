(() => {
  const switcher = document.querySelector(".js-languages-container");
  const arrowClose = document.querySelector(".js-close-code");
  const arrowOpen = document.querySelector(".js-open-code");

  const arrowUp = document.querySelector(".contacts-form-icon-arrow_up");
  const arrowDown = document.querySelector(".contacts-form-icon-arrow_down");
  
  const numberSwitcher = document.querySelector(".js-number-switcher");

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
    ua: `
      <svg class="svg-countries" id="ua" width="29" height="21">
          <use href="./images/sprite.svg#icon-ukr_lang"></use>
      </svg>
    `,
    pl: `
      <svg class="svg-countries" id="pl" width="29" height="21">
          <use href="./images/sprite.svg#icon-poland_lang"></use>
      </svg>
    `,
    ru: `
      <svg class="svg-countries" id="ru" width="29" height="21">
          <use href="./images/sprite.svg#icon-rus_lang"></use>
      </svg>
    `,
    us: `
      <svg class="svg-countries" id="us" width="29" height="21">
          <use href="./images/sprite.svg#icon-american_lang"></use>
      </svg>
    `
  };

  const switcherCode = {
    ua: "+380",
    pl: "+48",
    ru: "+7",
    us: "+1"
  };

  const handleFlagClick = (flagId) => {
    const selectedFlag = document.querySelector(`#${flagId}`);
    const currentFlag = document.querySelector(".js-current");
    const currentFlagContent = currentFlag.innerHTML;
 
    selectedFlag.outerHTML = currentFlagContent;
    currentFlag.innerHTML = switcherContent[flagId];
    numberSwitcher.textContent = switcherCode[flagId];
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

