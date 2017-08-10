
$('#busca').on('input', function () {
    var digitado = $(this).val().trim();
    var regex = new RegExp(digitado, 'i');
    $('.cartao').hide().filter(function () {
        var conteudo = $(this).find('.cartao-conteudo').text();
        return regex.test(conteudo);
    }).show();
});