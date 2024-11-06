function toggleMenu() {
    const menu = document.getElementById('menuLateral'); 
    menu.classList.toggle('active'); 
}

document.addEventListener('click', function(event) {
    const menu = document.getElementById('menuLateral'); 
    const menuIcon = document.querySelector('.menu-icon'); 

    if (menu.classList.contains('active') && !menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('active');
    }
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
showSlide(slideIndex);

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev', 'next'); 
        if (i === index) {
            slide.classList.add('active'); 
        } else if (i === (index - 1 + slides.length) % slides.length) {
            slide.classList.add('prev'); 
        } else if (i === (index + 1) % slides.length) {
            slide.classList.add('next'); 
        }
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
}

setInterval(nextSlide, 8000); 

const modal = document.getElementById("modal");
const abrirModalButton = document.getElementById("abrirModal");

abrirModalButton.onclick = function() {
    modal.style.display = "flex"; 
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; 
    }
}

modal.style.display = "none"; 
