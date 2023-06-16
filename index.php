<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="./javascript/generator.js"></script>
    <script src="./javascript/time.js"></script>
    <script src="./javascript/base.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="./css/landing-page.css">
    <link rel="stylesheet" href="sweetalert2.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <title>Gerador de Imagens</title>
</head>
<body>
    <header id="header">
        <div class="search-container">
            <div class="container">`
                <div class="social">
                    <a href="https://github.com/GabrielGirardi" target="_blank">
                        <img src="./assets/icons/github.svg" alt="" width="20px" height="20px"/>
                    </a>
                    <a href="http://instagram.com/gabriell_girardii" target="_blank">
                        <img src="./assets/icons/instagram.svg" alt="" width="20px" height="20px"/>
                    </a>
                    <a href="https://pixabay.com/service/about/api/" target="_blank">
                        <img src="./assets/icons/api.png" alt="" width="20px" height="20px"/>
                    </a>
                </div>
            </div>
        </div>
        <div class="filter-options">
            <ul class="filter-list">
                <li>Cachorro</li>
                <li>Videogames</li>
                <li>Universo</li>
                <li>Floresta</li>
                <li>Gatos</li>
                <li>Paisagem</li>
                <li>Sugestão</li>
            </ul>
        </div>
        <div class="search-container-middle">
            <div class="container">
                <h1 class="time"></h1>
                <h2 class="title-welcome">Bem Vindo, Visitante.</h2>
                <h3>Qual é a imagem que você procura atualmente?</h3>
                <div class="search-area">
                    <input type="search" name="" id="search-bar"/>
                    <button id="btn">
                        <img src="./assets/icons/arrow.png" alt="Search" width="16" height="16"/>
                    </button>
                </div>
                <p class="text-extra">“Se você quer despertar toda a humanidade, desperte tudo de si mesmo.”</p>
            </div>
        </div>
    </header>

    <section class="">
        <div class="bg">
            <div>
               <ul>
                <li>Formato</li>
                <li>Tamanho</li>
                <li>Tipo</li>
                <li>Ordem</li>
               </ul>
            </div>

            <div class="title-fotos">
                <h3>Resultados</h3>
            </div>

            <div class="images-container" id="scroll" style="margin-top: 20px;">
                <figure class="wave" id="scroll">
                    <img src="" alt="Not Found"></img>
                </figure> 
            </div>
    </section>
    <div class="return-to-top">
        <span id="back-to-top">
            <img src="./assets/icons/arrow.png" alt="Search" width="16" height="16"/>
        </span>
    </div>
</body>
</html>