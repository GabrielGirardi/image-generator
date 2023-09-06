$(document).ready(function() {
    var prop = new Vue({
        el: '#content',
        data: {
            suggestions: [
                {
                    className: 'result-item',
                    title: 'Sugestão 1',
                    alt: 'Sugestão 1',
                    imageSrc: './assets/wallpapers/bg-1.jpg'
                },
                {
                    className: 'result-item',
                    title: 'Sugestão 2',
                    alt: 'Sugestão 2',
                    imageSrc: './assets/wallpapers/bg-2.jpg'
                },
                {
                    className: 'result-item',
                    title: 'Sugestão 3',
                    alt: 'Sugestão 3',
                    imageSrc: './assets/wallpapers/bg-3.jpg'
                },
                {
                    className: 'result-item',
                    title: 'Sugestão 4',
                    alt: 'Sugestão 4',
                    imageSrc: './assets/wallpapers/bg-4.jpg'
                },
                {
                    className: 'result-item',
                    title: 'Sugestão 5',
                    alt: 'Sugestão 5',
                    imageSrc: './assets/wallpapers/bg-5.jpg'
                },
                {
                    className: 'result-item',
                    title: 'Sugestão 6',
                    alt: 'Sugestão 6',
                    imageSrc: './assets/wallpapers/bg-6.jpg'
                },
                {
                    className: 'result-item',
                    title: 'Sugestão 7',
                    alt: 'Sugestão 7',
                    imageSrc: './assets/wallpapers/bg-7.jpg'
                },
                {
                    className: 'result-item',
                    title: 'Sugestão 8',
                    alt: 'Sugestão 8',
                    imageSrc: './assets/wallpapers/bg-8.jpg'
                },
                {
                    className: 'result-item',
                    title: 'Sugestão 9',
                    alt: 'Sugestão 9',
                    imageSrc: './assets/wallpapers/bg-9.png'
                },
                {
                    className: 'result-item',
                    title: 'Sugestão 10',
                    alt: 'Sugestão 10',
                    imageSrc: './assets/wallpapers/bg-10.png'
                }   
            ],
            globalFilterClass: 'filter',
            filters: [
                {
                    filterName: 'Dispositivo',
                    className: 'Device'
                },
                {
                    filterName: 'Resolução',
                    className: 'Resolution'
                },
                {
                    filterName: 'Mais Baixados',
                    className: 'MostDownloaded'
                },
                {
                    filterName: 'Cor',
                    className: 'Color'    
                },
                {
                    filterName: 'Tipo',
                    className: 'Type'
                }
            ],
            categories: [
                {
                    categoryName: 'Carros',
                    className: 'Cars',
                    categoryIllustration: './assets/category/cars.jpg',
                    categoryIllustrationAlt: 'Carros',
                    categoryIllustrationTitle: 'Carros'
                },
                {
                    categoryName: 'Motos',
                    className: 'Motorcycles',
                    categoryIllustration: './assets/category/motorcycles.jpg',
                    categoryIllustrationAlt: 'Motos',
                    categoryIllustrationTitle: 'Motos'
                },
                {
                    categoryName: 'Universo',
                    className: 'Universe',
                    categoryIllustration: './assets/category/universe.jpg',
                    categoryIllustrationAlt: 'Universo',
                    categoryIllustrationTitle: 'Universo'
                },
                {
                    categoryName: 'Paisagem',
                    className: 'Landscape',
                    categoryIllustration: './assets/category/landscape.jpg',
                    categoryIllustrationAlt: 'Paisagem',
                    categoryIllustrationTitle: 'Paisagem'
                },
                {
                    categoryName: 'Cachorros',
                    className: 'Dogs',
                    categoryIllustration: './assets/category/dogs.jpg',
                    categoryIllustrationAlt: 'Cachorros',
                    categoryIllustrationTitle: 'Cachorros'
                },
                {
                    categoryName: 'Gatos',
                    className: 'Cats',
                    categoryIllustration: './assets/category/cats.jpg',
                    categoryIllustrationAlt: 'Gatos',
                    categoryIllustrationTitle: 'Gatos'
                },
                {
                    categoryName: 'Anime',
                    className: 'Anime',
                    categoryIllustration: './assets/category/anime.png',
                    categoryIllustrationAlt: 'Anime',
                    categoryIllustrationTitle: 'Anime'
                },
                {
                    categoryName: 'Jogos',
                    className: 'Games',
                    categoryIllustration: './assets/category/games.jpg',
                    categoryIllustrationAlt: 'VideoGames',
                    categoryIllustrationTitle: 'VideoGames'
                }
            ]
        }
    });
});