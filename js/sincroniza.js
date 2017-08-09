$('#sync').click(function(){
    $(document).trigger('precisaSincronizar')
});

$(document).on('precisaSincronizar',sincronizaCartoes);

    function sincronizaCartoes(){
        $('#sync').addClass('botaoSync--esperando');
        var cartoes = [];
        $('.cartao').each(function(){
            var cartao = $(this);
            var conteudo = cartao.find('.cartao-conteudo').html();
            var cor = cartao.css('background-color');
            cartoes.push({conteudo:conteudo,cor:cor});
        });
        console.log(cartoes);
        var mural = {usuario:'fulano',cartoes:cartoes};
        $.ajax({
            url:'http://ceep.herokuapp.com/cartoes/salvar',
            method:'POST',
            data:mural,
            dataType:'json',
            success:function(resposta){
                console.log(resposta);
                $('#sync').addClass('botaoSync--sincronizado');
                $('#sync').removeClass('botaoSync--esperando');
            },
            error:function(){
                $('#sync').addClass('botaoSync--deuRuim');
                $('#sync').removeClass('botaoSync--esperando');
            }, 
            complete:function(){
                $('#sync').removeClass('botaoSync--esperando');
            }
        });

    }
