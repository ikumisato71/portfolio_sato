<?php
/*
Template Name: blog
Template Post Type: post
*/
?>
<?php get_header();?>
<?php if(have_posts()) :?>
  <?php while (have_posts()) : the_post() ; ?>
<main>
      <section id="page-blog" class="section__padding--pageBL">
        <h2 class="page__blog--h2 js-text">Blog</h2>

        <div class="page__blog__wrapper">
          <div class="page__blog__container">
          <p class="blog__number">01</p>
          <!-- <div class="blog__item-img"
            ><img src="<?php echo get_template_directory_uri(); ?>/img/blog2.png" alt="富士山"
          /> -->
          <!-- <h3> <?php the_title(); ?></h3> -->
          <p><?php the_content(); ?></p>
        <p><?php echo post_custom('day'); ?></p>
          </div>
        </div>
          <div class="blog__number--box">
            <ul class="blog__number--ul">
            <a href=""><li class="blog__number--li">01</li></a>
            <a href=""> <li class="blog__number--li">02</li></a>
            <a href=""><li class="blog__number--li">03</li></a>
            <a href=""><li class="blog__number--li">04</li></a>
            <a href=""> <li class="blog__number--li">05</li></a>
            <a href=""><li class="blog__number--li">06</li></a>
            <a href=""> <li class="blog__number--li">07</li></a>
            <a href=""> <li class="blog__number--li">08</li></a>
            <a href=""> <li class="blog__number--li">09</li></a>
            <a href=""> <li class="blog__number--li">10</li></a>
            </ul>
          </div>
        </div>
        <?php endwhile; ?>
        <?php endif; ?>
      </section>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>

    <script src="<?php echo get_template_directory_uri(); ?>/./js/blog.js"></script>
    <!-- jsファイル -->
  </body>
</html>
