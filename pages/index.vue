<template>
  <main class="container">
    <div class="card text-white border-0 mb-5 banner">

    </div>
    <br>
    <!--Info-->
    <div class="row row-cols-1 row-cols-md-3 g-4  ">
      <div class="col" v-for="(category, index) in categories" :key="index">
        <div class="card h-100 border-0 flex align-items-center">
          <div class="card-content">
            <nuxt-link
                :to="category.path"
                :disabled="category.disabled"
            >
              <img class="image-icon" :src="category.icon" :alt="category.label">
            </nuxt-link>
            <div class="card-body px-0">
              <h5 class="card-title">{{ category.label }}</h5>
              <p class="card-text seconday-text fst-italic">{{ category.description }}</p>
            </div>
            <p class="seconday-text" v-if="category.disabled">В розробці</p>
            <nuxt-link
                :to="category.path"
                class="link link-index"
                v-else
            >
              Дізнатись більше
              <svg xmlns="http://www.w3.org/2000/svg" width="102" height="15" viewBox="0 0 102 15"
                   fill="none">
                <path
                    d="M101.691 8.20711C102.081 7.81658 102.081 7.18342 101.691 6.79289L95.3265 0.428932C94.936 0.0384079 94.3029 0.0384079 93.9123 0.428932C93.5218 0.819456 93.5218 1.45262 93.9123 1.84315L99.5692 7.5L93.9123 13.1569C93.5218 13.5474 93.5218 14.1805 93.9123 14.5711C94.3029 14.9616 94.936 14.9616 95.3265 14.5711L101.691 8.20711ZM0.983398 8.5H100.983V6.5H0.983398V8.5Z"
                    fill="#F04D33"></path>
              </svg>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import {transliterate} from '~/utils/globals';

export default {
  name: 'Main',
  data() {
    return {
      categories: [
        {
          path: '/moving',
          icon: '/img/icons/pereiizd.svg',
          label: 'Переїзд',
          description: 'Все про візи та документи для переїзду, виліт та приліт в аеропорт',
        },
        {
          path: '/documents',
          icon: '/img/icons/document.svg',
          label: 'Документи',
          description: 'SIN, OHIP card, Ontario ID, водійські права, tenant insurance тощо',
        },
        {
          path: '/realty',
          icon: '/img/icons/zitlo.svg',
          label: 'Житло',
          description: 'Де шукати, як селитися, на що звертати увагу',
        },
        {
          path: '/jobs',
          icon: '/img/icons/robota.svg',
          label: 'Робота',
          description: 'Програми, події, агенства з допомоги',
        },
        {
          path: '/language',
          icon: '/img/icons/mova.svg',
          label: 'Мова',
          description: 'Курси ESL, безкоштовні ініціативи громади',
        },
        {
          path: '/finances',
          icon: '/img/icons/finance.svg',
          label: 'Фінанси',
          description: 'Перший рахунок, перевезення грошей',
        },
        {
          path: '/help_ukrainians',
          icon: '/img/icons/dopomoga_GRAY.svg',
          label: 'Долучитися',
          description: 'Список місцевих організацій, які допомогають та куди можна прийти та допомогати',
          disabled: true,
        },
        {
          path: '/medicine',
          icon: '/img/icons/medical_GRAY.svg',
          label: 'Медицина',
          description: 'Загальні статті про OHIP, приватне страхування, психологічна допомога',
          disabled: true,
        },
        {
          path: '/children',
          icon: '/img/icons/diti_GRAY.svg',
          label: 'Діти',
          description: 'Школи, садочки, вища школа - правила оформлення та список підтримки',
          disabled: true,
        },
        {
          path: '/life',
          icon: '/img/icons/pobut_GRAY.svg',
          label: 'Побут',
          description: 'Магазини, пункти отримання безкоштовних речей',
          disabled: true,
        },
        {
          path: '/other_provinces',
          icon: '/img/icons/inshi_provincii_GRAY.svg',
          label: 'Інші провінції',
          description: 'Підбірка сайтів, організацій, допомоги в інших провінціях',
          disabled: true,
        },
      ],
      loading: true,
      amount: 1000,
      sortBy: {
        key: 'slug',
        direction: 'desc', // you probably want 'asc' here
      },
    };
  },
  async mounted() {
  },
  methods: {
    transliterate,
  },
};
</script>
