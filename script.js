// Rolagem suave do menu
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simulação de envio do formulário
const form = document.getElementById('formContato');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    alert('Mensagem enviada com sucesso!');

    form.reset();
});