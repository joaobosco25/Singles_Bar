// Função para alternar o menu lateral
function toggleMenu() {
    const menu = document.getElementById('menuLateral'); // Obtem o menu lateral
    menu.classList.toggle('active'); // Alterna a classe active
}

// Fechar o menu ao clicar fora dele
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menuLateral'); // Referência ao menu lateral
    const menuIcon = document.querySelector('.menu-icon'); // Referência ao ícone do menu

    // Verifica se o menu está ativo e se o clique foi fora do menu e do ícone
    if (menu.classList.contains('active') && !menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('active'); // Fecha o menu
    }
});

// Funções para o slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
showSlide(slideIndex);

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev', 'next'); // Remove todas as classes
        if (i === index) {
            slide.classList.add('active'); // Ativa o slide atual
        } else if (i === (index - 1 + slides.length) % slides.length) {
            slide.classList.add('prev'); // Adiciona classe para o slide anterior
        } else if (i === (index + 1) % slides.length) {
            slide.classList.add('next'); // Adiciona classe para o slide seguinte
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

// Inicia o slideshow automático
setInterval(nextSlide, 8000); // Muda a cada 5 segundos

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
