document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.green');
    const divs = {
        home: document.getElementById('home'),
        design: document.getElementById('design'),
        ti: document.getElementById('ti'),
        contato: document.getElementById('contato')
    };

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            links.forEach(otherLink => {
                otherLink.classList.remove('black');
                otherLink.classList.add('green');
            });
            link.classList.remove('green');
            link.classList.add('black');

            Object.values(divs).forEach(div => {
                div.style.display = 'none';
            });

            const pageName = link.textContent.toLowerCase();
            if (divs[pageName]) {
                divs[pageName].style.display = 'flex';
            }
        });
    });
});
