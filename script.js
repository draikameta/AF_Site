/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: FILMES
Aluno 1: Andresa Cristina Najarro de Campos - RA: 251538
Aluno 2: Nome completo - RA: XXXXX
Professor: Abimael de Oliveira
Data de entrega: 07/06
*/

document.addEventListener('DOMContentLoaded', function() {



    // ----------------------------------------------------
    // FUNÇÃO 2: VALIDAÇÃO DO FORMULÁRIO DE CONTATO
    // ----------------------------------------------------
    const formulario = document.querySelector('#formContato');

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            // Previne o comportamento padrão de recarregar a página
            event.preventDefault();

            const nome = document.querySelector('#nome').value.trim();
            const email = document.querySelector('#email').value.trim();
            const mensagem = document.querySelector('#mensagem').value.trim();

            // Validação lógica extra além do HTML5
            if (nome === '' || email === '' || mensagem === '') {
                alert('Por favor, preencha todos os campos obrigatórios.');
            } else {
                alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`);
                formulario.reset();
            }
        });
    }

});

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"></link>
