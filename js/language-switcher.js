
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

  //   const toggleMenu = () => {
  //       const isMenuOpen =
  //         arrowOpen.getAttribute('aria-expanded') === 'true' || false;
  //       arrowOpen.setAttribute('aria-expanded', !isMenuOpen);
  //       switcher.classList.toggle('is-open');
  
  //       if(switcher.classList.contains("is-open")){
  //         arrowDown.classList.add("hidden") 
  //         arrowUp.classList.remove("hidden")
  //       }else{
  //        arrowUp.classList.add("hidden")
  //        arrowDown.classList.remove("hidden") 
  //       }
  
  //     };

      
  //     arrowOpen.addEventListener('click', toggleMenu);
  //     arrowClose.addEventListener('click', toggleMenu);
  
  
  //     window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  //       if (!e.matches) return;
  //       switcher.classList.remove('is-open');
  //       arrowOpen.setAttribute('aria-expanded', false);
  //       bodyScrollLock.enableBodyScroll(document.body);
  //     });

  //     const updateFlagAndNumber = (flagId, countryCode) => {
  //       currentCountry.innerHTML = document.querySelector(`#${flagId}`).outerHTML;
  //       numberSwitcher.textContent = countryCode;
  //   };

  
  //   const handleFlagClick = (flagId, countryCode) => {
  //     updateFlagAndNumber(flagId, countryCode);
      
  //     switcher.appendChild(currentCountry); 

  //     toggleMenu();
  // };

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
const selectedFlag = document.querySelector(`#${flagId}`);
const currentFlag = document.querySelector(".js-current svg");

const selectedFlagContent = selectedFlag.innerHTML;
const currentFlagContent = currentFlag.innerHTML;

// Меняем содержимое флагов
selectedFlag.innerHTML = currentFlagContent;
currentFlag.innerHTML = selectedFlagContent;

const selectedFlagNumberElement = selectedFlag.querySelector(".contacts-form-icon-lang-number");
const currentFlagNumberElement = currentFlag.querySelector(".contacts-form-icon-lang-number");

if (selectedFlagNumberElement && currentFlagNumberElement) {
const selectedFlagNumber = selectedFlagNumberElement.textContent;
const currentFlagNumber = currentFlagNumberElement.textContent;

// Меняем номера
selectedFlagNumberElement.textContent = currentFlagNumber;
currentFlagNumberElement.textContent = selectedFlagNumber;

numberSwitcher.textContent = countryCode;
}

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