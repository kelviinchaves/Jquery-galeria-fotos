$(document).ready(function () {
    console.log(document.querySelector('header button'))
    console.log($('#botao-cancelar'));


    //       JAVASCRIPT


    //            chamando elemento do HTML        -   Adicionando o evento CLICK e função
    //        
    // 
    //      document.querySelector('header button').addEventListener('click', function () {
    //                       callback da função
    //        })


    //JQUERY PARA ADICIONAR EVENTOS

    $('header button').click(function () {
        //callback da função
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    })
    //utilizando a tag .on

    $('form').on('submit', function (e) {
        //callback da função
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);  //O .appendTo()no jQuery é um método usado para mover ou adicionar um elemento a outro elemento no DOM. Ele funciona como o .append(), mas com a diferença de que você primeiro seleciona o que deseja mover e depois especifica o destino.
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blanck" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                <a/>
            </div>
            `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1100);
        $('#endereco-imagem-nova').val('')

    })

})

