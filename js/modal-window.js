 const markup = `
<div class="modal-window">
<svg width="42" height="42" class="modal-window-close-cross js-modal-close-btn"><use href="./images/sprite.svg#icon-menu-cross"></use></svg>
<p class="modal-window-title">Заповніть форму, щоб орендувати авто</p>
<form >
<input class="contacts-form-input modal-window-input" type="text" name="name"  placeholder="Ваше ім’я">
<div class="icon-languages">
    <div class="js-open-code js-close-code" role="list" aria-expanded="false">
        <svg class="contacts-form-icon-lang js-current" style="border-radius: 2px;" id="ua" width="29" height="21">
            <use href="./images/sprite.svg#icon-ukr_lang"></use>
          </svg>
          <p class="contacts-form-icon-lang-number js-number-switcher">+380</p>
          <svg class="contacts-form-icon-arrow_down " width="10" height="5" >
            <use href="./images/sprite.svg#icon-arrow_down"></use>
          </svg>
          <svg class="contacts-form-icon-arrow_up  hidden" width="10" height="5" >
            <use href="./images/sprite.svg#icon-arrow_up"></use>
          </svg>
          <div class="contacts-form-icon-line"></div>
    </div>
    <div class="language-switcher js-languages-container">
        <ul class="language-switcher-flexbox">
            <li>
                <svg id="pl" width="29" height="21">
                  <use href="./images/sprite.svg#icon-poland_lang"></use>
                </svg>
            </li>
            <li>
                <svg id="us" width="29" height="21" style="border-radius: 2px;">
                  <use href="./images/sprite.svg#icon-american_lang"></use>
                </svg>
            </li>
            <li>
                <svg id="ru" width="29" height="21" >
                  <use href="./images/sprite.svg#icon-rus_lang"></use>
                </svg>
            </li>
        </ul>
    </div>
    <input class="contacts-form-input form-input-number modal-window-input" type="tel" name="number" >
</div>
<button class="contacts-form-button">Відправити</button>
<input type="checkbox" class="contacts-form-custom-chekbox modal-window-checkbox">
<svg class="icon-checked modal-window-checkbox" width="25" height="25">
  <use href="./images/sprite.svg#icon-checkbox-green"></use>
</svg>
<p class="contacts-form-aggrement modal-window-aggrement">Я ознайомлений та приймаю <span class="contacts-form-aggrement-accent modal-window-aggreement-accent">правила обробки персональних даних</span></p>
</form></div>
<div class="modal-window-steps">
    <ul class="modal-window-steps-list">
        <li>
            <svg class="" width="25" height="25">
              <use href="./images/sprite.svg#icon-contact-data"></use>
            </svg>
            <p class="modal-window-text">Заповніть і відправте форму <br> з контактними даними.</p>
        </li>
        <li>
        <svg class="" width="25" height="25">
          <use href="./images/sprite.svg#icon-call"></use>
        </svg>
        <p class="modal-window-text">Очікуйте дзвінка від нашого менеджера, <br> який підтвердить бронь на авто. <br> (В середньому до 1 години)</p>
    </li>
    <li>
    <svg class="" width="25" height="25">
      <use href="./images/sprite.svg#icon-doc"></use>
    </svg>
    <p class="modal-window-text">Приїжджайте в парк, підписуйте <br> договір та беріть машину</p>
</li>
    </ul>
</div>
`
const modal = document.querySelector(".js-modal");

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

  function onClose(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }

  function onCloseBtn() {
    instance.close();
  }
};

modal.addEventListener("click", handleClick);
