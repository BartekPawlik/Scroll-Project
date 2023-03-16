 const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear() 

const navToogle = document.querySelector(".nav-toogle");
const linksContainer = document.querySelector('.links-container');
const link = document = document.querySelectorAll('.scroll-link');

navToogle.addEventListener('click', function(){
    linksContainer.classList.toggle('show-links')
})