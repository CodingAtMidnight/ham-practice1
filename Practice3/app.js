menuIcon= document.querySelector('.hamburger-menu');
navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
});