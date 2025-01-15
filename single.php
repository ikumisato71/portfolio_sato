<?php
/**
 * Template Name: Custom Event Page
 * Description: イベント専用のカスタムページテンプレート
 */
?>

<?php get_header();?>
    <main>
        <section class="single">
            <div class="single__wrapper">
                <div class="single__content">
                    <?php if(have_posts()): while(have_posts()): the_post(); ?>
                    <h1 class="single__title"><?php the_title(); ?></h1>
                    <div class="single__thumbnail">
                        <?php the_post_thumbnail(); ?>
                    </div>
                    <div class="single__text">
                        <?php the_content(); ?>
                    </div>
                    <?php endwhile; endif; ?>
                </div>
            </div>
        </section>
<?php get_footer(); ?>
