var mural = document.querySelector('.mural');
var contador = $('.cartao').length;

function efetuaMudancaDeLayout() {

    mural.classList.toggle('mural--linhas');

}

var botaoLayout = document.querySelector('#mudaLayout');
//botaoLayout.onclick = efetuaMudancaDeLayout;

botaoLayout.addEventListener('click', efetuaMudancaDeLayout);

botaoLayout.addEventListener('click', function () {
    if (mural.classList.contains('mural--linhas')) {
        botaoLayout.textContent = 'Blocos';
    } else {
        botaoLayout.textContent = 'Linhas';
    }
});

var botoesRemove = document.querySelectorAll('.opcoesDoCartao-remove');
for (var i = 0; i < botoesRemove.length; i++) {
    var botaoRemove = botoesRemove[i];
    botaoRemove.addEventListener('click', removeCartao);
}

function removeCartao() {
    var idDoCartao = this.dataset.cartao;
    var cartao = document.querySelector('#cartao' + idDoCartao);
    cartao.classList.add('cartao--some');
    setTimeout(function () {
        cartao.remove();
    }, 2000);

}

//var formulario = document.querySelector('.novoCartao');
//formulario.addEventListener('submit', salvaCartao);

$('.novoCartao').submit(salvaCartao);

function salvaCartao(evento) {
    evento.preventDefault();
    var campoConteudo = $('.novoCartao-conteudo', this);
    var digitado = campoConteudo.val().trim();

    if (digitado) {

        contador++;
        var conteudoNovoCartao = $('<p>').addClass('cartao-conteudo').text(digitado);
        var botaoRemove = $('<button>').addClass('opcoesDoCartao-opcao opcoesDoCartao-remove').text('Remove').click(removeCartao).attr('data-cartao', contador);
        var opcoesDoCartao = $('<div>').addClass('opcoesDoCartao').append(botaoRemove);

        $('<div>').addClass('cartao').append(opcoesDoCartao).append(conteudoNovoCartao).attr('id', 'cartao' + contador).prependTo('.mural');
    } else {
        window.alert('Favor digitar algo');
    }
}

/*function salvaCartao(evento){
    evento.preventDefault();
    var campoConteudo = document.querySelector('.novoCartao-conteudo');
    var digitado = campoConteudo.value;
    console.log(digitado);
    
    var conteudoNovoCartao = document.createElement('p');
    conteudoNovoCartao.classList.add('cartao-conteudo');
    conteudoNovoCartao.textContent = digitado;
    
    var novoCartao = document.createElement('div');
    novoCartao.classList.add('cartao');
    novoCartao.appendChild(conteudoNovoCartao);
    
    var mural = document.querySelector('.mural');
    mural.insertBefore(novoCartao, mural.firstElementChild);
}*/