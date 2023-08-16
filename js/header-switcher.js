(() => {
    const switcher = document.querySelector(".js-header-lang-container");
    const arrowClose = document.querySelector(".js-header-close-lang");
    const arrowOpen = document.querySelector(".js-header-open-lang");

    const arrowUp = document.querySelector(".header-arrow_up");
    const arrowDown = document.querySelector(".header-arrow_down");

    const ukranianFlag = document.querySelector("#u");
    const polandFlag = document.querySelector("#p");
    const rusFlag = document.querySelector("#r");
    const americanFlag = document.querySelector("#a");
    const currentCountry = document.querySelector(".js-header-current-lang");

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
      const currentFlag = document.querySelector(".js-header-current-lang svg");
      
      const selectedFlagContent = selectedFlag.innerHTML;
      const currentFlagContent = currentFlag.innerHTML;
      
      selectedFlag.innerHTML = currentFlagContent;
      currentFlag.innerHTML = selectedFlagContent;
      toggleMenu();
      };

    ukranianFlag.addEventListener('click', () => {
        handleFlagClick('u');
    });

    polandFlag.addEventListener('click', () => {
        handleFlagClick('p');
    });

    rusFlag.addEventListener('click', () => {
        handleFlagClick('r');
    });

    americanFlag.addEventListener('click', () => {
        handleFlagClick('a');
    });

})();
