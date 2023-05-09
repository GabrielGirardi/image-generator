const API_KEY = '36153190-28613f82eb9d28eee698ede25';
let defaultSearch;

// Requisição das imagens
function getImages() {
    if(defaultSearch == null){
        defaultSearch = 'Universe';
    }
    let URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(defaultSearch)+"&lang=pt&min_width=1920&min_height=1080";
    
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
            allImages.eq(i).attr('src', '');
        }
    });
}

// Valida caso o usuário tentar pesquisar com o input vazio
function emptyError(){
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
        icon: 'error',
            title: 'Você precisa digitar algo'
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
    getImages(); //Inicialização Default
    $('#search-bar').trigger('focus'); // Inicializa a página com o input ativo

    // Função que executa a pesquisa do usuário a partir do botão
    $('#btn').on('click', function(){
        if($('#search-bar').val() != ''){
            defaultSearch = $('#search-bar').val();
            sessionStorage.setItem('pesquisa', defaultSearch);
            getImages();
            scroll()
        } else {
            emptyError();
        }
    });
    // Função que executa a pesquisa do usuário a partir da tecla enter
    $('#search-bar').on('keyup', function(e){ 
        if(e.keyCode === 13){
            if($('#search-bar').val() != ''){
                defaultSearch = $('#search-bar').val();
                sessionStorage.setItem('pesquisa', defaultSearch);
                getImages();
                scroll()
            } else {
                emptyError();
            }
        }
    });

    $('.filter-list li').on('click', function(){
        defaultSearch = $(this).text();
        sessionStorage.setItem('pesquisa', defaultSearch);
        getImages();
        scroll()
          console.log($(this));
    });

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
      
      const { value: color } = await Swal.fire({
        title: 'Selecione',
        input: 'radio',
        inputOptions: inputOptions,
        inputValidator: (value) => {
          if (!value) {
            return 'You need to choose something!'
          }
        }
      })
      
      if (color) {
        Swal.fire({ html: `You selected: ${color}` })
      }
    });
});










