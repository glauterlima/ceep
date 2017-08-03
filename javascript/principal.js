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
    var digitado = campoConteudo.val().trim().replace(/\n/g, '<br>');

    if (digitado) {

        contador++;
        var conteudoNovoCartao = $('<p>').addClass('cartao-conteudo').html(digitado);
        var botaoRemove = $('<button>').addClass('opcoesDoCartao-opcao opcoesDoCartao-remove').text('Remove').click(removeCartao).attr('data-cartao', contador);
        var opcoesDoCartao = $('<div>').addClass('opcoesDoCartao').append(botaoRemove);
        var tipoCartao = decideTipoCartao(digitado);

        $('<div>').addClass('cartao').addClass(tipoCartao).append(opcoesDoCartao).append(conteudoNovoCartao).attr('id', 'cartao' + contador).prependTo('.mural');
    }
    campoConteudo.val('');
    campoConteudo.focus();
    
}

function decideTipoCartao(texto) {
    var quebras = texto.split('<br>').length - 1;
    var semQuebras = texto.replace('<br>', ' ');
    var letras = semQuebras.length;
    var palavras = semQuebras.split(' ');
    var tamanhoMaiorPalavra = 0;
    
    $.each(palavras, function() {
        var palavra = this;
        if(palavra.length > tamanhoMaiorPalavra) {
            tamanhoMaiorPalavra = palavra.length;
        }
    });
    
    if(quebras < 5 && letras < 55 && tamanhoMaiorPalavra < 9) {
        return "cartao--textoGrande"; 
    } else if (quebras < 6 && letras < 75 && tamanhoMaiorPalavra < 12) {
        return "cartao--textoMedio";
    } else {
        return "cartao--textoPequeno";
    }
}

$('#busca').on('input', function() {
    var digitado = $(this).val().trim();
    var regex = new RegExp(digitado, 'i');
    $('.cartao').hide().filter(function() {
        var conteudo = $(this).find('.cartao-conteudo').text();
        return regex.test(conteudo);
    }).show();
});


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