<template>
  <main class="container">
    <div class="card text-white border-0 mb-5">
      <img class="main-image" src="/img/site_main_pic_1320.jpg" alt="...">
      <div class="card-img-overlay">
        <p class="card-text custom-text">5 березня 2022</p>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class=" border-index mb-5">
        <div>
          <h2 class=""> <span class="header-main ">Правила, процедури та новини для Українців, які тікають від війни.</span></h2>
        </div>
        <div>
          <h2 class=""><span class="header-main">(Не)біженство в Канаду.</span></h2>
        </div>
        <div>
          <p> На Facebook є тематична група підтримки:<a class="link link-index " href="https://www.facebook.com/groups/ukrainianstocanada" target="_blank"> Україна та Канада: імміграція, біженство, притулок.</a></p>
        </div>
      </div>
    </div>
    <br>
    <!--Info-->
    <div class="row row-cols-1 row-cols-md-3 g-4  ">
      <div v-if="posts.length" class="col" v-for="(post, index) in posts" :key="index">
        <div class="card h-100 border-0">
          <nuxt-link
              :to="`${postType}/${post.slug}`"
              class="article-link"
          >
            <img class="image-main" :src="post.cover" :alt="post.title">
          </nuxt-link>
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">Оновлено {{formatDate(post.createdAt)}}</p>
            <nuxt-link
                :to="`${postType}/${post.slug}`"
                class="link link-index"
            >
              Дізнатись більше
              <svg xmlns="http://www.w3.org/2000/svg" width="102" height="15" viewBox="0 0 102 15" fill="none">
                <path d="M101.691 8.20711C102.081 7.81658 102.081 7.18342 101.691 6.79289L95.3265 0.428932C94.936 0.0384079 94.3029 0.0384079 93.9123 0.428932C93.5218 0.819456 93.5218 1.45262 93.9123 1.84315L99.5692 7.5L93.9123 13.1569C93.5218 13.5474 93.5218 14.1805 93.9123 14.5711C94.3029 14.9616 94.936 14.9616 95.3265 14.5711L101.691 8.20711ZM0.983398 8.5H100.983V6.5H0.983398V8.5Z" fill="#F04D33"></path>
              </svg>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div v-else-if="loading" class="cards">
        <div v-for="placeholder in placeholderClasses" :key="placeholder.id" class="card">
          <content-placeholders :rounded="true" :class="placeholder">
            <content-placeholders-heading />
          </content-placeholders>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import {formatDate, transliterate} from '~/utils/globals';

export default {
  name: 'Main',
  data() {
    return {
      posts: [],
      loading: true,
      postType: 'blog',
      amount: 1000,
      sortBy: {
        key: 'slug',
        direction: 'desc' // you probably want 'asc' here
      }
    }
  },
  computed: {
    placeholderClasses() {
      const classes = ['w-full','w-2/3','w-5/6'];
      return [...Array.from({ length: this.amount }, (v, i) => classes[i % classes.length])]; // repeats classes after one another
    }
  },
  async mounted() {
    this.loading = true;
    this.posts = await this.fetchPosts();
    this.loading = false;
  },
  methods: {
    formatDate,
    transliterate,
    async fetchPosts(
        postType = this.postType,
        amount = this.amount,
        sortBy = this.sortBy,
    ) {
      return this.$content(postType)
          .sortBy(sortBy.key, sortBy.direction)
          .limit(amount)
          .fetch()
          .catch((err) => console.error(err) || []);
    }
  },
}
</script>
