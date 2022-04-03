<template>
  <main class="container">
    <div class="card text-white border-0 mb-5 banner">

    </div>
    <br>
    <!--Info-->
    <div class="row row-cols-1 row-cols-md-3 g-4  ">
      <div v-if="posts.length" class="col" v-for="(post, index) in posts" :key="index">
        <div class="card h-100 border-0">
          <nuxt-link
              :to="`${category}/${post.slug}`"
              class="article-link"
          >
            <img class="image-main" :src="post.cover" :alt="post.title">
          </nuxt-link>
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">Оновлено {{formatDate(post.createdAt)}}</p>
            <nuxt-link
                :to="`${category}/${post.slug}`"
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
import {formatDate, markupToHtml, transliterate} from '~/utils/globals';

export default {
  name: 'Category',
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
  async asyncData({ $content, params, error }) {
    const data = {
      posts: [],
      postType: 'blog',
      sortBy: {
        key: 'slug',
        direction: 'desc' // you probably want 'asc' here
      },
      category: params.category,
    };
    try {
      data.posts = await $content(data.postType)
          .sortBy(data.sortBy.key, data.sortBy.direction)
          .where({ category: data.category })
          .fetch()
          .catch((err) => console.error(err) || []);
    } catch (e) {
      console.error(e);
      error({ message: 'Post not found' });
    }
    return data;
  },
  methods: {
    formatDate,
    transliterate,
  },
}
</script>
