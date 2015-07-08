
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