$(function () {
    $('.header1').click(function (e) {
       $(this).toggleClass('xanh');
       $(this).next().slideToggle(900);
        
    });
    $('.content').slideUp();
});