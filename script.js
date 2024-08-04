document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    let index = 0;

    function moveToNextSlide() {
        index = (index + 1) % items.length;
        const offset = -index * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    setInterval(moveToNextSlide, 5000); // Change slide every 5 seconds
});
