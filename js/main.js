// ーーーーーーー
// ローディングアニメーション
// ーーーーーーー
const loader = document.querySelectorAll(".js-loader");

// ページ読み込み後、2秒後にローダーの非表示処理を開始
setTimeout(() => {
  // トランジションを設定し、opacityを1秒かけて0にする
  loader.style.transition = "opacity 0.8s ease";
  loader.style.opacity = "0";

  // 1秒後（opacityのトランジションが完了した後）、ローダーを完全に非表示にする
  setTimeout(() => {
    loader.style.display = "none";
  }, 800);
}, 1500);

// // ポートフォリオロゴのクラス名で要素を取得
// const titleLogoPf = document.querySelector(".mv__title--l"); // クラス名には「.」が必要

// // 1200ミリ秒（1.2秒）後に処理を実行
// setTimeout(() => {
//   // 要素に変更を加える例（例えば、クラスを追加してアニメーションをトリガーする）
//   titleLogoPf.classList.add("active");
// }, 1200);
// ーーーーーーー
// トップへ戻る
// ーーーーーーー

// ページトップボタンの要素を取得
const pageTopButton = document.querySelector(".js-page-top");

// クリックイベントをアロー関数で設定
pageTopButton.addEventListener("click", () => {
  // ページの一番上へスムーズにスクロール
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ーーーーーーー
// タイトルの文字の動き
// ーーーーーーー
const triggers = document.querySelectorAll(".js-stagger-trigger"); // 各sectionに設定して下さい。
triggers.forEach((trigger) => {
  const textElements = trigger.querySelectorAll(".js-text"); // 各sectionの中のjs-textクラスを持つ要素を取得

  gsap.from(textElements, {
    y: 30,
    autoAlpha: 0,
    duration: 1,
    stagger: 0.3, // 各文字間の間隔
    scrollTrigger: {
      trigger: trigger,
      scrub: true, // スクロールに合わせてアニメーションの進行を変化させる
      markers: true,
      start: "top 60%",
      end: "top 30%",
    },
  });
});

// ーーーーーーー
// マウスストーカー
// ーーーーーーー
// .mouse-stalker要素を取得
const stalker = document.querySelector(".mouse-stalker");

// マウスの動きに追従
document.addEventListener("mousemove", function (e) {
  stalker.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// すべてのリンクにホバーイベントを設定
const linkElem = document.querySelectorAll("a:not(.no_stick_)");

linkElem.forEach((link) => {
  // マウスがリンクに乗ったとき
  link.addEventListener("mouseover", function () {
    stalker.classList.add("is_active");
  });

  // マウスがリンクから離れたとき
  link.addEventListener("mouseout", function () {
    stalker.classList.remove("is_active");
  });
});

// ーーーーーーー
// swiper
// ーーーーーーー
const slideLength = document.querySelectorAll(".card05 .swiper-slide").length;

const initSwiper = () => {
  const mySwiper = new Swiper(".card05 .swiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    loop: true,
    loopedSlides: slideLength,
    speed: 8000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: {
      enabled: true,
      momentum: false,
    },
    grabCursor: true,
    breakpoints: {
      1025: {
        spaceBetween: 32,
      },
    },
    on: {
      touchEnd: (swiper) => {
        swiper.slideTo(swiper.activeIndex + 1);
      },
    },
  });
};

window.addEventListener("load", function () {
  initSwiper();
});

// PAGE WORKS 横スクロール
// コンテナ要素とスライド要素を取得
const wrapper = document.querySelector(".js-wrapper");
const slides = gsap.utils.toArray(".js-scroll");

// コンテナの幅を取得
const wrapperWidth = wrapper.offsetWidth;

// 横スクロールアニメーションの設定
gsap.to(slides, {
  xPercent: -100 * (slides.length - 1), // -X軸方向に移動
  ease: "none", // アニメーションのイージング(noneは定速)
  scrollTrigger: {
    trigger: wrapper, // アニメーション開始のトリガー要素
    pin: true, // 要素を固定
    scrub: 1, // スクロール量に合わせてアニメーション
    start: "top top", // アニメーションが始まる位置
    end: `+=${wrapperWidth}`, // アニメーションが終わる位置
    anticipatePin: 1, // ピン留めアニメーションをスムーズに開始
    invalidateOnRefresh: true, // ページの再読み込み時(リサイズ時)に値を再計算する
  },
});

// ーーーーーーー
// skills
// ーーーーーーー
// gsap.set("skill__item", {
//   y: 30,
//   opacity: 0,
// });

// gsap.to(".skill__item", 1.5, {
//   y: 0,
//   opacity: 1,
//   ease: "expo.out",
//   stagger: {
//     each: 0.1,
//     // amount: 1 // 処理する個数 / amountの値
//     from: "start",
//     // start, end, center, edges, random
//   },
// });
