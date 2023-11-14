const navItems = document.querySelectorAll('.nav-item');
const infoDisplay = document.querySelector('.info-display');

navItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        const info = item.getAttribute('data-info');
        infoDisplay.textContent = `Information: ${info}`;
    });

    item.addEventListener('mouseleave', () => {
        infoDisplay.textContent = 'Hover over a navbar elment to see information'
    } )
})