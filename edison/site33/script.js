const insert = document.getElementById('insert');
const body = document.body;

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
        <div class='key'>
            ${event.key === ' ' ? 'Space' : event.key}
            <small>event.key</small>
        </div>

        <div class='key'>
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>

        <div class='key'>
            ${event.code}
            <small>event.code</small>
        </div>
    `;

    if (event.key === 'r') {
        body.style.background = '#f00';
    }
    else if (event.keyCode === 71) {
        body.style.background = '#0f0';
    }
    else if (event.code === 'KeyB') {
        body.style.background = '#00f';
    }
    else {
        body.style.background = '#e1e1e1';
    }
});