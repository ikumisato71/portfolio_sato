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
