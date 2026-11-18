// ===== Navigasi mobile: toggle menu =====
const toggle = document.querySelector('.menu-toggle');
const nav    = document.querySelector('.nav');

if (toggle && nav) {
  // Buka / tutup menu saat tombol hamburger diklik
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  });

  // Tutup menu otomatis saat salah satu link diklik
  nav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => nav.classList.remove('open'))
  );
}

// ===== Isi tahun berjalan secara otomatis =====
document.querySelectorAll('[data-year]').forEach(el =>
  el.textContent = new Date().getFullYear()
);
