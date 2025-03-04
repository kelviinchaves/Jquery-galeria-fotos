$('form').on('submit', function (e) {
    e.preventDefault()

    const tarefa = $('#nome-tarefa').val();

    const novaTarefa = $(`<li style="display: none">${tarefa}</li>`);

    $(novaTarefa).appendTo('ul');
    novaTarefa.fadeIn(1000);


    $('#nome-tarefa').val('');
});


$('ul').on('click', 'li', function () {
    $(this).toggleClass('riscado');
});