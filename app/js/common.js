$(function() {


    $('.drawer').drawer();
    $('.drawer').on('drawer.opened', function(){
        $('.hamburger').addClass('is-active');
    });
    $('.drawer').on('drawer.closed', function(){
        $('.hamburger').removeClass('is-active');
    });

    var bloggers = $('.bloggers__item').width();
    $('.bloggers__item').css({'height':bloggers+'px'});

    $( window ).resize(function() {
        var bloggers = $('.bloggers__item').width();
        $('.bloggers__item').css({'height':bloggers+'px'});
    });



    $('.tshirt__slider').owlCarousel({
        items:1,
        loop:false,
        center:true,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'black',
        animateOut: 'fadeOut',
        touchDrag: false
    });

    $('.tshirt__text__color__btn_fjs').on('click', function(){
        $('.tshirt__text__color__btn_fjs').removeClass('active');
        $(this).addClass('active');
    });

    $('.tshirt__text__color__btn_sjs').on('click', function(){
        $('.tshirt__text__color__btn_sjs').removeClass('active');
        $(this).addClass('active');
    });

    $('.tshirt__text__color__btn_tjs').on('click', function(){
        $('.tshirt__text__color__btn_tjs').removeClass('active');
        $(this).addClass('active');
    });

    $('.tshirt__text__color__btn_fojs').on('click', function(){
        $('.tshirt__text__color__btn_fojs').removeClass('active');
        $(this).addClass('active');
    });

    $('.dress__slider').slick({
        prevArrow:  $('.dress__slider__prev'),
        nextArrow: $('.dress__slider__next'),
       //  autoplay: true,
       // autoplaySpeed: 3000
    });

        //E-mail Ajax Send
        $("form").submit(function() { //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
                setTimeout(function() {
                    $(th).find('.success').removeClass('active').fadeOut();
                    th.trigger("reset");
                }, 3000);
            });
            return false;
        });

    $("a.scrollto").click(function() {
        $('.drawer').drawer('close');
        var elementClick = $(this).attr("href")
        var des = $(elementClick).offset().top;
        var destination = des-'200';
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });

    $("a.scrolltodrawer").click(function() {
        $('.drawer').drawer('close');
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 105) {
            $('.header').addClass('fixed');

        } else {
            $('.header').removeClass('fixed');

        }
    });

    $('.top').click(function() {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });

    $(window).scroll(function() {

        if ($(this).scrollTop() > $(window).height()) {
            $('.top').addClass("active");


        } else {
            $('.top').removeClass("active");
        }
    });

//    $('.preloader').delay(1000).fadeOut('slow');


});
