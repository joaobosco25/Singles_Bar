let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

setInterval(nextSlide, 5000); // Ajuste o tempo de transição, se necessário

document.addEventListener('DOMContentLoaded', function() {
    const historicoComentarios = document.querySelector('.historico-comentarios');
    const modalComentarios = document.getElementById('modal-comentarios');
    const historicoModal = modalComentarios.querySelector('.historico-modal');
    const comentariosPorPagina = 10;
    let comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

    // Função para carregar os três comentários mais recentes fora do modal
    function carregarComentarios() {
        // Limpa a seção de comentários para evitar duplicatas
        historicoComentarios.innerHTML = '';

        // Pega os três comentários mais recentes e os adiciona
        comentarios.slice(-3).reverse().forEach((comentario) => {
            adicionarComentario(comentario.nome, comentario.texto);
        });
    }

    // Função para adicionar um comentário ao histórico fora do modal
    function adicionarComentario(nome, texto) {
        const novoComentario = document.createElement('div');
        novoComentario.classList.add('comentario');
        novoComentario.innerHTML = `<strong>${nome}:</strong><p>${texto}</p>`;
        historicoComentarios.appendChild(novoComentario);
    }

    // Carregar comentários ao iniciar a página
    carregarComentarios();

    // Adicionar evento de submissão do formulário
    document.getElementById('form-comentario').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        const nomeUsuario = document.getElementById('nome-usuario').value;
        const textoComentario = document.getElementById('texto-comentario').value;

        if (nomeUsuario && textoComentario) {
            // Adiciona o novo comentário ao array e salva no localStorage
            const novoComentario = { nome: nomeUsuario, texto: textoComentario };
            comentarios.push(novoComentario);
            localStorage.setItem('comentarios', JSON.stringify(comentarios));

            // Atualiza imediatamente a seção de comentários fora do modal
            carregarComentarios();

            // Limpa os campos do formulário
            document.getElementById('form-comentario').reset();

            // Atualiza o modal com todos os comentários
            mostrarComentariosModal();
        }
    });

    // Abrir o modal
    document.getElementById('abrir-modal').addEventListener('click', function() {
        abrirModal();
        mostrarComentariosModal();
    });

    // Mostrar os comentários no modal (exceto os três mais recentes)
    function mostrarComentariosModal() {
        historicoModal.innerHTML = '';

        // Exibe todos os comentários, exceto os três mais recentes
        comentarios.slice(0, -3).forEach((comentario) => {
            adicionarComentarioModal(comentario.nome, comentario.texto);
        });
    }

    // Adiciona comentários ao modal
    function adicionarComentarioModal(nome, texto) {
        const novoComentario = document.createElement('div');
        novoComentario.classList.add('comentario');
        novoComentario.innerHTML = `<strong>${nome}:</strong><p>${texto}</p>`;
        historicoModal.appendChild(novoComentario);
    }

    // Abrir modal
    function abrirModal() {
        modalComentarios.style.display = 'block';
    }

    // Fechar modal
    window.fecharModal = function() {
        modalComentarios.style.display = 'none';
    }

    // Fechar o modal quando o usuário clica fora do conteúdo do modal
    window.onclick = function(event) {
        if (event.target === modalComentarios) {
            fecharModal();
        }
    }
});
