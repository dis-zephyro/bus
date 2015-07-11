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

    $('.btn-submit').click(function() {

        $('body').find('form:not(this)').children('label').removeClass('red'); //удаление всех сообщение об ошибке(валидатора)
        var answer = checkForm($(this).parent().get(0)); //ответ от валидатора
        if(answer != false)
        {
            var $form = $(this).parent(),
                name =     $('input[name="name"]', $form).val(),
                phone =    $('input[name="phone"]', $form).val()
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
                        'transitionOut'   : 'none',
                        'closeBtn' : false
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


function map () {

    var myMap = new ymaps.Map("layout0", {
            center: [45.0395,40.1567], // Краснодар
            zoom: 7,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark1 = new ymaps.Placemark([45.0445,41.9691]); //Ставрополь
        myPlacemark2 = new ymaps.Placemark([44.8950,37.3163]); // Анапа
        myPlacemark3 = new ymaps.Placemark([44.7235,37.7687]); // Новороссийск
        myPlacemark4 = new ymaps.Placemark([43.5815,39.7229]); // Сочи
        myPlacemark5 = new ymaps.Placemark([45.0319,35.3824]); // Феодосия
        myPlacemark6 = new ymaps.Placemark([43.0157,41.0251]); // Сухуми

    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.geoObjects.add(myPlacemark5);
    myMap.geoObjects.add(myPlacemark6);

    myMap.behaviors.disable('scrollZoom');


}

function map1 () {

    var myMap = new ymaps.Map("layout1", {
            center: [45.0395,40.1567], // Краснодар
            zoom: 7,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark1 = new ymaps.Placemark([45.0445,41.9691]); //Ставрополь
    myPlacemark2 = new ymaps.Placemark([44.8950,37.3163]); // Анапа
    myPlacemark3 = new ymaps.Placemark([44.7235,37.7687]); // Новороссийск
    myPlacemark4 = new ymaps.Placemark([43.5815,39.7229]); // Сочи
    myPlacemark5 = new ymaps.Placemark([45.0319,35.3824]); // Феодосия
    myPlacemark6 = new ymaps.Placemark([43.0157,41.0251]); // Сухуми

    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.geoObjects.add(myPlacemark5);
    myMap.geoObjects.add(myPlacemark6);

    var multiRoute = new ymaps.multiRouter.MultiRoute({

        referencePoints: [
            [45.0445,41.9691],
            [44.8950,37.3163]
        ],
        params: {
            results: 1
        }
    }, {
        boundsAutoApply: false
    });

    myMap.geoObjects.add(multiRoute);
    myMap.behaviors.disable('scrollZoom');
}

function map2 () {

    var myMap = new ymaps.Map("layout2", {
            center: [45.0395,40.1567], // Краснодар
            zoom: 7,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark1 = new ymaps.Placemark([45.0445,41.9691]); //Ставрополь
    myPlacemark2 = new ymaps.Placemark([44.8950,37.3163]); // Анапа
    myPlacemark3 = new ymaps.Placemark([44.7235,37.7687]); // Новороссийск
    myPlacemark4 = new ymaps.Placemark([43.5815,39.7229]); // Сочи
    myPlacemark5 = new ymaps.Placemark([45.0319,35.3824]); // Феодосия
    myPlacemark6 = new ymaps.Placemark([43.0157,41.0251]); // Сухуми

    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.geoObjects.add(myPlacemark5);
    myMap.geoObjects.add(myPlacemark6);

    var multiRoute = new ymaps.multiRouter.MultiRoute({

        referencePoints: [
            [45.0445,41.9691],
            [44.7235,37.7687]
        ],
        params: {
            results: 1
        }
    }, {
        boundsAutoApply: false
    });

    myMap.geoObjects.add(multiRoute);
    myMap.behaviors.disable('scrollZoom');
}

function map3 () {

    var myMap = new ymaps.Map("layout3", {
            center: [45.0395,40.1567], // Краснодар
            zoom: 7,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark1 = new ymaps.Placemark([45.0445,41.9691]); //Ставрополь
    myPlacemark2 = new ymaps.Placemark([44.8950,37.3163]); // Анапа
    myPlacemark3 = new ymaps.Placemark([44.7235,37.7687]); // Новороссийск
    myPlacemark4 = new ymaps.Placemark([43.5815,39.7229]); // Сочи
    myPlacemark5 = new ymaps.Placemark([45.0319,35.3824]); // Феодосия
    myPlacemark6 = new ymaps.Placemark([43.0157,41.0251]); // Сухуми

    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.geoObjects.add(myPlacemark5);
    myMap.geoObjects.add(myPlacemark6);

    var multiRoute = new ymaps.multiRouter.MultiRoute({

        referencePoints: [
            [45.0445,41.9691],
            [43.5815,39.7229]
        ],
        params: {
            results: 1
        }
    }, {
        boundsAutoApply: false
    });

    myMap.geoObjects.add(multiRoute);
    myMap.behaviors.disable('scrollZoom');
}

function map4 () {

    var myMap = new ymaps.Map("layout4", {
            center: [45.0395,40.1567], // Краснодар
            zoom: 7,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark1 = new ymaps.Placemark([45.0445,41.9691]); //Ставрополь
    myPlacemark2 = new ymaps.Placemark([44.8950,37.3163]); // Анапа
    myPlacemark3 = new ymaps.Placemark([44.7235,37.7687]); // Новороссийск
    myPlacemark4 = new ymaps.Placemark([43.5815,39.7229]); // Сочи
    myPlacemark5 = new ymaps.Placemark([45.0319,35.3824]); // Феодосия
    myPlacemark6 = new ymaps.Placemark([43.0157,41.0251]); // Сухуми

    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.geoObjects.add(myPlacemark5);
    myMap.geoObjects.add(myPlacemark6);

    var multiRoute = new ymaps.multiRouter.MultiRoute({

        referencePoints: [
            [45.0445,41.9691],
            [45.0319,35.3824]
        ],
        params: {
            results: 1
        }
    }, {
        boundsAutoApply: false
    });

    myMap.geoObjects.add(multiRoute);
    myMap.behaviors.disable('scrollZoom');
}

function map5 () {

    var myMap = new ymaps.Map("layout5", {
            center: [45.0395,40.1567], // Краснодар
            zoom: 7,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark1 = new ymaps.Placemark([45.0445,41.9691]); //Ставрополь
    myPlacemark2 = new ymaps.Placemark([44.8950,37.3163]); // Анапа
    myPlacemark3 = new ymaps.Placemark([44.7235,37.7687]); // Новороссийск
    myPlacemark4 = new ymaps.Placemark([43.5815,39.7229]); // Сочи
    myPlacemark5 = new ymaps.Placemark([45.0319,35.3824]); // Феодосия
    myPlacemark6 = new ymaps.Placemark([43.0157,41.0251]); // Сухуми

    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.geoObjects.add(myPlacemark5);
    myMap.geoObjects.add(myPlacemark6);

    var multiRoute = new ymaps.multiRouter.MultiRoute({

        referencePoints: [
            [45.0445,41.9691],
            [43.0157,41.0251]
        ],
        params: {
            results: 1
        }
    }, {
        boundsAutoApply: false
    });

    myMap.geoObjects.add(multiRoute);
    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(map);
ymaps.ready(map1);
ymaps.ready(map2);
ymaps.ready(map3);
ymaps.ready(map4);
ymaps.ready(map5);


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



/*
function init () {

    var myMap = new ymaps.Map("map", {
            center: [45.0395,40.1567], // Краснодар
            zoom: 7
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark1 = new ymaps.Placemark([45.0445,41.9691]); //Ставрополь
        myPlacemark2 = new ymaps.Placemark([44.5630,38.0791]); // Геленджик
        myPlacemark3 = new ymaps.Placemark([44.7235,37.7687]); // Новороссийск
        myPlacemark4 = new ymaps.Placemark([43.5815,39.7229]); // Сочи
        myPlacemark5 = new ymaps.Placemark([45.0319,35.3824]); // Феодосия
        myPlacemark6 = new ymaps.Placemark([43.0157,41.0251]); // Сухуми

    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.geoObjects.add(myPlacemark5);
    myMap.geoObjects.add(myPlacemark6);
    myMap.behaviors.disable('scrollZoom');

    myPlacemark2.events
        .add('mouseenter', function (e) {
            // Ссылку на объект, вызвавший событие,
            // можно получить из поля 'target'.
            e.get('target').options.set('preset', 'islands#greenIcon');
        })
        .add('mouseleave', function (e) {
            e.get('target').options.unset('preset');
        })
        .add('click', function () {
            var multiRoute = new ymaps.multiRouter.MultiRoute({
                // Описание опорных точек мультимаршрута.
                referencePoints: [
                    [45.0445,41.9691],
                    "",
                    [44.5630,38.0791],
                    ""
                ],
                // Параметры маршрутизации.
                params: {
                    // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
                    results: 2
                }
            }, {
                // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                boundsAutoApply: false
            });

            myMap.geoObjects.add(multiRoute);
        });

    myPlacemark3.events
        .add('mouseenter', function (e) {
            // Ссылку на объект, вызвавший событие,
            // можно получить из поля 'target'.
            e.get('target').options.set('preset', 'islands#greenIcon');
        })
        .add('mouseleave', function (e) {
            e.get('target').options.unset('preset');
        })
        .add('click', function () {
            var multiRoute = new ymaps.multiRouter.MultiRoute({
                // Описание опорных точек мультимаршрута.
                referencePoints: [
                    [45.0445,41.9691],
                    "",
                    [44.7235,37.7687],
                    ""
                ],
                // Параметры маршрутизации.
                params: {
                    // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
                    results: 1
                }
            }, {
                // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                boundsAutoApply: false
            });

            myMap.geoObjects.add(multiRoute);
        });

    myPlacemark4.events
        .add('mouseenter', function (e) {
            // Ссылку на объект, вызвавший событие,
            // можно получить из поля 'target'.
            e.get('target').options.set('preset', 'islands#greenIcon');
        })
        .add('mouseleave', function (e) {
            e.get('target').options.unset('preset');
        })
        .add('click', function () {
            var multiRoute = new ymaps.multiRouter.MultiRoute({
                // Описание опорных точек мультимаршрута.
                referencePoints: [
                    [45.0445,41.9691],
                    "",
                    [43.5815,39.7229],
                    ""
                ],
                // Параметры маршрутизации.
                params: {
                    // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
                    results: 1
                }
            }, {
                // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                boundsAutoApply: false
            });

            myMap.geoObjects.add(multiRoute);
        });

    myPlacemark5.events
        .add('mouseenter', function (e) {
            // Ссылку на объект, вызвавший событие,
            // можно получить из поля 'target'.
            e.get('target').options.set('preset', 'islands#greenIcon');
        })
        .add('mouseleave', function (e) {
            e.get('target').options.unset('preset');
        })
        .add('click', function () {
            var multiRoute = new ymaps.multiRouter.MultiRoute({
                // Описание опорных точек мультимаршрута.
                referencePoints: [
                    [45.0445,41.9691],
                    "",
                    [45.0319,35.3824],
                    ""
                ],
                // Параметры маршрутизации.
                params: {
                    // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
                    results: 1
                }
            }, {
                // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                boundsAutoApply: false
            });

            myMap.geoObjects.add(multiRoute);
        });

    myPlacemark6.events
        .add('mouseenter', function (e) {
            // Ссылку на объект, вызвавший событие,
            // можно получить из поля 'target'.
            e.get('target').options.set('preset', 'islands#greenIcon');
        })
        .add('mouseleave', function (e) {
            e.get('target').options.unset('preset');
        })
        .add('click', function () {
            var multiRoute = new ymaps.multiRouter.MultiRoute({
                // Описание опорных точек мультимаршрута.
                referencePoints: [
                    [45.0445,41.9691],
                    "",
                    [43.0157,41.0251],
                    ""
                ],
                // Параметры маршрутизации.
                params: {
                    // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
                    results: 1
                }
            }, {
                // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                boundsAutoApply: false
            });

            myMap.geoObjects.add(multiRoute);
        });

}
ymaps.ready(init);

*/