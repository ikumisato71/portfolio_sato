// ".loader"クラスを持つ要素を取得
const loader = document.querySelector(".loader");

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

// タイトルの文字の動き
const textAll = document.querySelectorAll(".js-text");
const trigger = document.querySelector(".js-stagger-trigger");

textAll.forEach((text, index) => {
  console.log(text);
  gsap.from(text, {
    y: 30,
    autoAlpha: 0,
    duration: 0.4,
    stagger: {
      each: 0.3, //各アニメーションの間隔を指定します。
    },

    scrollTrigger: {
      trigger: index === 0 ? trigger : textAll[index - 1], // 最初は trigger、以降は前のtextをトリガーに
      scrub: true,
      markers: true,
      start: "top 60%",
      end: "top 30%",
    },
  });
});
