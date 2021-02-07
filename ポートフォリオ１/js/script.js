$(function() {

  // drawer,js
  $('.drawer').drawer();
  })
  
  // wow 
  new WOW().init();

// Q＆A アコーディオン
jQuery('.faqs-content-title').click(function () {
  jQuery(this).next().slideToggle();
    //指定したクラス名があれば削除、なければ追加するというONとOFFを切り替える仕組み
  // jQuery(this).children('.accordion__icon').
  jQuery(this).toggleClass('is-open');
});


// スムーススクロール
// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
  // .headerクラスがついた要素の高さを取得
  let header = jQuery(".header").innerHeight(); 
    // 移動速度を指定（ミリ秒）
  let speed = 500;
    // hrefで指定されたidを取得
  let id = jQuery(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = jQuery("#" == id ? "html" : id);
  // トップからの距離からヘッダー分の高さを引く
  let position = jQuery(target).offset().top - header;
  // その分だけ移動すればヘッダーと被りません
  jQuery("html, body").animate(
    {
      scrollTop: position
    },
    speed
  );
  return false;
});

//トップへ戻るボタンを100px以下の高さのうちは表示させない
jQuery(window).on("scroll", function() {
  // トップから700px以上スクロールしたら
  if (700 < jQuery(this).scrollTop()) {
    jQuery('.totop').addClass( 'is-show' );
  } else {
    jQuery('.totop').removeClass( 'is-show' );
  }
});

  // results
  new Swiper( '.swiper-container', {
    speed: 400,
    spaceBetween: 40,
    width: 400,
    loop: true,
    loopedSlides: 6,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      768: {
				spaceBetween: 24,
				width: 274,
      }
    }
  });