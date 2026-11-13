// CONTACT FORM

const contactForm = document.getElementById("contactForm");

const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("contactName").value;

    const email = document.getElementById("contactEmail").value;

    const service = document.getElementById("contactService").value;

    const message = document.getElementById("contactMessage").value;

    const subject = "New Project Inquiry - " + service;

    const body =
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Service: " + service + "\n\n" +
        "Message: " + message;

    const mailtoLink =
        "mailto:hello@aurora.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    formStatus.textContent = "Opening your email application...";

    window.location.href = mailtoLink;

});