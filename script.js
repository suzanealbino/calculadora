document.addEventListener('DOMContentLoaded', function () {
    const resultado = document.querySelector('.result');
    const confirmarBtn = document.querySelector('.igual');

    
    window.insert = function (valor) {
        resultado.innerHTML += valor;
    };

    

    window.clean = function () {
    const resultado = document.querySelector('.result');
    
    resultado.innerHTML = '';
     };

    

    
    window.backspace = function () {
        const resultado = document.querySelector('.result');
        if (resultado.textContent) {
            resultado.innerHTML = resultado.innerHTML.slice(0, -1);
        }
    };
    

    
    window.confirmarResultado = function () {
        if (resultado.textContent !== 'Erro') {
            try {
                resultado.innerHTML = eval(resultado.innerHTML.replace(/x/g, '*'));
            } catch {
                resultado.innerHTML = 'Erro';
            }
        }
    };

    
    if (confirmarBtn) {
        confirmarBtn.addEventListener('click', window.confirmarResultado);
    } else {
        console.error("Botão de igual não encontrado.");
    }
});
