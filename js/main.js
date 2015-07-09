// Мобильное меню.

$(function() {
    var pull = $('#pull');
    menu = $('.nav');

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 719 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});





// Модальное окно

$(".btn-popup").fancybox({
    "padding" : 0,
    'closeBtn' : false
});

$('.btn-close').click(function(){
    $.fancybox.close();
});

$(".docs a").fancybox({
    "padding" : 0
});



$('.header li a').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, {offset:-100});
    return false;
});