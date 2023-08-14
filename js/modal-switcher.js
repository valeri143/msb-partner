(() => {
    const switcher = document.querySelector(".js-modal-lang-container")
    const arrowClose = document.querySelector(".js-modal-close-lang")
    const arrowOpen = document.querySelector(".js-modal-open-lang")

   const arrowUp =document.querySelector(".modal-arrow_up")
   const arrowDown = document.querySelector(".modal-arrow_down")

   const ukranianNumber = document.querySelector("#u")
   const polandNumber = document.querySelector("#p")
   const rusNumber =  document.querySelector("#r")
   const americanNumber =  document.querySelector("#a")
   const numberSwitcher = document.querySelector(".js-modal-number-switcher")
   const currentCountry = document.querySelector(".js-modal-current-lang")

    
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
    handleFlagClick('u', '+380');
});

polandNumber.addEventListener('click', () => {
    handleFlagClick('p', '+48');
});

rusNumber.addEventListener('click', () => {
    handleFlagClick('r', '+7');
});

americanNumber.addEventListener('click', () => {
    handleFlagClick('a', '+1');
});

})()