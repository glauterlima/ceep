$.getJSON('http://ceep.herokuapp.com/cartoes/carregar?callback=?', 
          {usuario:'glauterlima@gmail.com'},
           function(dados) {
            $.each(dados.cartoes, function() {
                controladorCartoes.cria(this.conteudo, this.cor);
            });
});