$(document).ready(function() {

    //Efecto Menu
    $('.menu a').each(function(indexInArray, valueOfElement) {
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            'top': '0px'
        }, 1500 + (indexInArray * 300));
    });

    //Efecto Header

    if ($(window).width() > 800) {
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1000);
    }
    //scroll elementos menu 

    let acercaDe = $('#acerca-de').offset().top;
    $('#btn-acerca-de').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe
        }, 500);

    });

    let menu = $('#platillos').offset().top;
    $('#btn-menu').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500);

    });

    let platillos = $('#galeria').offset().top;
    $('#btn--galeria').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: platillos
        }, 500);

    });

    let ubicacion = $('#ubicacion').offset().top;
    $('#btn-ubicacion').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        }, 500);

    });

});