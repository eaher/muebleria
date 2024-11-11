document.addEventListener('DOMContentLoaded', function () {
    const heroButton = document.querySelector('.hero-btn');

    window.addEventListener('scroll', () => {
        const offset = window.pageYOffset;
        heroButton.style.transform = `scale(${1 + offset * 0.0005})`;
    });
});
