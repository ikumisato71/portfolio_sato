<?php
/*
Template Name: blog
Template Post Type: page
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

<?php if(have_posts()) :?>
  <?php while (have_posts()) : the_post() ; ?>
<main>
      <section id="page-blog" class="section__padding--pageBL">
        <h2 class="page__blog--h2 js-text">Blog</h2>

        <div class="page__blog__wrapper">
          <div class="page__blog__container">
          <p class="blog__number"><?php echo post_custom('number'); ?></p>
          <!-- <div class="blog__item-img"
            ><img src="<?php echo get_template_directory_uri(); ?>/img/blog2.png" alt="富士山"
          /> -->
          <!-- <h3> <?php the_title(); ?></h3> -->
          <p><?php the_content(); ?></p>
        <p><?php echo post_custom('day'); ?></p>
          </div>
        </div>
        <?php endwhile; ?>
        <?php endif; ?>
          <?php
              //取得したい投稿記事などの条件を引数として渡す
              $args = array(
                  // 投稿タイプ
                  'post_type'      => 'post',
                  // カテゴリー名
                  'category_name' => 'blog',
                  // 1ページに表示する投稿数
                  'posts_per_page' => 2,
              );
              // データの取得
              $posts = get_posts($args);
            ?>

            <!-- ループ処理 -->
            <?php foreach($posts as $post): ?>
            <?php setup_postdata($post); ?>
            <div class="blog__number--box">
            <ul class="blog__number--ul">
                    <!-- aタグで投稿記事へのリンクを作成 -->
                    <li class="blog__number--li"><a href="<?php echo get_permalink(); ?>"> </a></li>
                    </ul>
              </div>

            <?php endforeach; ?>
            <!-- 使用した投稿データをリセット -->
            <?php wp_reset_postdata(); ?>
            <!-- <ul class="blog__number--ul">
            <a href=""><li class="blog__number--li">01</li></a>
            <a href="http://portfolio.local/blog-2/"> <li class="blog__number--li">02</li></a>
            <a href=""><li class="blog__number--li">03</li></a>
            <a href=""><li class="blog__number--li">04</li></a>
            <a href=""> <li class="blog__number--li">05</li></a>
            <a href=""><li class="blog__number--li">06</li></a>
            <a href=""> <li class="blog__number--li">07</li></a>
            <a href=""> <li class="blog__number--li">08</li></a>
            <a href=""> <li class="blog__number--li">09</li></a>
            <a href=""> <li class="blog__number--li">10</li></a>
            </ul> -->
          
      
      </section>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>

    <script src="<?php echo get_template_directory_uri(); ?>/./js/blog.js"></script>
    <!-- jsファイル -->
  </body>
</html>
