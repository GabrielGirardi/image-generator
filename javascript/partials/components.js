$(document).ready(function () {
    var navigation = new Vue({
        el: '#header',
        data: {
            title: 'WGGenerator',
            options: [
                {
                    optionName: 'Home',
                    optionTitle: 'Voltar para a página principal',
                    optionAlt: 'Voltar a home',
                    optionIcon: './assets/icons/home.svg',
                    optionHref: '#'
                },
                {
                    optionName: 'Settings',
                    optionTitle: 'Ver Ajustes',
                    optionAlt: 'Visualizar Ajustes',
                    optionIcon: './assets/icons/settings.svg',
                    optionHref: '#'
                },
                {
                    optionName: 'Wishlist',
                    optionTitle: 'Favoritos Adicionados',
                    optionAlt: 'Meus Favoritos',
                    optionIcon: './assets/icons/heart.svg',
                    optionHref: '#'
                }
            ],
            iconWidth: 32,
            iconHeight: 32,
        },
    });
});