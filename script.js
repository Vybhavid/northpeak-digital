const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("successMessage").innerText =
    "Message sent successfully!";

    form.reset();
});