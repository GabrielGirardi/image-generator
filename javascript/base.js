$(document).ready(function(){
    setTimeout(function(){
        $('header').addClass('active');
    }, 300);

    $("#back-to-top").on('click', function(){
        $('html, body').animate({
            scrollTop: $("#header").offset().top
          }, 1000); 
    });
});

