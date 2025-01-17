<?php
/**
 * Template Name: Custom blog Page
 * Description: blogカスタムページテンプレート
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
    <section id="page-blog" class="section__padding--pageBlog">
        <h2 class="page__blog--h2 js-text">Blog</h2>

        <!-- <section class="single"> -->
            <div class="page__blog__wrapper">
                <p class="page__blog__number"><?php echo post_custom('number'); ?></p>
                <div class="page__blog__container">
                    <?php if(have_posts()): while(have_posts()): the_post(); ?>
                    <!-- <h1 class="single__title"><?php the_title(); ?></h1> -->
                    <!-- <div class="single__thumbnail">
                        <?php the_post_thumbnail(); ?>
                    </div> -->
                    <div class="single__text">
                        <?php the_content(); ?>
                    </div>
                    <?php endwhile; endif; ?>
                </div>
            </div>
        </section>
</main>

<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>

    <script src="<?php echo get_template_directory_uri(); ?>/./js/blog.js"></script>
    <!-- jsファイル -->
    </body>
</html>
