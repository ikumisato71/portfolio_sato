// ページトップボタンの要素を取得
const pageTopButton = document.getElementById("js-page-top");

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

textAll.forEach((textContainer, index) => {
  // 元のテキストを1文字ずつ分割して、それぞれを `<span>` 要素にラップ
  const characters = textContainer.textContent.split("");
  textContainer.innerHTML = ""; // 元のテキストをクリア

  characters.forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.display = "inline-block"; // アニメーションに必要なブロック要素として扱う
    textContainer.appendChild(span);
  });

  const spans = textContainer.querySelectorAll("span");

  // GSAPアニメーション
  gsap.from(spans, {
    y: 30, // 下から上へ移動
    autoAlpha: 0, // 完全に透明から表示
    duration: 0.4,
    stagger: {
      each: 0.1, // 1文字ごとの間隔
    },

    scrollTrigger: {
      trigger: index === 0 ? trigger : textAll[index - 1], // 最初は trigger、以降は前の text をトリガーに
      scrub: true,
      markers: true,
      start: "top 60%",
      end: "top 30%",
    },
  });
});
