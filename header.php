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

    <!-- OGP設定 -->
<meta property="og:type" content="website" />
<!-- ページの種類 -->
<meta property="og:url" content="http://ikumisato.com/" />
<!-- ポートフォリオサイトのURL -->
<meta property="og:title" content="Ikumi Sato Portfolio" />
<!-- ページのタイトル -->
<meta property="og:description" content="佐藤郁美のポートフォリオサイトです。" />
<!-- サイトの説明文 -->
<meta property="og:image" content="http://ikumisato.com/wp-content/uploads/2025/02/home.png" />
<!-- OGP用サムネイル画像のURL -->
<meta property="og:site_name" content="Ikumi Sato Portfolio" />
<!-- サイトの名前 -->
<meta property="og:locale" content="ja_JP" />
<!-- 言語設定（日本語の場合） -->


    <!-- favicon -->
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon.svg" />

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
    <div class="mask-bg is-animated loader">Ikumi sato</div>
    <div class="ellipse loading"></div>

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
              <a href="<?php echo home_url(); ?>/works" class="nav__list__item-link">Works</a>
            </li>
            <li class="nav__list__item">
              <a href="<?php echo home_url(); ?>/blogs" class="nav__list__item-link">Blogs</a>
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
                <li><a href="<?php echo home_url(); ?>/works">Works</a></li>
                <li><a href="<?php echo home_url(); ?>/blogs">Blogs</a></li>
                <li><a href="<?php echo home_url(); ?>/#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
