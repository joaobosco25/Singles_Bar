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

    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
}
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; 
    }
}

=======
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
>>>>>>> 861facf40c2b0650ec0eee72a9c7eab2754d5ff9
modal.style.display = "none"; 
