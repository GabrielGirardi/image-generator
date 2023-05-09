$(document).ready(function(){
    setTimeout(function(){
        $('header').addClass('active');
    }, 300);
});

$('#btn').on('click', function() {
   window.location.href = window.location + '#results';
});

$('#search-bar').on('keyup', function(e){ 
    window.location.href = window.location + '#results';
});