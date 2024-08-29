const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_pbbb9db';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Send Email';
        alert('Message Sent! Thank you for contacting me. ✔️', 'success');
        // Optionally, you can add the success icon dynamically to the button or elsewhere in your UI
        btn.innerHTML = '<i class="fas fa-check"></i> Sent'; // Example using Font Awesome
    }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
    });
});


$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed1 = new Typed(".typing", {
        strings: ["Web Developer", "Artist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        fadeOut: true,
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Web Developer", "Artist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
});
      // Scroll to top button script
const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
