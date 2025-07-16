function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const hireBtn = document.querySelector('.hire-btn');

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

hireBtn.addEventListener('click', () => {
    const modal = document.getElementById('hire-modal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

document.querySelector('.close-btn').addEventListener('click', () => {
    const modal = document.getElementById('hire-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});