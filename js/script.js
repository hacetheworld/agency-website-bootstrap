$(function () {
    $(".hamburger-menu").on("click", function () {

        $(".main-nav").toggleClass('open-menu');

        $(".fa-times").toggleClass('open');
        $(".fa-bars").toggleClass('open');
    })


})