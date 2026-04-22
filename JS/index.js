const logoContainer = document.querySelector('.logo-container');
const logoMenu = document.querySelector('.logo-menu');

logoContainer.addEventListener('click', () => {
  logoMenu.classList.toggle('active');
});
//----------------------------------------------------

// const form = document.getElementById('serviceForm');

// if (form) {
//   form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const service = document.getElementById('service').value;
//     const details = document.getElementById('details').value;

//     const subject = encodeURIComponent(`Service Request: ${service}`);
//     const body = encodeURIComponent(
//       `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nDetails:\n${details}`
//     );

//     window.location.href = `mailto:jaimiller08@icloud.com?subject=${subject}&body=${body}`;
//   });
// }

//----------------------------------------------------------------

function selectService(service) {
    document.getElementById("service").value = service;
}

// form email sender
const form = document.getElementById("commissionForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const service = document.getElementById("service").value;
        const details = document.getElementById("details").value;

        const subject = encodeURIComponent("Commission Request: " + service);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nDetails:\n${details}`
        );

        window.location.href =
            `mailto:jaimiller08@icloud.com?subject=${subject}&body=${body}`;
    });
}