(() => {
    const switcher = document.querySelector(".js-lang-container")
    const arrowClose = document.querySelector(".js-close-lang")
    const arrowOpen = document.querySelector(".js-open-lang")

   const arrowUp =document.querySelector(".arrow_white_up")
   const arrowDown = document.querySelector(".arrow_white_down")

   const ukranianNumber = document.querySelector("#ukr")
   const polandNumber = document.querySelector("#pld")
   const rusNumber =  document.querySelector("#rus")
   const americanNumber =  document.querySelector("#usa")
   const currentCountry = document.querySelector(".js-current-lang")

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

      const updateFlagAndNumber = (flagId) => {
        currentCountry.innerHTML = document.querySelector(`#${flagId}`).outerHTML;
    };

  
    const handleFlagClick = (flagId) => {
      updateFlagAndNumber(flagId);
      
      toggleMenu();
  };

    ukranianNumber.addEventListener('click', () => {
        handleFlagClick('ukr');
    });

    polandNumber.addEventListener('click', () => {
        handleFlagClick('pld');
    });

    rusNumber.addEventListener('click', () => {
        handleFlagClick('rus');
    });

    americanNumber.addEventListener('click', () => {
        handleFlagClick('usa');
    });
   
})()