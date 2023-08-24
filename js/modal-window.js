const markup = `
<div class="modal">
<div class="modal-window">
<svg width="42" height="42" class="modal-window-close-cross js-modal-close-btn"><use href="./images/sprite.svg#icon-menu-cross"></use></svg>
<svg class="cross-white js-modal-cross-btn-white" width="22" height="22">
<use href="./images/sprite.svg#icon-cross-white"></use>
</svg>
<p class="modal-window-title">Заповніть форму, щоб орендувати авто</p>
<form >
<input class="contacts-form-input modal-window-input" type="text" name="name"  placeholder="Ваше ім’я"
pattern="^[a-zA-Zа-яА-Я\s'-]*$" 
required
>
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
    <input class="contacts-form-input form-input-number modal-window-input modal-window-input-number" type="tel" name="number" 
    pattern="\d{9,15}"
    title="Phone number must be digits"
    required
    >
</div>
<button class="contacts-form-button form-button">Відправити</button>
<input type="checkbox" class="contacts-form-custom-chekbox modal-window-checkbox" required>
<svg class="icon-checked modal-window-checkbox" width="25" height="25">
  <use href="./images/sprite.svg#icon-checkbox-green"></use>
</svg>
<p class="contacts-form-aggrement modal-window-aggrement">Я ознайомлений та приймаю <span class="contacts-form-aggrement-accent modal-window-aggreement-accent js-rules-modal-open">правила обробки персональних даних</span></p>
</form></div>
<div class="modal-window-steps">
    <ul class="modal-window-steps-list">
        <li>
            <svg  width="30" height="30">
              <use href="./images/sprite.svg#icon-contact-data"></use>
            </svg>
            <p class="modal-window-text">Заповніть і відправте форму <br> з контактними даними.</p>
        </li>
        <li>
        <svg  width="30" height="30">
          <use href="./images/sprite.svg#icon-call"></use>
        </svg>
        <p class="modal-window-text">Очікуйте дзвінка від нашого менеджера, <br> який підтвердить бронь на авто. <br> (В середньому до 1 години)</p>
    </li>
    <li>
    <svg  width="30" height="30">
      <use href="./images/sprite.svg#icon-doc"></use>
    </svg>
    <p class="modal-window-text">Приїжджайте в парк, підписуйте <br> договір та беріть машину</p>
</li>
    </ul>
</div>
</div>
`
const rulesMarkup = `
<div class="rules-modal">
<svg width="42" height="42" class="rules-modal-window-close-cross js-rules-modal-close-btn"><use href="./images/sprite.svg#icon-menu-cross"></use></svg>
<h3 class="rules-modal-general-title">Політика конфіденційності</h3>
<p class="rules-modal-text">
Адміністрація сайту зобов’язується зберігати вашу конфіденційність в Інтернеті. Ми приділяємо велике значення охороні наданих вами даних. Наша політика конфіденційності заснована на вимогах Загального регламенту про захист персональних даних Європейського Союзу (GDPR). Ми збираємо персональні дані в цілях: поліпшення роботи нашого сервісу, здійснення контактів з відвідувачами даного сайту, обробки даних користувачів для сервісу онлайн-торгівлі, надання інформації, яку запитував користувач, а так само для таких дій.
</p>
<h3 class="rules-modal-title">Збір та використання персональних даних </h3>
<p class="rules-modal-text">
Ми збираємо і використовуємо ваші персональні дані тільки в разі вашого добровільної згоди. При згоді з цим ви дозволяєте нам збирати і використовувати такі дані: ім’я та прізвище, електронна пошта, номер телефону. Збір та обробка ваших даних проводиться відповідно до законів, що діють на території Європейського Союзу та в Україні.
</P>
<h3 class="rules-modal-title">Зберігання даних, зміна і видалення</h3>
<p class="rules-modal-text">
Користувач, який надав свої персональні дані сайту має право на їх зміну і видалення, а так само на відгук своєї згоди з їх використанням. Ваші персональні дані будуть зберігатися протягом часу, необхідного для використання даних для основної діяльності сайту, при завершенні використання ваших даних адміністрація сайту видаляє їх. Для доступу до своїх персональних даних ви можете зв’язатися з адміністрацією сайту за телефоном, вказаним на сайті. Ми можемо передавати ваші особисті дані третім сторонам тільки з вашого добровільної згоди, якщо вони були передані, то зміна даних у інших організаціях, які пов’язані з нами, ми здійснити можемо. Використання технічних даних при відвідуванні сайту При відвідуванні вами сайту в базі даних зберігаються записи про вашу IP адресу, часу відвідування, настройках браузера, операційної системи, а також інша технічна інформація необхідна для коректного відображення вмісту сайту. За цими даними нам неможливо ідентифікувати особу відвідувача. Використання персональних даних іншими сервісами На цьому сайті використовуються сторонні інтернет-сервіси, які здійснюють незалежний від нас збір інформації: Google Analytics. Зібрані ними дані можуть надаватися іншим службам всередині цих організацій, вони можуть використовувати дані для персоналізації реклами своєї власної рекламної мережі. Ви можете прочитати призначені для користувача угоди цих організацій на їх сайтах. Там же ви можете відмовитися від збору ними персональних даних, наприклад блокувальник Google Analytics. Ми не передаємо персональні дані іншим організаціям і службам, не зазначених в цій політиці конфіденційності. Виняток становить тільки передача інформації при законних вимогах державних органів уповноважених здійснювати дані дії.
</p>
<h3 class="rules-modal-title">Посилання на інші сайти</h3>
<p class="rules-modal-text">
Наш сайт може містити посилання на інші сайти, які не справляються нами. Ми не несемо відповідальність за їх зміст. Ми рекомендуємо вам ознайомитися з політикою конфіденційності кожного сайту, який ви відвідуєте, якщо вона там є.
</p>
<h3 class="rules-modal-title">Зміни в політиці конфіденційності</h3>
<p class="rules-modal-text">
Наш сайт може оновлювати політику конфіденційності час від часу. Ми повідомляємо про будь-які зміни, розмістивши нову політику конфіденційності на цій сторінці. Ми відстежуємо зміни законодавства, що стосується персональних даних в Європейському Союзі і в Україні. Якщо ви залишили персональні дані у нас, то ми повідомимо вас про зміну в політиці конфіденційності. Якщо ваші персональні дані були введені некоректно, то ми не зможемо з вами зв’язатися. Зворотній зв’язок, прикінцеві положення Зв’язатися з адміністрацією сайту з питань, пов’язаних з політикою конфіденційності можна за телефоном, вказаним на сайті.
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