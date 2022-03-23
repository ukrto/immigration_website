<template>
  <main data-new-gr-c-s-check-loaded="14.1052.0" data-gr-ext-installed="" class="container">
    <div class="p-4 p-md-5 mt-1 mb-4 bg-custom">
      <div class="col-md-8 px-0">
        <h1 class="display-8 fst-italic"><span
            class="name">{{ post.title }}</span></h1>
      </div>
    </div>
    <!--    <img
            v-if="post.cover"
            class="cover-image"
            :src="post.cover"
        >-->
    <!--Fast access-->
    <nav v-if="post.sections && post.sections.length"
         class="nav d-flex flex-column justify-content-start">
      <p class="p-2 mb-1">Швидкий доступ:</p>
      <a class="p-2 link-secondary" :href="'#'+ transliterate(section.title)"
         v-for="(section, index) in post.sections"
         :key="index">{{ section.title }}</a>
      <hr/>
    </nav>
    <div class="row g-5">
      <div class="col-md-8">
        <!--Content-->
        <section v-if="post.sections && post.sections.length" :id="section.id"
                 v-for="(section, index) in post.sections" :key="index">
          <article class="blog-post">
            <h2 class="blog-post-title">{{ section.title }}</h2>
            <div v-html="section.html"></div>
          </article>
          <br>
        </section>
        <section v-if="post.body">
          <nuxt-content :document="post" />
        </section>
        <div v-if="post.gallery">
          Додаткові файли:
          <a :href="file" v-for="(file, index) in post.gallery" :key="index">{{file}}</a>
        </div>
      </div>
      <!--Right pannel-->
      <div class="col-md-4">
        <div class="position-sticky" style="top: 2rem;">
          <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">Правила, процедури та новини для Українців</h4>
            <p class="mb-0">Про таке: де брати інформацію про імміграцію, чи приймає Канада
              біженців, як приїхати самим або привезти родичів уже сьогодні.</p>
          </div>
          <div class="p-4">
            <h4 class="fst-italic">Додаток</h4>
            <ol class="list-unstyled mb-0">
              <li class="mb-4" v-for="(post, index) in posts" :key="index">
                <nuxt-link
                    :to="post.slug"
                    class="link"
                >
                {{ post.title }}
                </nuxt-link>
              </li>
            </ol>
          </div>
          <div class="p-4">
            <h4 class="fst-italic">Elsewhere</h4>
            <ol class="list-unstyled">
<!--              <li><a class="link" href="#">Instagram</a></li>-->
              <li><a class="link" target="_blank" href="https://www.facebook.com/groups/ukrtogroup">Facebook</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {formatDate, transliterate, markupToHtml} from '~/utils/globals';

export default {
  head() {
    const title = this.post?.title;
    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post?.description || title,
        },
      ],
    };
  },
  async asyncData({ $content, params, error }) {
    let post;
    let posts;
    try {
      post = await $content('blog', params.blog).fetch();
      debugger
      posts = await $content("blog").only(['title','url_name', 'slug']).fetch();
      posts.unshift({slug:'/', title:'Головна: Правила, процедури та новини для Українців'})
      if (post.sections) {
        post.sections.forEach(section => {
          // console.log(section);
          section.id = transliterate(section.title);
          section.html = markupToHtml(section.body)
        });
      }

    } catch (e) {
      console.error(e);
      error({ message: 'Post not found' });
    }
    return { post, posts };
  },
  methods: {
    markupToHtml,
    formatDate,
    transliterate,
  },
};
</script>
