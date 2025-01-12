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

// ------------------
// ハンバーガーメニュー
// ------------------
document.addEventListener("DOMContentLoaded", () => {
  const checkboxToggle = document.querySelector(".checkbox-toggle");
  const menuLinks = document.querySelectorAll(".menu a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      checkboxToggle.checked = false; // メニューを閉じる
    });
  });
});
