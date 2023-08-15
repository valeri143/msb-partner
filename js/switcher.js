(() => {
    const switcher = document.querySelector(".js-lang-container");
    const arrowClose = document.querySelector(".js-close-lang");
    const arrowOpen = document.querySelector(".js-open-lang");

    const arrowUp = document.querySelector(".arrow_white_up");
    const arrowDown = document.querySelector(".arrow_white_down");

    const ukranianFlag = document.querySelector("#ukr");
    const polandFlag = document.querySelector("#pld");
    const rusFlag = document.querySelector("#rus");
    const americanFlag = document.querySelector("#usa");
    const currentCountry = document.querySelector(".js-current-lang");

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

    const updateFlag = (flagId) => {
        currentCountry.innerHTML = document.querySelector(`#${flagId}`).outerHTML;
    };

    const handleFlagClick = (flagId) => {
      const selectedFlag = document.querySelector(`#${flagId}`);
      const currentFlag = document.querySelector(".js-current-lang svg");
      
      const selectedFlagContent = selectedFlag.innerHTML;
      const currentFlagContent = currentFlag.innerHTML;
      
      selectedFlag.innerHTML = currentFlagContent;
      currentFlag.innerHTML = selectedFlagContent;
      
      const selectedFlagNumberElement = selectedFlag.querySelector(".contacts-form-icon-lang-number");
      const currentFlagNumberElement = currentFlag.querySelector(".contacts-form-icon-lang-number");
      
      
      toggleMenu();
      };

    ukranianFlag.addEventListener('click', () => {
        handleFlagClick('ukr');
    });

    polandFlag.addEventListener('click', () => {
        handleFlagClick('pld');
    });

    rusFlag.addEventListener('click', () => {
        handleFlagClick('rus');
    });

    americanFlag.addEventListener('click', () => {
        handleFlagClick('usa');
    });

})();
