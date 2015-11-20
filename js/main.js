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

/*
$(".city-slider").owlCarousel({
    items: 2,
    slideSpeed: 1000,
    autoPlay: true,
    pagination: false
});

 */
$('.city-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
});


$(document).ready(function() {

    $('.btn-submit').click(function() {

        $('body').find('form:not(this)').children('label').removeClass('red'); //удаление всех сообщение об ошибке(валидатора)
        var answer = checkForm($(this).parent().get(0)); //ответ от валидатора
        if(answer != false)
        {
            var $form = $(this).parent(),
                name =     $('input[name="name"]', $form).val(),
                phone =    $('input[name="phone"]', $form).val();
            console.log(name, phone);
            $.ajax({
                type: "POST",
                url: "form-handler.php",
                data: {name: name, phone: phone}
            }).done(function(msg) {
                console.log(name, phone);
                $('form').find('input[type=text], textarea').val('');
                console.log('удачно');
                $.fancybox(
                    '<div class="done">'+ '<span class="done-title">Спасибо, Ваша заявка принята!</span><br/>В скором времени с вами свяжутся наши менеджеры' +'</div>',
                    {
                        'autoDimensions'  : false,
                        'padding': 0,
                        'minWidth': 600,
                        'transitionIn'    : 'none',
                        'transitionOut'   : 'none'
                    }
                );
                setTimeout("$.fancybox.close()", 3000);
            });
        }

        var h = $(window).height();
    });

    // Анимация
    var Android = navigator.userAgent.search(/Android/i);
    var iPhone = navigator.userAgent.search(/iPhone/i);
    var iPad = navigator.userAgent.search(/iPad/i);
    if(Android != -1 || iPhone != -1 || iPad != -1) {

    } else {


        $(".scroll").each(function () { // анимация по скролу(используйте этот) достаточно добавить анимируемому блоку класс 'scroll' а css анимацию писать так: '.animated.класс_блока'
            var block = $(this);
            $(window).scroll(function() {
                var top = block.offset().top;
                var bottom = block.height()+top;
                top = top - $(window).height();
                var scroll_top = $(this).scrollTop();
                if ((scroll_top > top) && (scroll_top < bottom)) {
                    if (!block.hasClass("animated")) {
                        block.addClass("animated");
                    }
                } else {
                    block.removeClass("animated");
                }
            });
        });
        $('head').append('<link rel="stylesheet" type="text/css" href="css/animate.css" />'); //подключение файла animation.css если не мобильник
        $('head').append('<link rel="stylesheet" type="text/css" href="css/animation.css" />'); //подключение файла animation.css если не мобильник
    }
});


// Модальное окно

$(".btn-popup").fancybox({
    "padding" : 0,
    'closeBtn' : false
});

$(".btn-schedule").fancybox({
    "padding" : 20
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

$('.city-link').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, {offset:-100});
    return false;
});



$('#map1').click(function(){
    $('#layout0, #layout2, #layout3, #layout4, #layout5').hide();
    $('#layout1').show();
});

$('#map2').click(function(){
    $('#layout0, #layout1, #layout3, #layout4, #layout5').hide();
    $('#layout2').show();
});

$('#map3').click(function(){
    $('#layout0, #layout2, #layout1, #layout4, #layout5').hide();
    $('#layout3').show();
});

$('#map4').click(function(){
    $('#layout0, #layout2, #layout3, #layout1, #layout5').hide();
    $('#layout4').show();
});

$('#map5').click(function(){
    $('#layout0, #layout2, #layout3, #layout4, #layout1').hide();
    $('#layout5').show();
});

