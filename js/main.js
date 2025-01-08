// ーーーーーーー
// ローディングアニメーション
// ーーーーーーー
// GSAP TimelineでローディングアニメーションとMVアニメーションを連動
const tl = gsap.timeline();
const loader = document.querySelector(".loader");
const loading = document.querySelector(".loading");

// ローディングアニメーション
tl.to(loader, {
  opacity: 0,
  duration: 1,
  onComplete: () => {
    loader.style.display = "none"; // ローディング画面を非表示
  },
})
  // MVアニメーション
  .to(loading, {
    opacity: 1,
    translateY: 0,
    duration: 1,
    ease: "power2.out",
  })
  .to(".js-mv-title", {
    opacity: 1,
    scale: 0.8,
    duration: 1,
    ease: "back.out(1.7)",
  });

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

// ーーーーーーー;
// skills;
// ーーーーーーー;
gsap.set("skill__item", {
  y: 30,
  opacity: 0,
});

gsap.to(".skill__item", 1.5, {
  y: 0,
  opacity: 1,
  ease: "expo.out",
  stagger: {
    each: 0.1,
    // amount: 1 // 処理する個数 / amountの値
    from: "start",
    // start, end, center, edges, random
  },
});
// ------------------
// ハンバーガーメニュー
// ------------------
// メニュー展開時に背景を固定
const backgroundFix = (bool) => {
  const scrollingElement = () => {
    const browser = window.navigator.userAgent.toLowerCase();
    if ("scrollingElement" in document) return document.scrollingElement;
    return document.documentElement;
  };

  const scrollY = bool
    ? scrollingElement().scrollTop
    : parseInt(document.body.style.top || "0");

  const fixedStyles = {
    height: "100vh",
    position: "fixed",
    top: `${scrollY * -1}px`,
    left: "0",
    width: "100vw",
  };

  Object.keys(fixedStyles).forEach((key) => {
    document.body.style[key] = bool ? fixedStyles[key] : "";
  });

  if (!bool) {
    window.scrollTo(0, scrollY * -1);
  }
};

// 変数定義
const CLASS = "-active";
let flg = false;
let accordionFlg = false;

let hamburger = document.getElementById("js-hamburger");
let focusTrap = document.getElementById("js-focus-trap");
let menu = document.querySelector(".js-nav-area");
let accordionTrigger = document.querySelectorAll(".js-sp-accordion-trigger");
let accordion = document.querySelectorAll(".js-sp-accordion");

// メニュー開閉制御
hamburger.addEventListener("click", (e) => {
  //ハンバーガーボタンが選択されたら
  e.currentTarget.classList.toggle(CLASS);
  menu.classList.toggle(CLASS);
  if (flg) {
    // flgの状態で制御内容を切り替え
    backgroundFix(false);
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.focus();
    flg = false;
  } else {
    backgroundFix(true);
    hamburger.setAttribute("aria-expanded", "true");
    flg = true;
  }
});
window.addEventListener("keydown", () => {
  //escキー押下でメニューを閉じられるように
  if (event.key === "Escape") {
    hamburger.classList.remove(CLASS);
    menu.classList.remove(CLASS);

    backgroundFix(false);
    hamburger.focus();
    hamburger.setAttribute("aria-expanded", "false");
    flg = false;
  }
});

// // メニュー内アコーディオン制御
// accordionTrigger.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.currentTarget.classList.toggle(CLASS);
//     e.currentTarget.nextElementSibling.classList.toggle(CLASS);
//     if (accordionFlg) {
//       e.currentTarget.setAttribute("aria-expanded", "false");
//       accordionFlg = false;
//     } else {
//       e.currentTarget.setAttribute("aria-expanded", "true");
//       accordionFlg = true;
//     }
//   });
// });

// フォーカストラップ制御
focusTrap.addEventListener("focus", (e) => {
  hamburger.focus();
});
