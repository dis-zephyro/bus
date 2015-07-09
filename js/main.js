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


$(document).ready(function() {

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


ymaps.ready(init);

function init () {

    var myMap = new ymaps.Map("map", {
            center: [45.0395,40.1567], // Краснодар
            zoom: 7,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: '',
                hintContent: ''
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });

    myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([45.0445,41.9691], { //Ставрополь
            balloonContent: ''
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
        .add(new ymaps.Placemark([44.5630,38.0791], { // Геленджик
            balloonContent: ''
        }, {
            preset: 'islands#icon',
            iconColor: '#a5260a'
        }))
        .add(new ymaps.Placemark([44.7235,37.7687], { // Новороссийск
            balloonContent: ''
        }, {
            preset: 'islands#icon',
            iconColor: '#a5260a'
        }))
        .add(new ymaps.Placemark([43.5815,39.7229], { // Сочи
            balloonContent: ''
        }, {
            preset: 'islands#icon',
            iconColor: '#a5260a'
        }))
        .add(new ymaps.Placemark([43.0157,41.0251], { // Сухуми
            balloonContent: ''
        }, {
            preset: 'islands#icon',
            iconColor: '#a5260a'
        }))
        .add(new ymaps.Placemark([45.0319,35.3824], {  // Феодосия
            balloonContent: ''
        }, {
            preset: 'islands#icon',
            iconColor: '#a5260a'
        }));

    myMap.behaviors.disable('scrollZoom');

}