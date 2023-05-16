const API_KEY = '36153190-28613f82eb9d28eee698ede25';
let defaultSearch;

function viewInfo(views, downloads, likes, type, tags){
    $('section figure').on('click', function(){
        const imgDownload = $(this).find('img').attr('src');

        Swal.fire({
            title: '<strong>Informações Gerais</strong>',
            icon: 'info',
            html:
              `Tags: ${tags} <br/>` +
              `Tipo: ${type} <br/>` +
              `Curtidas: ${likes}<br/>` +
              `Downloads:${downloads} <br/>` +
              `Visualizações: ${views} <br/>`,
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
}

// Requisição das imagens
function getImages() {

    let URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(defaultSearch)+"&lang=pt&min_width=1000&min_height=1000";
    
    fetch(URL)
    .then(response => response.json())
    .then(data => { 
        let allImages = $('section img');
        let view = $('section figcaption')

        $('.wave').remove();

        if (parseInt(data.totalHits) > 0) {
            $.each(data.hits, function(i, hit) {
                let currentImage = null;

                for (let i = 0; i < data.hits.length; i++) {
                    let hit = data.hits[i];
                    let blockImageBox = `<figure class="wave"><img src="${hit.largeImageURL}" alt="${hit.tags}" onerror="this.parentNode.parentNode.removeChild(this.parentNode)"></img></figure>`;

                    $('.images-container').append(blockImageBox);
                    
                    if (hit.largeImageURL ) {
                        allImages.eq(i).attr('src', hit.largeImageURL);  
                        view.eq(i).text(hit.tags);  
                    }
                }

                $('.images-container figure').on('click', function() {
                    currentImage = hit;
                    viewInfo(currentImage.views, currentImage.downloads, currentImage.likes, currentImage.type, currentImage.tags);
                });
                
            });
        } else {
            error('Nenhum resultado encontrado', 'warning');
            $('section').removeClass('view');
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
    });
});










