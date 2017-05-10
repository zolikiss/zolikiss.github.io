$(document).ready(function () {

    var navBar = $('.navbar');
    var offsetY = navBar.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= offsetY) {
            $('.navbar').addClass('navbar-fixed-top');
            $('.navbar').addClass('transparent-black-bg');
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
            $('.navbar').removeClass('transparent-black-bg');
        }
    }

    document.onscroll = scroll;

});
