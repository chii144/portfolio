// JavaScript Document

$('#hamb').click(function() {
   $(this).toggleClass('active');
   $('#black-bg').toggleClass('open');
});

$(function () {
    $(".test-slick").slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 7000,
        cssEase: 'linear',
        slidesToShow: 2,
        swipe: false,
        pauseOnFocus: false, 
        pauseOnHover: false,
        arrows: false,
    });
});

$(function() {
    $('.venobox').venobox({
        infinigall: true,
        numeratio: true,
		fitView: true,
		spinner: 'swing',
    });
});

// ページの読み込み完了時にローディング画面をフェードアウト
$(window).on("load", function () {
  $(".js-loader").delay(800).fadeOut(600); // 画像をフェードアウト
  $(".loading_text").delay(800).fadeOut(600);
  $(".js-loader-bg").delay(1300).fadeOut(600); // 背景色をフェードアウト
});
// ページの読み込みが完了しなくても5秒経ったら強制的にローディング画面をフェードアウト
setTimeout("stoploading()", 5000);
function stoploading() {
  $(".js-loader-bg").fadeOut(600);
}

//scroll_effect
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_up , .scroll_down , .scroll_left , .scroll_right');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 5;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});
	
$(window).on('load scroll', function (){

  var box = $('.fadeIn');
  var animated = 'animated';
  
  box.each(function(){
  
    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    //画面内のどの位置で処理を実行するかで「100」の値を変更
    if(scrollPos > boxOffset - wh + 100 ){
      $(this).addClass(animated);
    }
  });

});
