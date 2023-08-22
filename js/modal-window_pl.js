const markup = `
<div class="modal">
<div class="modal-window">
<svg width="42" height="42" class="modal-window-close-cross js-modal-close-btn"><use href="./images/sprite.svg#icon-menu-cross"></use></svg>
<svg class="cross-white js-modal-cross-btn-white" width="22" height="22">
<use href="./images/sprite.svg#icon-cross-white"></use>
</svg>
<p class="modal-window-title modal-window-title-rus">Wypełnij formularz, aby wypożyczyć samochód</p>
<form >
<input class="contacts-form-input modal-window-input" type="text" name="name"  placeholder="Twoje imię">
<div class="icon-languages form-languages">
    <div class="js-modal-open-code js-modal-close-code" role="list" aria-expanded="false">
    <div class="js-modal-current contacts-form-icon-lang modal-window-desk-position">
    <svg class="svg-countries" id="ukrainian" width="29" height="21">
    <use href="./images/sprite.svg#icon-ukr_lang"></use>
  </svg>
    </div>
          <p class="contacts-form-icon-lang-number js-modal-number-switcher modal-window-desk-position-number">+380</p>
          <svg class="contacts-form-icon-arrow_down modal-icon-arrow_down js-modal-open-code" width="10" height="5" >
            <use href="./images/sprite.svg#icon-arrow_down"></use>
          </svg>
          <svg class="contacts-form-icon-arrow_up  modal-icon-arrow_up hidden" width="10" height="5" >
            <use href="./images/sprite.svg#icon-arrow_up"></use>
          </svg>
          <div class="contacts-form-icon-line modal-window-desk-position-line"></div>
    </div>
    <div class="language-switcher js-modal-languages-container modal-window-desk-position-switcher">
        <ul class="language-switcher-flexbox">
            <li>
                <svg class="svg-countries" id="poland" width="29" height="21">
                  <use href="./images/sprite.svg#icon-poland_lang"></use>
                </svg>
            </li>
            <li>
                <svg class="svg-countries" id="american" width="29" height="21">
                  <use href="./images/sprite.svg#icon-american_lang"></use>
                </svg>
            </li>
            <li >
                <svg class="svg-countries" id="russ" width="29" height="21" >
                  <use href="./images/sprite.svg#icon-rus_lang"></use>
                </svg>
            </li>
        </ul>
    </div>
    <input class="contacts-form-input form-input-number modal-window-input modal-window-input-number" type="tel" name="number" >
</div>
<button class="contacts-form-button form-button">Wysłać</button>
<input type="checkbox" class="contacts-form-custom-chekbox modal-window-checkbox">
<svg class="icon-checked modal-window-checkbox" width="25" height="25">
  <use href="./images/sprite.svg#icon-checkbox-green"></use>
</svg>
<p class="contacts-form-aggrement modal-window-aggrement">I acknowledge that I accept <span class="contacts-form-aggrement-accent modal-window-aggreement-accent js-rules-modal-open"">personal data processing rules</span></p>
</form></div>
<div class="modal-window-steps">
    <ul class="modal-window-steps-list">
        <li>
            <svg  width="30" height="30">
              <use href="./images/sprite.svg#icon-contact-data"></use>
            </svg>
            <p class="modal-window-text">Wypełnij i wyślij formularz z danymi kontaktowymi.</p>
        </li>
        <li>
        <svg  width="30" height="30">
          <use href="./images/sprite.svg#icon-call"></use>
        </svg>
        <p class="modal-window-text"> Poczekaj na telefon od naszego menadżera,kto potwierdzi rezerwację samochodu. <br>(Średnio do 1 godziny)</p>
    </li>
    <li>
    <svg  width="30" height="30">
      <use href="./images/sprite.svg#icon-doc"></use>
    </svg>
    <p class="modal-window-text">Przyjdź do parku, podpisz umowę i odbierz samochód</p>
</li>
    </ul>
</div>
</div>
`

