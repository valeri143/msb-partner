const contactForm = document.getElementById("contact-form");
const submitSuccess = document.getElementById("submit-success");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    contactForm.classList.add("dispay-hidden");
    submitSuccess.classList.remove("dispay-hidden");
});
