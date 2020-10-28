$(document).ready(function (){
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function (){
        if ( $('#carouselButton').children('span').hasClass('fa-pause') ) {
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
            $('#mycarousel').carousel('pause');
        }
        else {
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
            $('#mycarousel').carousel('cycle');
        }
    });
    $('#loginLink').click(function (){
        $('#loginModal').modal('toggle')
    });
    $('#reserveButton').click(function (){
        $('#reserveModal').modal('toggle')
    });
});