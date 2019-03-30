//event pada saat linkk
$('.page-scroll').on('click',function(e) {

    //ambil issi href
    var tujuan = $(this).attr('href');

    //tangkep element bersangkutan
    var elemenTujuan = $(tujuan);
    
   //pindahkan scroll
    $('html,body').animate({
        scrollTop:elemenTujuan.offset().top -50
    },1100,'swing');

   e.preventDefault();
});

//paralaxx
//about
$(window).on('load',function(){
    $('.pkiri').addClass('pmuncul');
    $('.pkanan').addClass('pmuncul');
});
$(window).scroll(function(){
    
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform':'translate(0px,'+wScroll/3+'%)'
    });

    var wScroll = $(this).scrollTop();

    $('.jumbotron h1').css({
        'transform':'translate(0px,'+wScroll/2+'%)'
    });

    var wScroll = $(this).scrollTop();

    $('.jumbotron p').css({
        'transform':'translate(0px,'+wScroll/1.2+'%)'
    });

    //portfoloio
    if(wScroll>$('.portfolio').offset().top -200) {
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            },300 * (i+1));
        });
        
    }

});