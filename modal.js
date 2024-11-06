// script.js
document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link
        const modalId = button.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

document.querySelectorAll('.close').forEach(span => {
    span.addEventListener('click', () => {
        const modalId = span.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'none';
    });
});

// Fecha o modal se o usuário clicar fora do conteúdo do modal
window.onclick = function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}
