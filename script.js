// Função para alternar o menu lateral
function toggleMenu() {
    const menu = document.getElementById('menuLateral'); 
    menu.classList.toggle('active'); 
}

// Fecha o menu se clicar fora dele
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menuLateral'); 
    const menuIcon = document.querySelector('.menu-icon'); 

    if (menu.classList.contains('active') && !menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('active');
    }
});

// Controle do slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
showSlide(slideIndex);

// Mostra o slide atual
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

// Avança para o próximo slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

// Volta para o slide anterior
function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Inicia o slideshow automático
setInterval(nextSlide, 8000); // Muda a cada 8 segundos

// Código para o modal
const modal = document.getElementById("modal");
const abrirModalButton = document.getElementById("abrirModal");

// Abre o modal
abrirModalButton.onclick = function() {
    modal.style.display = "flex"; // Muda o display do modal para flex
}

// Fecha o modal se o usuário clicar fora do conteúdo do modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Fecha o modal
    }
}

// Certifique-se de que o modal esteja inicialmente escondido
modal.style.display = "none";
