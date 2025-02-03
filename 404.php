<?php get_header(); ?>
<!-- Home -->

  <div class="notfound__container">
    <div class="notfound__img">
      <img src="<?php echo get_template_directory_uri(); ?>/img/not404.jpg" alt="NOT404">
      </div>
      <div class="notfound__text">
        <h2 class="notfound__text--h2">404 Not Found</h2>
        <p class="notfound__text--p">お探しのページが見つかりませんでした。URLをご確認ください。</p>
            <a class="back__list--link" href="<?php echo esc_url(home_url('/')); ?>">トップページへ</a>
      </div>
    
  </div>
<?php get_footer(); ?>