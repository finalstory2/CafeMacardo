$(document).ready(function() {
    $(window).scroll(function() {
        let windowwith = $(window).width();
        if (windowwith > 800) {
            let scroll = $(window).scrollTop();

            $('header .textos').css({
                'transform': 'translate(0px, ' + scroll / 2 + '%)'
            });

            $('.acerca-de article').css({
                'transform': 'translate(0px, -' + scroll / 4 + '%)'
            });
        }

    });
});