const rulesMarkup = `
<div class="rules-modal">
<svg width="42" height="42" class="rules-modal-window-close-cross js-rules-modal-close-btn"><use href="./images/sprite.svg#icon-menu-cross"></use></svg>
<h3 class="rules-modal-general-title">Polityka prywatności</h3>
<p class="rules-modal-text">
Administracja strony zobowiązuje się do zachowania Twojej prywatności w Internecie. Przywiązujemy dużą wagę do ochrony podanych przez Ciebie danych. Nasza polityka prywatności opiera się na wymaganiach Ogólnego Rozporządzenia Unii Europejskiej o Ochronie Danych (RODO). Gromadzimy dane osobowe w celu: ulepszania naszych usług, komunikowania się z osobami odwiedzającymi tę witrynę, przetwarzania danych użytkownika w ramach usługi handlu online, dostarczania informacji żądanych przez użytkownika, a także wykonywania następujących działań.
</p>
<h3 class="rules-modal-title">Gromadzenie i wykorzystywanie danych osobowych </h3>
<p class="rules-modal-text">
Zbieramy i wykorzystujemy Twoje dane osobowe wyłącznie za Twoją dobrowolną zgodą. Jeżeli wyrażasz na to zgodę, upoważniasz nas do gromadzenia i wykorzystywania następujących danych: imię i nazwisko, e-mail, numer telefonu. Zbieranie i przetwarzanie Twoich danych odbywa się zgodnie z prawem obowiązującym na terytorium Unii Europejskiej i na Ukrainie.
</P>
<h3 class="rules-modal-title">Przechowywanie, modyfikacja i usuwanie danych</h3>
<p class="rules-modal-text">
Użytkownik, który udostępnił w serwisie swoje dane osobowe ma prawo do ich zmiany oraz usunięcia, a także cofnięcia zgody na ich wykorzystanie. Twoje dane osobowe będą przechowywane przez czas niezbędny do wykorzystania danych do głównej działalności serwisu, po zakończeniu korzystania z danych administracja serwisu usuwa je. Aby uzyskać dostęp do swoich danych osobowych, możesz skontaktować się z administracją serwisu pod wskazanym na stronie numerem telefonu. Twoje dane osobowe możemy przekazać podmiotowi trzeciemu tylko za Twoją dobrowolną zgodą, jeżeli zostały przekazane, to nie możemy zmienić danych w innych organizacjach, które nie są z nami powiązane. Wykorzystywanie danych technicznych podczas wizyty na stronie Podczas wizyty na stronie w bazie danych zapisywane są zapisy dotyczące Twojego adresu IP, czasu wizyty, ustawień przeglądarki, systemu operacyjnego, a także inne informacje techniczne niezbędne do prawidłowego wyświetlania zawartości strony . Na podstawie tych danych nie możemy zidentyfikować tożsamości odwiedzającego. Wykorzystywanie danych osobowych przez inne usługi Ta strona korzysta z zewnętrznych usług internetowych, które zbierają informacje niezależne od nas: Google Analytics. Gromadzone przez nich dane mogą być udostępniane innym usługom w ramach tych organizacji i mogą one wykorzystywać te dane do personalizowania reklam z własnej sieci reklamowej. Możesz przeczytać umowy użytkownika tych organizacji na ich stronach internetowych. Tam możesz również zrezygnować z gromadzenia danych osobowych, na przykład blokera Google Analytics. Nie udostępniamy danych osobowych innym organizacjom i usługom niewymienionym w niniejszej polityce prywatności. Jedynym wyjątkiem jest przekazywanie informacji zgodnie z wymogami prawnymi organów państwowych upoważnionych do wykonywania tych czynności.
</p>
<h3 class="rules-modal-title">Linki do innych stron</h3>
<p class="rules-modal-text">
Nasza witryna może zawierać łącza do innych witryn, które nie są przez nas obsługiwane. Nie ponosimy odpowiedzialności za ich treść. Zachęcamy do zapoznania się z polityką prywatności każdej odwiedzanej witryny, jeśli jest dostępna.
</p>
<h3 class="rules-modal-title">Zmiany w polityce prywatności</h3>
<p class="rules-modal-text">
Nasza strona może od czasu do czasu aktualizować niniejszą politykę prywatności. Powiadomimy Cię o wszelkich zmianach, publikując nową politykę prywatności na tej stronie. Monitorujemy zmiany w ustawodawstwie dotyczącym danych osobowych w Unii Europejskiej i na Ukrainie. Jeśli zostawiłeś nam dane osobowe, poinformujemy Cię o zmianie w polityce prywatności. Jeśli Twoje dane osobowe zostały wprowadzone nieprawidłowo, nie będziemy mogli się z Tobą skontaktować. Informacje zwrotne, postanowienia końcowe Z administracją serwisu można kontaktować się w sprawach związanych z polityką prywatności dzwoniąc pod numer wskazany w serwisie.
</p>
</div>
`
const rulesModalOpenBtn = document.querySelector(".js-rules-open");

