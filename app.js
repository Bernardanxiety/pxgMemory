const container = document.querySelector('.container');
const divs = document.querySelectorAll('div');
container.setAttribute('style', `display: grid; grid-template-columns: repeat(10, 1fr); grid-template-rows: repeat(6, 1fr); gap: 1rem`);

for (let i = 1; i<61; i++) {
    const div = document.createElement('textarea');
    div.setAttribute('data-key', i);
    container.appendChild(div);
}

// divs.forEach((div) => div.addEventListener('click', (e) => {
//     e.target.textContent = prompt();
// }))

