const API_KEY = '36153190-28613f82eb9d28eee698ede25';
let defaultSearch;
let min_height;
let min_width;
let image_type;

function getImages() {
    if(defaultSearch == null){
        defaultSearch = 'Universe';
    }
    let URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(defaultSearch)+"&lang=pt&min_width=1920&min_height=1080&image_type=illustration";
    
    fetch(URL)
    .then(response => response.json())
    .then(data => { 
        let allImages = $('section img');
        if (parseInt(data.totalHits) > 0) {
            $.each(data.hits, function(i, hit) {
                if(i < allImages.length){
                    allImages.eq(i).attr('src', hit.largeImageURL);  
                }
            });
        } else {
            allImages.eq(i).attr('src', '');
        }
    });
}

getImages();

$(document).ready(function(){
    $('#btn').on('click', function(){
        defaultSearch = $('#search-bar').val();
        sessionStorage.setItem('pesquisa', defaultSearch)
        getImages();
    });

    $('#search-bar').on('keyup', function(e){ 
        if(e.keyCode === 13){
            defaultSearch = $('#search-bar').val();
            sessionStorage.setItem('pesquisa', defaultSearch)
            getImages();
        }
    });

    $('#search-bar').trigger('focus');
});