const handleRulesSpanClick = () => {
  const instance = basicLightbox.create(rulesMarkup, {
    onShow: () => {
        
      document.body.style.overflow = "hidden";

      window.addEventListener("keydown", onClose);

      document.body.classList.add("modal-open");
    },
    onClose: () => {

      document.body.style.overflow = "auto";

      window.removeEventListener("keydown", onClose);

      document.body.classList.remove("modal-open");
    },
  });
  instance.show();

  const modalBtnClose = document.querySelector(".js-rules-modal-close-btn");
  modalBtnClose.addEventListener("click", onCloseBtn);

  function onClose(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }

  function onCloseBtn() {
    instance.close();
  }

};

rulesModalOpenBtn.addEventListener("click", handleRulesSpanClick)

const modal = document.querySelector(".js-modal");
const onRentButtons = document.querySelectorAll(".catalog-car-overlay-button");

const handleClick = () => {
  const instance = basicLightbox.create(markup, {
    onShow: () => {
        
      document.body.style.overflow = "hidden";

      window.addEventListener("keydown", onClose);

      document.body.classList.add("modal-open");
    },
    onClose: () => {

      document.body.style.overflow = "auto";

      window.removeEventListener("keydown", onClose);

      document.body.classList.remove("modal-open");
    },
  });
  instance.show();

  const modalBtnClose = document.querySelector(".js-modal-close-btn");
  modalBtnClose.addEventListener("click", onCloseBtn);
  const modalBtnCloseWhite = document.querySelector(".js-modal-cross-btn-white")
  modalBtnCloseWhite.addEventListener("click", onCloseBtn)


  function onClose(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }

  function onCloseBtn() {
    instance.close();
  }

  initializeModal();
};

modal.addEventListener("click", handleClick);
onRentButtons.forEach(button => {
  button.addEventListener("click", handleClick);
});


function  initializeModal(){
  const rulesModalOpenButton = document.querySelector(".js-rules-modal-open")
  rulesModalOpenButton.addEventListener("click", handleRulesSpanClick)

    const switcher = document.querySelector(".js-modal-languages-container")
    const arrowClose = document.querySelector(".js-modal-close-code")
    const arrowOpen = document.querySelector(".js-modal-open-code")

   const arrowUp =document.querySelector(".modal-icon-arrow_up")
   const arrowDown = document.querySelector(".modal-icon-arrow_down")
   const numberSwitcher = document.querySelector(".js-modal-number-switcher")

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
  

    
  const switcherContent = {
    ukrainian: `
      <svg class="svg-countries" id="ukrainian" width="29" height="21">
          <use href="./images/sprite.svg#icon-ukr_lang"></use>
      </svg>
    `,
    poland: `
      <svg class="svg-countries" id="poland" width="29" height="21">
          <use href="./images/sprite.svg#icon-poland_lang"></use>
      </svg>
    `,
    russ: `
      <svg class="svg-countries" id="russ" width="29" height="21">
          <use href="./images/sprite.svg#icon-rus_lang"></use>
      </svg>
    `,
    american: `
      <svg class="svg-countries" id="american" width="29" height="21">
          <use href="./images/sprite.svg#icon-american_lang"></use>
      </svg>
    `
  };

  const switcherCode = {
    ukrainian: "+380",
    poland: "+48",
    russ: "+7",
    american: "+1"
  };

   const handleFlagClick = (flagId) => {
  const selectedFlag = document.querySelector(`#${flagId}`);
  const currentFlag = document.querySelector(".js-modal-current");
  const currentFlagContent = currentFlag.innerHTML;

  selectedFlag.innerHTML = currentFlagContent;

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
 }

function switchCountriesCode(){
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
}
switchCountriesCode()