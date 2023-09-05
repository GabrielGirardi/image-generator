$(document).ready(function() {
    let suggestImages = $('.suggestion.results .result-item ').find('img');

    $('.suggestion.results .result-item').on('click', function () {
        let image = $(this).find('img').attr('src');

        Swal.fire({
            title: '<strong>Informações</strong>',
            html: `<div><img src="${image}" alt="Wallpaper" width="600" height="auto"/></div>`,
            with: 400,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: 'Baixar',
            cancelButtonText: 'Fechar',
        }).then((result) => { 
            if (result.isConfirmed) {
                window.open(image);
            }
        });
    });
});





  

