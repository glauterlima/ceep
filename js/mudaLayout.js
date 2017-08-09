(function () {
    var mural = document.querySelector('.mural');
    var botaoLayout = document.querySelector('#mudaLayout');

    function efetuaMudancaDeLayout() {
        mural.classList.toggle('mural--linhas');
    }

    function efetuaMudancaDeLayout() {
        mural.classList.toggle('mural--linhas');
    }


    botaoLayout.addEventListener('click', efetuaMudancaDeLayout);

    botaoLayout.addEventListener('click', function () {
        if (mural.classList.contains('mural--linhas')) {
            botaoLayout.textContent = 'Blocos';
        } else {
            botaoLayout.textContent = 'Linhas';
        }
    });

})();

(function () {

})();