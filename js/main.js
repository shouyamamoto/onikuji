'use strict';

{
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        const n = Math.random();

        if (n < 0.05) {
            btn.textContent = '大吉';
        } else if(n < 0.20) {
            btn.textContent = '中吉';
        } else if(n < 0.50) {
            btn.textContent = '吉';
        } else {
            btn.textContent = '凶';
        }
    });
}