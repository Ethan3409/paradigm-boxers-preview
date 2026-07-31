// Paradigm Boxers — shared interactivity

document.addEventListener('DOMContentLoaded', () => {
  // mobile nav toggle
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
    // safety net: if anything is still hidden after 3s (e.g. observer
    // edge case), reveal it anyway so content is never stuck invisible
    setTimeout(() => revealEls.forEach(el => el.classList.add('in')), 3000);
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  // contact form — placeholder submit handling (no backend wired up yet)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('form-status');
      if (status) {
        status.textContent = "Thanks for reaching out — this is a placeholder confirmation. Connect a form service (e.g. Formspree, Netlify Forms) to receive real submissions.";
        status.classList.add('visible');
      }
      form.reset();
    });
  }
});
