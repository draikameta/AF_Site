/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: FILMES
Aluno 1: Andresa Cristina Najarro de Campos - RA: 251538
Aluno 2: Renan Machado de Almeida - RA: 250934
Professor: Abimael de Oliveira
Data de entrega: 07/06
*/
document.addEventListener('DOMContentLoaded', function() {

    // ----------------------------------------------------
    // 1. VALIDAÇÃO E MODAL DO FORMULÁRIO DE CONTATO
    // ----------------------------------------------------
    const formulario = document.getElementById('meuFormulario');

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            // Previne o comportamento padrão (recarregar a página)
            event.preventDefault();

            // Pega os valores básicos para garantir que não estão vazios
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            if (nome === '' || email === '' || mensagem === '') {
                alert('Por favor, preencha os campos obrigatórios.');
            } else {
                // Invoca o Modal do Bootstrap para uma mensagem de sucesso elegante
                try {
                    const modalElement = document.getElementById('modalSucesso');
                    const meuModal = new bootstrap.Modal(modalElement);
                    meuModal.show();
                } catch (error) {
                    alert('Missão Cumprida! Obrigado pelo seu contacto.');
                }
                
                // Limpa o formulário após o envio
                formulario.reset();
            }
        });
    }

    // ----------------------------------------------------
    // 2. BOTÃO VOLTAR AO TOPO
    // ----------------------------------------------------
    const btnTopo = document.getElementById('btnTopo');

    if (btnTopo) {
        // Mostra ou esconde o botão mediante o scroll do ecrã
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                btnTopo.classList.add('mostrar');
            } else {
                btnTopo.classList.remove('mostrar');
            }
        });

        // Evento de clique para subir ao topo suavemente
        btnTopo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ----------------------------------------------------
    // 3. DESTAQUE VISUAL NOS CARDS VIA JAVASCRIPT
    // ----------------------------------------------------
    const imagensCards = document.querySelectorAll('.filmes-capa, .saga-card img');

    imagensCards.forEach(function(img) {
        // Aumenta ligeiramente ao passar o rato
        img.addEventListener('mouseenter', function() {
            img.style.transform = 'scale(1.04)';
            img.style.transition = 'transform 0.4s ease';
        });

        // Regressa ao normal ao tirar o rato
        img.addEventListener('mouseleave', function() {
            img.style.transform = 'scale(1)';
        });
    });

});

// ----------------------------------------------------
// 4. SCROLL SUAVE PARA A SECÇÃO DE SAGAS (CHAMADA NO HTML)
// ----------------------------------------------------
window.rolarParaSaga = function(idDaSaga) {
    // Espera 300 milissegundos para dar tempo de o Bootstrap abrir a aba
    setTimeout(() => {
        const elemento = document.getElementById(idDaSaga);
        if (elemento) {
            elemento.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start'      
            });
        }
    }, 300);
};