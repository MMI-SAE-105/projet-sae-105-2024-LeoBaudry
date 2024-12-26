document.addEventListener('DOMContentLoaded', () => {
    const items2 = document.querySelectorAll('.carousel2__item');
    const dots2 = document.querySelectorAll('.carousel2__nav-item');
    const container2 = document.querySelector('.carousel2__container');

    function setActiveDot2(index) {
        dots2.forEach(dot => dot.classList.remove('active'));
        dots2[index].classList.add('active');
    }

    container2.addEventListener('scroll', () => {
        const scrollLeft = container2.scrollLeft;
        const itemWidth = container2.clientWidth;
        const index = Math.round(scrollLeft / itemWidth);
        setActiveDot2(index);
    });
});