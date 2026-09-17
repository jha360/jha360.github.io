// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function () {
    var nav = document.querySelector('nav');
    var isExpanded = this.getAttribute('aria-expanded') === 'true';
    nav.classList.toggle('active');
    this.setAttribute('aria-expanded', !isExpanded);
});