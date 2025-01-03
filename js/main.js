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
const stalker = document.querySelector(".mouse-stalker");
let hovFlag = false;

// マウスの動きに追従
document.addEventListener("mousemove", function (e) {
  stalker.style.transform =
    "translate(" + e.clientX + "px, " + e.clientY + "px)";
});

// すべてのリンク要素に対してホバー時のイベントを設定
const linkElem = document.querySelectorAll("a:not(.no_stick_)");

linkElem.forEach((link) => {
  link.addEventListener("mouseover", function () {
    hovFlag = true;
    stalker.classList.add("is_active");
  });

  link.addEventListener("mouseout", function () {
    hovFlag = false;
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
const container = document.querySelectorAll(".container");
const items = document.querySelectorAll(".js-item");

gsap.set(container, {
  width: items.length * 100 + "%",
});
gsap.set(items, {
  width: 100 / items.length + "%",
});

gsap.to(".js-item", {
  xPercent: -100 * (items.length - 1),
  scrollTrigger: {
    trigger: container,
    start: "top top",
    end: container.clientWidth,
    pin: true,
    anticipatePin: 1,
    scrub: true,
  },
});
