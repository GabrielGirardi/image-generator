const API_KEY = '36153190-28613f82eb9d28eee698ede25';
let defaultSearch;

// Requisição das imagens
function getImages() {

    let URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(defaultSearch)+"&lang=pt&min_width=1000&min_height=1000";
    
    fetch(URL)
    .then(response => response.json())
    .then(data => { 
        let allImages = $('section img');
        let view = $('section figcaption')
        if (parseInt(data.totalHits) > 0) {
            $.each(data.hits, function(i, hit) {
                if(i < allImages.length){
                    allImages.eq(i).attr('src', hit.largeImageURL);  
                    view.eq(i).text(hit.tags);  
                }
            });
        } else {
            error('Nenhum resultado encontrado', 'warning');
        }
    });
}

// Valida caso o usuário tentar pesquisar com o input vazio
function error(message, icon){
     const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
        
    Toast.fire({
        icon: icon,
            title: message
    })
}

// Scroll automático para voltar ao topo e para ir até as fotos após pesquisar
function scroll(){
    $('html, body').animate({
      scrollTop: $("#scroll").offset().top
    }, 1000); 
}

//Execuções

$(document).ready(function(){
    $('#btn').on('click', () => {
        const inputVal = $('#search-bar').val().trim();

        if (inputVal) {
            defaultSearch = inputVal;
            sessionStorage.setItem('pesquisa', defaultSearch);
            $('section').addClass('view');
            getImages();
            scroll();
        } else {
            error('Você precisa digitar algo', 'error');
        }
    });

    $('#search-bar').on('keyup', (e) => {
        if (e.type === 'click' || e.keyCode === 13) {
           $('#btn').trigger('click');
        }
    });

    //Sugestões de pesquisa

    $('.filter-list li').on('click', function(){
        defaultSearch = $(this).text();
        sessionStorage.setItem('pesquisa', defaultSearch);
        $('section').addClass('view');
        getImages();
        scroll()
          console.log($(this));
    });

    // filtros

    $('.filters').on('click', async function(){
        const inputOptions = new Promise((resolve) => {
            setTimeout(() => {
            resolve({
                '#ff0000': 'Red',
                '#00ff00': 'Green',
                '#0000ff': 'Blue'
            })
            }, 1000)
        })
        
        const { value: filter } = await Swal.fire({
            title: 'Selecione',
            input: 'radio',
            inputOptions: inputOptions,
            inputValidator: (value) => {
            if (!value) {
                return 'You need to choose something!'
            }
            }
        })
        
        if (filter) {
            Swal.fire({ html: `You selected: ${filter}` })
        }
    });


    $('section figure').on('click', function(){
        const imgDownload = $(this).find('img').attr('src');

        Swal.fire({
            title: '<strong>Informações Gerais</strong>',
            icon: 'info',
            html:
              'Tags: <br/>' +
              'Tipo: <br/>' +
              'Curtidas: <br/>' +
              'Downloads: <br/>' +
              'Visualizações: <br/>',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              `<i class="fa fa-thumbs-up"></i> <a href="${imgDownload}" download>Download!</a>`,
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
              '<i class="fa fa-thumbs-down"></i> Fechar',
            cancelButtonAriaLabel: 'Thumbs down'
          })
    });
});










