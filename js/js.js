$('.header-dropdown__sandwich').click(function(){
    if(!$('.header-dropdown__inner').hasClass('header-dropdown__inner_active')){
        $('.header-dropdown__inner').addClass('header-dropdown__inner_active')
    }else{
        $('.header-dropdown__inner').removeClass('header-dropdown__inner_active')
    }
})

$('.promo__close').click(function(){
    $('.promo__wrap').css("display","none")
})



$('.header-shortcuts .ranks').click(function(){
    $('.modal_systemRanks').css("display","block")
})
$('.v--modal-background-click, .modalWindow__close-button').click(function(){
    $('.modal_systemRanks').css("display","none")
})

$('.header-shortcuts .cashback').click(function(){
    $('.modal_infoCashback').css("display","block")
})
$('.v--modal-background-click, .modalWindow__close-button').click(function(){
    $('.modal_infoCashback').css("display","none")
})


$('.index-wins-table-tabs__item').click(function(){
    $('.index-wins-table-tabs__item').removeClass('index-wins-table-tabs__item_active')
    $(this).addClass('index-wins-table-tabs__item_active')
})






if($(window).width() < 420){
    
    $('.VueCarousel-inner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: false,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true
      });
}



