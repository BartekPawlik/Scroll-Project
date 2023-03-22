 const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear() 

const navToogle = document.querySelector(".nav-toogle");
const linksContainer = document.querySelector('.links-container');
const link = document.querySelector('.links');

navToogle.addEventListener("click", function(){
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linkHeight = link.getBoundingClientRect().height;
  
    // console.log(linkHeight)

    if (containerHeight === 0) {
        linksContainer.style.height = `${linkHeight}px`;

    }else{
        linksContainer.style.height = 0;
    }
  
})




const navbar = document.getElementById('nav')
window.addEventListener("scroll", function(){
   const scrollHeihgt = window.pageYOffset;
   const navHeight = navbar.getBoundingClientRect().height;
   if(scrollHeihgt > navHeight){
    navbar.classList.add('fixed-nav')
   }else{
    navbar.classList.remove('fixed-nav')
   }

})

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link){
link.addEventListener('click', function(e){
e.preventDefault();

linksContainer.style.height = 0

const id = e.currentTarget.getAttribute ('href').slice(1);
const element = document.getElementById(id);
// calculate the heights
const navHeight = navbar.getBoundingClientRect().height;
const containerHeight = linksContainer.getBoundingClientRect().height
const fixedNav = navbar.classList.contains('fixed-nav');

let position = element.offsetTop - navHeight - 5;

if (!fixedNav){
    position = position - navHeight
}
if(navHeight > 80) {
    position = position + containerHeight;
}


window.scrollTo({
    left: 0,
    top: position,})


});
linksContainer.style.height = 0
});


