const image = document.querySelector('img');
const curtain = document.getElementById('curtain-div');

image.addEventListener('click', () => {
    curtain.style.transform = 'translateY(100vh)';
});