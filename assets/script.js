const CONTACT_EMAIL = "YOUR-EMAIL-HERE";

const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
    });
  });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector('[data-contact-form]');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('.form-status');

    if (!CONTACT_EMAIL.includes('@')) {
      status.textContent = 'Add your contact email at the top of assets/script.js first.';
      return;
    }

    const data = new FormData(form);
    const subject = encodeURIComponent(`ShowAI pilot enquiry — ${data.get('organisation') || data.get('name')}`);
    const body = encodeURIComponent(
      `Name: ${data.get('name')}
` +
      `Organisation: ${data.get('organisation')}
` +
      `Email: ${data.get('email')}

` +
      `Message:
${data.get('message')}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    status.textContent = 'Your email application is opening.';
  });
}
