const markup = `
<div class="modal">
<div class="modal-window">
<svg width="42" height="42" class="modal-window-close-cross js-modal-close-btn"><use href="./images/sprite.svg#icon-menu-cross"></use></svg>
<svg class="cross-white js-modal-cross-btn-white" width="22" height="22">
<use href="./images/sprite.svg#icon-cross-white"></use>
</svg>
<p class="modal-window-title modal-window-title-rus">Заполните форму,чтобы арендовать автомобиль</p>
<form >
<input class="contacts-form-input modal-window-input" type="text" name="name"  placeholder="Ваше имя">
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
<button class="contacts-form-button form-button">Отправить</button>
<input type="checkbox" class="contacts-form-custom-chekbox modal-window-checkbox">
<svg class="icon-checked modal-window-checkbox" width="25" height="25">
  <use href="./images/sprite.svg#icon-checkbox-green"></use>
</svg>
<p class="contacts-form-aggrement modal-window-aggrement">Я прочитал и принимаю<span class="contacts-form-aggrement-accent modal-window-aggreement-accent js-rules-modal-open">правила обработки персональных данных</span></p>
</form></div>
<div class="modal-window-steps">
    <ul class="modal-window-steps-list">
        <li>
            <svg  width="30" height="30">
              <use href="./images/sprite.svg#icon-contact-data"></use>
            </svg>
            <p class="modal-window-text">Заполните и отправьте форму <br> с контактными данными.</p>
        </li>
        <li>
        <svg  width="30" height="30">
          <use href="./images/sprite.svg#icon-call"></use>
        </svg>
        <p class="modal-window-text">Ожидайте звонка от нашего менеджера, <br> который подтвердит бронь на автомобиль. <br> (В среднем до 1 часа)</p>
    </li>
    <li>
    <svg  width="30" height="30">
      <use href="./images/sprite.svg#icon-doc"></use>
    </svg>
    <p class="modal-window-text">Приезжайте в парк, подписывайте <br> договор и берите машину</p>
</li>
    </ul>
</div>
</div>
`

const rulesMarkup = `
<div class="rules-modal">
<svg width="42" height="42" class="rules-modal-window-close-cross js-rules-modal-close-btn"><use href="./images/sprite.svg#icon-menu-cross"></use></svg>
<h3 class="rules-modal-general-title">Политика конфиденциальности</h3>
<p class="rules-modal-text">
Администрация сайта обязуется сохранять вашу конфиденциальность в Интернете. Мы уделяем большое значение охране предоставленных вами данных. Наша политика конфиденциальности основана на требованиях Общего регламента о защите персональных данных Европейского Союза (GDPR). Мы собираем персональные данные в целях: улучшения работы нашего сервиса, осуществления контактов с посетителями данного сайта, обработки данных пользователей для сервиса онлайн-торговли, предоставления информации, которую запрашивал пользователь , а так же для указанных ниже действий.
</p>
<h3 class="rules-modal-title">Сбор и использование персональных данных</h3>
<p class="rules-modal-text">
Мы собираем и используем ваши персональные данные только в случае вашего добровольного согласия. При согласии с этим вы разрешаете нам собирать и использовать следующие данные: имя и фамилия, электронная почта, номер телефона . Сбор и обработка ваших данных проводится соответствии с законами, действующими на территории Европейского Союза и в Украина.
</P>
<h3 class="rules-modal-title">Хранение данных, изменение и удаление</h3>
<p class="rules-modal-text">
Пользователь, предоставивший свои персональные данные сайту имеет право на их изменение и удаление, а так же на отзыв своего согласия с их использованием. Ваши персональные данные будут хранится в течении времени, необходимого для использования данных для основной деятельности сайта , при завершении использования ваших данных администрация сайта удаляет их. Для доступа к своим персональным данным вы можете связаться с администрацией сайта по телефону указанному на сайте . Мы можем передавать ваши личные данные третьей стороне только с вашего добровольного согласия, если они были переданы, то изменение данных в других организациях, не связанных с нами, мы осуществить не можем. Использование технических данных при посещении сайта При посещении вами сайта в базе данных сохраняются записи о вашем IP адресе, времени посещения, настройках браузера, операционной системе, а также другая техническая информация необходимая для корректного отображения содержимого сайта. По этим данным нам невозможно идентифицировать личность посетителя. Использование персональных данных другими сервисами На этом сайте используются сторонние интернет-сервисы, осуществляющие независимый от нас сбор информации: Google Analytics . Собранные ими данные могут предоставляться другим службам внутри этих организаций, они могут использовать данные для персонализации рекламы своей собственной рекламной сети. Вы можете прочитать пользовательские соглашения этих организаций на их сайтах. Там же вы можете отказаться от сбора ими персональных данных, к примеру блокировщик Google Analytics . Мы не передаем персональные данные другим организациям и службам, не указанным в данной политике конфиденциальности. Исключение составляет только передача информации при законных требованиях государственных органов уполномоченных осуществлять данные действия.
</p>
<h3 class="rules-modal-title">Ссылки на другие сайты</h3>
<p class="rules-modal-text">
Наш сайт может содержать ссылки на другие сайты, которые не управляются нами. Мы не несем ответственность за их содержание. Мы рекомендуем вам ознакомиться с политикой конфиденциальности каждого сайта, который вы посещаете, если она там есть.
</p>
<h3 class="rules-modal-title">Изменения в политике конфиденциальности</h3>
<p class="rules-modal-text">
Наш сайт может обновлять политику конфиденциальности время от времени. Мы сообщаем о любых изменениях, разместив новую политику конфиденциальности на этой странице. Мы отслеживаем изменения законодательства, касающегося персональных данных в Европейском Союзе и в Украине. Если вы оставили персональные данные у нас, то мы оповестим вас об изменении в политике конфиденциальности. Если ваши персональные данные были введены некорректно, то мы не сможем с вами связаться. Обратная связь, заключительные положения Связаться с администрацией сайта по вопросам, связанным с политикой конфиденциальности можно по телефону указанному на сайте.
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