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
      // markers: true,
      start: "top 60%",
      end: "top 30%",
    },
  });
});

// ーーーーーーー
// マウスストーカー
// ーーーーーーー
const stalker = document.querySelector(".mouse-stalker");

// これ以上はPCですよというブレイクポイントを指定
const mediaQuery = window.matchMedia("(min-width: 768px)");

const handle = (pcWindow) => {
  if (pcWindow.matches) {
    // マウスの動きに追従
    document.addEventListener("mousemove", mouseMoveHandler);

    // すべてのリンクにホバーイベントを設定
    const linkElem = document.querySelectorAll("a:not(.no_stick_)");

    linkElem.forEach((link) => {
      link.addEventListener("mouseover", mouseOverHandler);
      link.addEventListener("mouseout", mouseOutHandler);
    });
  } else {
    // スマートフォンではイベントを削除
    document.removeEventListener("mousemove", mouseMoveHandler);

    const linkElem = document.querySelectorAll("a:not(.no_stick_)");
    linkElem.forEach((link) => {
      link.removeEventListener("mouseover", mouseOverHandler);
      link.removeEventListener("mouseout", mouseOutHandler);
    });

    // スマホ時はマウスストーカーを非表示にする（任意）
    stalker.style.display = "none";
  }
};

// イベントハンドラーの定義
const mouseMoveHandler = (e) => {
  stalker.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
};

const mouseOverHandler = () => {
  stalker.classList.add("is_active");
};

const mouseOutHandler = () => {
  stalker.classList.remove("is_active");
};

// ページが読み込まれた時に実行
handle(mediaQuery);

// ウィンドウサイズを変更しても実行（ブレイクポイントの監視）
mediaQuery.addEventListener("change", handle); // 修正済み！

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
// amount: 1 // 処理する個数 / amountの値
// from: "start",
// start, end, center, edges, random
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

document.addEventListener("DOMContentLoaded", () => {
  // 元のテキストを取得
  const rotateText = document.querySelector(".rotate-text");
  const text = rotateText.textContent.trim(); // テキストをトリム
  rotateText.textContent = ""; // 元のテキストをクリア

  // 各文字を <span> で囲む
  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char; // 空白は &nbsp; に変換
    rotateText.appendChild(span);
  });

  // GSAPアニメーションの適用
  gsap.fromTo(
    ".rotate-text span", // 対象要素
    { opacity: 0, rotateX: 90 }, // 初期状態
    {
      opacity: 1,
      rotateX: 0, // 最終状態
      duration: 0.5, // 1文字のアニメーション時間
      stagger: 0.1, // 順番に適用（0.1秒遅延）
      ease: "power2.out", // イージング
    }
  );
});
