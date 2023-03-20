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