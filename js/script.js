// السنة في الفوتر
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// قائمة الموبايل
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // إغلاق القائمة عند اختيار رابط (موبايل) - عدا زر القائمة المنسدلة نفسه
  mainNav.querySelectorAll('a:not(.dropdown-toggle)').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ظل خفيف على الهيدر عند التمرير
const header = document.getElementById('siteHeader');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10
      ? '0 8px 24px -18px rgba(46,27,15,.5)'
      : 'none';
  });
}

// قائمة الأقسام المنسدلة (تعمل بنفس الطريقة في كل صفحات الموقع)
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const item = toggle.closest('.nav-item');
    if (!item) return;
    const wasOpen = item.classList.contains('is-open');
    document.querySelectorAll('.nav-item.is-open').forEach(el => el.classList.remove('is-open'));
    if (!wasOpen) item.classList.add('is-open');
  });
});

// إغلاق القائمة المنسدلة عند الضغط خارجها
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-item')) {
    document.querySelectorAll('.nav-item.is-open').forEach(el => el.classList.remove('is-open'));
  }
});
