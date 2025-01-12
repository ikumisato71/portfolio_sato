// ーーーーーーー
// ローディングアニメーション
// ーーーーーーー
// GSAP TimelineでローディングアニメーションとMVアニメーションを連動
const tl = gsap.timeline();
// 最初の文字
const loader = document.querySelector(".loader");
// 楕円のアニメーション
const loading = document.querySelector(".loading");

// ローディングアニメーション
setTimeout(() => {
  tl.to(loader, {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      loader.style.display = "none"; // ローディング画面を非表示
    },
  })
    // titleを表示する
    .to(".js-mv-title", {
      onComplete: () => {
        document.querySelector(".mv__container").style.display = "block";
        // SVGアニメーション画面を表示
      },
    })
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
}, 650);
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

// -------------------
// PAGE WORKS 横スクロール
// -------------------
// コンテナ要素とスライド要素を取得
const container = document.querySelector(".js-container");
const slides = document.querySelectorAll(".js-scroll");
const containerWidth = container.offsetWidth;
// コンテナの幅を取得
gsap.set(container, {
  width: slides.length * 100 + "%",
});
gsap.set(".js-scroll", {
  width: 100 / slides.length + "%",
});
// 横スクロールアニメーションの設定
gsap.to(slides, {
  xPercent: -100 * (slides.length - 1), // X軸方向に移動
  ease: "none", // アニメーションのイージング(noneは定速)
  scrollTrigger: {
    trigger: container, // アニメーション開始のトリガー要素
    markers: true,
    pin: true, // 要素を固定
    scrub: true, // スクロール量に合わせてアニメーション
    start: "top top", // アニメーションが始まる位置
    end: `+=${containerWidth}`, // アニメーションが終わる位置
    // end: container.clientWidth,
    anticipatePin: 1, // ピン留めアニメーションをスムーズに開始
    invalidateOnRefresh: true, // ページの再読み込み時(リサイズ時)に値を再計算する
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
