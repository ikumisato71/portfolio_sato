<?php
/*
Template Name: works
Template Post Type: post
*/
?>
<?php get_header();?>
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