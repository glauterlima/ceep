$('.novoCartao').submit(salvaCartao);

function salvaCartao(evento) {
    evento.preventDefault();
    var campoConteudo = $('.novoCartao-conteudo', this);
    var digitado = campoConteudo.val().trim().replace(/\n/g, '<br>');
    if (digitado.length) {
        controladorCartoes.cria(digitado);  
        $(document).trigger('precisaSincronizar');
    } else {
        window.alert('Favor digitar um texto');
    }
    campoConteudo.val('');
    campoConteudo.focus();

}

