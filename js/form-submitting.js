const contactForm = document.getElementById("contact-form");
const submitSuccess = document.getElementById("submit-success");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    contactForm.classList.add("display-hidden");
    submitSuccess.classList.remove("display-hidden");
});
