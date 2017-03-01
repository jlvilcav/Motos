var jumboHeight = $('.principal-container').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.fondo-principal').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});