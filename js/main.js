$(function () {

    // menu 영역
    $(".main > li, .sub_bg").hover(function () {
        $(".sub").stop().show();
        $(".sub_bg").stop().slideDown();
    }, function () {
        $(".sub").stop().hide();
        $(".sub_bg").stop().slideUp();
    }) // hover

    //slick
    $(".move").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        fade:true
    }); //slick

    //pop-up
    $(".close").click(function(){
        $(".pop_up").hide();
    }); // click

}) // jQuery