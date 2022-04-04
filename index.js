

    $(window).on('load',function() {
      $('.section_MV').addClass('fadeIn');
      setTimeout(function () {
        $('.section_intro').addClass('fadeIn');
      }, 1000);
    });
    
    $(window).on('scroll', function () {
      if (window.matchMedia('(min-width:1025px)').matches) {
      if ($('.header_fixed').height() < $(this).scrollTop()) { 
      $('.header_fixed').addClass('fadeIn'); }
      else {
      $('.header_fixed').removeClass('fadeIn'); } }});

    $(".hamburgerBtn").click(function () {
        $(this).toggleClass('active');
        $('.logo_header,.hamburger_inner').toggleClass('active');
      });
      
    // 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  // ふわっ
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-1;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }
    });
}
  
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  setTimeout(function () {
  fadeAnime();
  /* アニメーション用の関数を呼ぶ*/
  },1000);
});// ここまで画面をスクロールをしたら動かしたい場合の記述

//アコーディオンをクリックした時の動作
$('.btn_topModel').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(".accordion_area");//直後のアコーディオンを行うエリアを取得し
	$(findElm).slideToggle();//アコーディオンの上下動作
  $(findElm).toggleClass('active');
  $('.btn_topModel').toggleClass('open')
});

// 画面をスクロールをしたら動かしたい場合の記述
$(function(){
	$('a[href^="#"]').click(function(){
	  var adjust = 10;
	  var speed = 400;
	  var href= $(this).attr("href");
	  var target = $(href == "#" || href == "" ? 'html' : href);
	  var position = target.offset().top - adjust;
	  $('body,html').animate({scrollTop:position}, speed, 'swing');
	  return false;
	});
  });
