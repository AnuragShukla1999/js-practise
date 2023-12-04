const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider img');
    
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    }

    slides.forEach((slide, i) => {
        if (i === currentIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
});

showSlide(currentIndex);














const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider img');

    if (index < 0) {
        currentIndex = slider.length - 1;
    } else if (index >= slider.length) {
        currentIndex = 0;
    }

    slides.forEach((slide, i) => {
        if (i == currentIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex++;
    showSlide(currentIndex);
});

showSlide(currentIndex);