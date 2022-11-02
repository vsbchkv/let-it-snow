import { letItSnow } from "./letItSnow.js";
const playBtn = document.querySelector('.landscape-btn');

const runAnimations = () => {
    const parallax = document.querySelector('.parallax');
    const landscape = document.querySelector('.landscape');
    landscape.classList.add('landscape--fade')
    setTimeout(() => {
        playBtn.remove();
        landscape.classList.replace('landscape--fade', 'landscape--snow')
        parallax.classList.add('parallax--active')
        letItSnow();
    }, "1000")
}

playBtn.addEventListener('click', runAnimations);
