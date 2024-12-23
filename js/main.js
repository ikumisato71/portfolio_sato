// スクロール　ページトップボタンの要素を取得
const pageTopButton = document.querySelector(".js-page-top");

// クリックイベントをアロー関数で設定
pageTopButton.addEventListener("click", () => {
  // ページの一番上へスムーズにスクロール
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

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
    duration: 0.8,
    stagger: {
      each: 0.3, // 1文字ごとの間隔
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

// const dates = ["-3300 | 476", "476 | 1492", "1492 | 1792", "1792 | AJD"];
// ScrollTrigger.create({
//   trigger: ".sections",
//   pin: ".tooltip",
//   // Trigger Scroller
//   start: "top 40%",
//   end: "bottom 55%",
//   // markers: true,
// });

// const sections = document.querySelectorAll(".section");

// sections.forEach((section, index) => {
//   console.log(index);
//   ScrollTrigger.create({
//     trigger: section,
//     start: "top center",
//     end: "bottom center",
//     onEnter: () => {
//       gsap.set(".tooltip-img", {
//         attr: { src: src[index] },
//       });
//       gsap.set(".tooltip p", {
//         innerText: dates[index],
//       });
//     },
//     onEnterBack: () => {
//       gsap.set(".tooltip-img", {
//         attr: { src: src[index] },
//       });
//       gsap.set(".tooltip p", {
//         innerText: dates[index],
//       });
//     },
//   });
// });

// -------
// マウスストーカー
// -------
// const stalker = document.getElementById("mouse-stalker");
// let hovFlag = false;

// document.addEventListener("mousemove", function (e) {
//   stalker.style.transform =
//     "translate(" + e.clientX + "px, " + e.clientY + "px)";
// });

// const linkElem = document.querySelectorAll("a:not(.no_stick_)");
// for (let i = 0; i < linkElem.length; i++) {
//   linkElem[i].addEventListener("mouseover", function (e) {
//     hovFlag = true;
//     stalker.classList.add("is_active");
//   });
//   linkElem[i].addEventListener("mouseout", function (e) {
//     hovFlag = false;
//     stalker.classList.remove("is_active");
//   });
// }

const stalker = document.getElementById("mouse-stalker");
let hovFlag = false;

document.addEventListener("mousemove", function (e) {
  stalker.style.transform =
    "translate(" + e.clientX + "px, " + e.clientY + "px)";
});

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
