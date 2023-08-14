(() => {
    const switcher = document.querySelector(".js-languages-container")
    const arrowClose = document.querySelector(".js-close-code")
    const arrowOpen = document.querySelector(".js-open-code")

   const arrowUp =document.querySelector(".contacts-form-icon-arrow_up")
   const arrowDown = document.querySelector(".contacts-form-icon-arrow_down")

   const ukranianNumber = document.querySelector("#ua")
   const polandNumber = document.querySelector("#pl")
   const rusNumber =  document.querySelector("#ru")
   const americanNumber =  document.querySelector("#us")
   const numberSwitcher = document.querySelector(".js-number-switcher")
   const currentCountry = document.querySelector(".js-current")

    const toggleMenu = () => {
        const isMenuOpen =
          arrowOpen.getAttribute('aria-expanded') === 'true' || false;
        arrowOpen.setAttribute('aria-expanded', !isMenuOpen);
        switcher.classList.toggle('is-open');
  
        if(switcher.classList.contains("is-open")){
          arrowDown.classList.add("hidden") 
          arrowUp.classList.remove("hidden")
        }else{
         arrowUp.classList.add("hidden")
         arrowDown.classList.remove("hidden") 
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

      const updateFlagAndNumber = (flagId, countryCode) => {
        currentCountry.innerHTML = document.querySelector(`#${flagId}`).outerHTML;
        numberSwitcher.textContent = countryCode;
    };

  
    const handleFlagClick = (flagId, countryCode) => {
      updateFlagAndNumber(flagId, countryCode);
      
      position.appendChild(currentCountry); 

      toggleMenu();
  };

    ukranianNumber.addEventListener('click', () => {
        handleFlagClick('ua', '+380');
    });

    polandNumber.addEventListener('click', () => {
        handleFlagClick('pl', '+48');
    });

    rusNumber.addEventListener('click', () => {
        handleFlagClick('ru', '+7');
    });

    americanNumber.addEventListener('click', () => {
        handleFlagClick('us', '+1');
    });
   
})()