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
                <li><a href="<?php echo home_url(); ?>/works">Works</a></li>
                <li><a href="<?php echo home_url(); ?>/blogs">Blogs</a></li>
                <li><a href="<?php echo home_url(); ?>/#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <main>
  <section id="page-blogs" class="section__padding--pageBlog">

    <div class="page__blogs--title">
    <h2 class="page__blogs--h2 js-text">Blogs</h2>
    <p class="page__blogs--p">一覧</p>
    </div>

    <div class="page__blogs__wrapper">
    <?php
        // 現在のページ番号を取得
        $paged = get_query_var('paged') ? get_query_var('paged') : 1;

        // クエリの設定
        $args = array(
            'post_type'      => 'post',
            'category_name'  => 'blog',
            'posts_per_page' => 6, // 1ページあたりの記事数
            'paged'          => $paged, // 現在のページ番号
        );

        // クエリの作成
        $query = new WP_Query($args);

        // ループ開始
        if ($query->have_posts()) :
            while ($query->have_posts()) : $query->the_post(); 
    ?>
        <div class="page__blog__container">
          <p class="page__blog__number"><?php echo str_pad(($query->current_post + 1) + (($paged - 1) * 6), 2, '0', STR_PAD_LEFT); ?></p>
          <a href="<?php the_permalink(); ?>" class="pages__blogs--link">
            <img class="page__blogs--img" 
                src="<?php 
                    if (has_post_thumbnail()) { 
                        echo get_the_post_thumbnail_url(get_the_ID(), 'full'); 
                    } else { 
                        echo get_template_directory_uri() . '/img/No image.svg';  // サムネイルがない場合のデフォルト画像
                    } 
                ?>" 
                alt="<?php the_title_attribute(); ?>" />
          </a>
        </div>
    <?php
            endwhile;
        else :
            echo '<p>投稿が見つかりませんでした。</p>';
        endif;
        // クエリをリセット
        wp_reset_postdata();
    ?>        
    </div>

<div class="pagination">
  <?php
      echo paginate_links(array(
          'total' => $query->max_num_pages,
          'current' => $paged,
          'prev_text' => '&lt;&lt; 前へ',
          'next_text' => '次へ &gt;&gt;',
          'type' => 'list', // リスト形式に変換
      ));
  ?>
</div>
  </section>
</main>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>

    <script src="<?php echo get_template_directory_uri(); ?>/./js/blog.js"></script>
    <!-- jsファイル -->
  </body>
</html>
