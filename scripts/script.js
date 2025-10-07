// Nenhum JS necessário para animação do carrossel, pois ela é feita via CSS
// Aqui, adicionamos apenas um pequeno efeito de entrada dos cards

const cards = document.querySelectorAll('.benefit-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));
