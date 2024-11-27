document.addEventListener("DOMContentLoaded", function() {
    let openButton = document.querySelector("#menu-open-button");
    let menuLink = document.querySelector(".menu-link");
    let navBar = document.querySelector(".navbar");
    let closeButton = document.querySelector("#menu-close-button");

   openButton.onclick = () => {
    navBar.classList.toggle('active');
    menuLink.classList.toggle('active');
    openButton.classList.toggle('active');
   }

   closeButton.onclick = () => {
    navBar.classList.remove('active');
    menuLink.classList.remove('active');
    openButton.classList.remove('active');
   }


    var typed = new Typed(".ketik", {
        strings: ["Tristan Rasya Saputra", "X-SIJA", "Tugas Akhir", "Bpk Mujiantoro"],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });
});