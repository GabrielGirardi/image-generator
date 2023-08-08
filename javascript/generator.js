const API_KEY = '36153190-28613f82eb9d28eee698ede25';

function getImages() {
    let URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(defaultSearch)+"&lang=pt";

    fetch(URL)
    .then(response => response.json())
    .then(data => { 
        

    });
} 

function error(message, icon) {
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
};

$(document).ready(function() {
    $("#searchButton").on("click", function() {
      var searchTerm = $("#searchInput").val();
      // Perform search using searchTerm and update results grid
      // You can use an API or a local data source for search results
      // Example: $.get("your_search_api_url", { query: searchTerm }, function(data) {...});
    });
    
    // You can add more jQuery code here for handling filters, suggestions, etc.
  });
  












