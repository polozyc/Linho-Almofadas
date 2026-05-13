/* Linho Almofadas — JS */
document.addEventListener('DOMContentLoaded', () => {

  /* Navbar scroll */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* Mobile menu */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.close-btn');
  hamburger?.addEventListener('click', () => { mobileMenu.classList.add('open'); document.body.style.overflow = 'hidden'; });
  const closeMobile = () => { mobileMenu.classList.remove('open'); document.body.style.overflow = ''; };
  closeBtn?.addEventListener('click', closeMobile);
  mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobile));

  /* Active nav link */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) link.classList.add('active');
  });

  /* Scroll Reveal */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* Filtro de Produtos */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      productCards.forEach(card => {
        const show = cat === 'all' || card.dataset.category === cat;
        card.style.display = show ? 'block' : 'none';
        if (show) card.style.animation = 'fadeUp .4s ease both';
      });
    });
  });

  /* Formulário → WhatsApp */
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const assunto = document.getElementById('assunto')?.value || '';
    const msg = document.getElementById('mensagem')?.value || '';
    const text = `Olá! Me chamo *${nome}* (${email}).\n\n*Assunto:* ${assunto}\n\n${msg}`;
    window.open(`https://wa.me/5511958610426?text=${encodeURIComponent(text)}`, '_blank');
    form.style.display = 'none';
    if (success) success.style.display = 'block';
  });
});
