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

// // -------------------
// // PAGE WORKS 横スクロール
// // -------------------
// // コンテナ要素とスライド要素を取得
// const container = document.querySelector(".js-container");
// const slides = document.querySelectorAll(".js-scroll");
// const containerWidth = container.offsetWidth;
// // コンテナの幅を取得
// gsap.set(container, {
//   width: slides.length * 100 + "%",
// });
// gsap.set(".js-scroll", {
//   width: 100 / slides.length + "%",
// });
// // 横スクロールアニメーションの設定
// gsap.to(slides, {
//   xPercent: -100 * (slides.length - 1), // X軸方向に移動
//   ease: "none", // アニメーションのイージング(noneは定速)
//   scrollTrigger: {
//     trigger: container, // アニメーション開始のトリガー要素
//     markers: true,
//     pin: true, // 要素を固定
//     scrub: true, // スクロール量に合わせてアニメーション
//     start: "top top", // アニメーションが始まる位置
//     end: `+=${containerWidth}`, // アニメーションが終わる位置
//     // end: container.clientWidth,
//     anticipatePin: 1, // ピン留めアニメーションをスムーズに開始
//     invalidateOnRefresh: true, // ページの再読み込み時(リサイズ時)に値を再計算する
//   },
// });
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
