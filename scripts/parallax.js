window.addEventListener('DOMContentLoaded', () => {
    const parallaxItems = [...document.querySelectorAll('.parallax-item')];
    parallaxItems.forEach((item) => {
        const width = item.clientWidth;
        const slide = item.querySelector('.parallax-pic')
        const slideWidth = slide.clientWidth;

        for (let i = 0; i < Math.floor(width * 2 / slideWidth); i++) {
            const copy = slide.cloneNode(true);
            item.append(copy)
        }
    });
});
