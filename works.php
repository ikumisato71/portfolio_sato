<?php
/*
Template Name: works
Template Post Type: post
*/
?>
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Ikumi sato portfolio</title>

    <meta name="description" content="佐藤郁美のポートフォリオサイトです。" />
    <!-- ページの説明文 -->
    <meta name="keywords" content="ポートフォリオ、Webデザイン" />
    <!-- ページのキーワード -->

    <!--og-->
    <meta property="og:type" content="website" />
    <!-- ページの種類 -->
    <meta property="og:url" content="" />
    <!-- ページのURL -->
    <meta property="og:image" content="ポートフォリオのサムネイル画像" />
    <!-- サムネイル画像URL -->
    <meta property="og:Ikumi sato portfolio" content="ページのタイトル" />
    <!-- ページのタイトル -->
    <meta
      property="og:佐藤郁美のポートフォリオサイトです。"
      content="サイトの説明文"
    />
    <!-- ページの説明文 -->
    <meta
      property="og:Ikumi sato portfolio"
      content="佐藤郁美のポートフォリオサイト"
    />
    <!-- ページのサイト名 -->

    <!-- favicon -->
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon.png" />

    <!-- css -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
    />

    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/style.css" />
    <?php wp_head(); ?>
  </head>
  <body>
    <div class="mouse-stalker"></div>

    <header>
      <div class="header__wrapper">
        <!--四角のロゴボタン -->
        <div class="title__logo--btn">
          <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
            <div class="title__logo--text">Ikumi sato</div>
          </a>
        </div>
        <!-- PC用ナビゲーション -->
        <nav class="nav__container">
          <ul class="nav__list">
            <li class="nav__list__item">
              <a href="<?php echo home_url(); ?>/#about" class="nav__list__item-link">About</a>
            </li>
            <li class="nav__list__item">
              <a href="<?php echo home_url(); ?>/#works" class="nav__list__item-link">Works</a>
            </li>
            <li class="nav__list__item">
              <a href="<?php echo home_url(); ?>/#blog" class="nav__list__item-link">Blog</a>
            </li>
            <li class="nav__list__item">
              <a href="<?php echo home_url(); ?>/#contact" class="nav__list__item-link"
                >contact</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <!-- スマホ用メニューボタン -->
      <div class="outer-menu">
        <input class="checkbox-toggle" type="checkbox" />
        <div class="hamburger">
          <div></div>
        </div>
        <div class="menu">
          <div>
            <div>
              <ul>
                <li><a href="<?php echo home_url(); ?>/#about">About</a></li>
                <li><a href="<?php echo home_url(); ?>/#works">Works</a></li>
                <li><a href="<?php echo home_url(); ?>/#blog">Blog</a></li>
                <li><a href="<?php echo home_url(); ?>/#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <article class="page-works__wrapper ">
      <section id="page-works1" class="section__padding">
        <h2 class="page__works--h2">Works</h2>
        <div class="page__works__wrap">
          <div class="page__works__item">
            <img src="<?php echo get_template_directory_uri(); ?>/img/page_work1.jpg" alt="ANGE webサイト" />
            <h3 class="page__works--h3">コーポレートサイト</h3>
            <p class="page__works--p">
              アパレルOEM企業様のコーポレートサイトになります。デザインからコーディングまで携わりました、
              主にニット製品を扱っているので、やわらかい優しい雰囲気にしました。
            </p>
            <p>ー使用技術：HTML/CSS/JavaScript/jQueryー</p>
          </div>
          <div class="page__works__item-pc">
            <img src="<?php echo get_template_directory_uri(); ?>/img/ange_pc.jpg" alt="ANGE webサイトPC" />
          </div>
        </div>
      </section>
      <div class="side-scroll__wrapper">
      <div class="side-scroll__container js-container">
      <section  id="page-works2" class=" section__padding js-scroll">
        <h2 class="page__works--h2">Works</h2>
        <div class="page__works__wrap">
          <div class="page__works__item">
            <img src="<?php echo get_template_directory_uri(); ?>/img/page_work2.jpg" alt="Eco Shopサイト" />
            <h3 class="page__works--h3">コーポレートサイト</h3>
            <p class="page__works--p">
              サスティナブルな商品を扱っているエコショップ様のホームページになります。
              フェアトレードの商品を扱ってらっしゃたので、ホームページからShoppingページへの遷移もできます。
            </p>
            <p>ー使用技術：WordPress  テーマ：Lightning</p>
          </div>
          <div class="page__works__item-pc">
            <img src="<?php echo get_template_directory_uri(); ?>/img/eco_shop_pc.jpg" alt="Eco ShopサイトPC" />
          </div>
        </div>
      </section>
      <section id="page-works3" class="section__padding js-scroll">
        <h2 class="page__works--h2">Works</h2>
        <div class="page__works__wrap">
          <div class="page__works__item">
            <img src="<?php echo get_template_directory_uri(); ?>/img/por.gif" alt="portfolio" />
            <h3 class="page__works--h3">Portfolio</h3>
            <p class="page__works--p">
              最初に作ったportfolioです。
              メインビジュアルにwebGLのjQueryを使用して波紋の効果をいれてます。
            </p>
            <p>ー使用技術：HTML/CSS/JavaScript/jQueryー</p>
          </div>
          <div class="page__works__item-pc">
            <img src="<?php echo get_template_directory_uri(); ?>/img/portfolio-pc.jpg" alt="portfolioサイトPC" />
          </div>
        </div>
      </section>
    </div>
  </div>
      <section id="page-works4" class="section__padding">
        <h2 class="page__works--h2">Works</h2>
        <div class="page__works__wrapper">
          <div class="page-works__top">
            <div class="page__works__item1">
              <img src="<?php echo get_template_directory_uri(); ?>/img/sea.jpg" alt="海の画像" />
            </div>
            <div class="page__works__text">
              <h3 class="page__works--h3">デザイン</h3>
              <p class="page__works--p">
                イラストやロゴの作成、名刺デザインまで幅広く対応いたします。
                アパレル分野では、カジュアルなデザインから女性らしい華やかなデザインまで、
                多様なテイストでお客様のご要望にお応えしてまいりました。
                今の私に、できることを全力で対応いたします。
              </p>
            </div>
            <div class="page__works__item2">
              <img src="<?php echo get_template_directory_uri(); ?>/img/wordpressHp.jpg" alt="Wp美容室サイト" />
            </div>
          </div>
          <div class="page-works__bottom">
            <div class="page__works__item3">
              <img src="<?php echo get_template_directory_uri(); ?>/img/sato_Banner.jpg" alt="バナー" />
            </div>
            <div class="page__works__item4">
              <img src="<?php echo get_template_directory_uri(); ?>/img/hp.jpg" alt="ハーブHP" />
            </div>
            <div class="page__works__item5">
              <img src="<?php echo get_template_directory_uri(); ?>/img/flyer.jpg" alt="ちらし" />
            </div>
          </div>
        </div>
      </section>
    </article>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollToPlugin.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/./js/works.js"></script>

    <!-- jsファイル -->
  </body>
</html>
