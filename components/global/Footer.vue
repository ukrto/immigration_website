<template>
  <div class="pt-4 my-md-5 pt-md-5 border-top p-4">
    <div class="container footer-links">
      <div>
          <nuxt-link
              to="/about"
              class="link-secondary text-decoration-none seconday-text">
            Про проект
          </nuxt-link>
          <nuxt-link
              to="/cooperation"
              class="link-secondary text-decoration-none ms-5 seconday-text">
            Співпраця
          </nuxt-link>
          <nuxt-link
              to="/contact"
              class="link-secondary text-decoration-none ms-5 seconday-text">
            Контакти
          </nuxt-link>
      </div>
      <div class="mt-4">
        <a href="https://www.facebook.com/groups/ukrtogroup"  target="_blank">
          <img src="/img/icons/facebook-f-brands.svg" class="social-icon" alt="facebook">
        </a>
        <a href="#" target="_blank">
          <img src="/img/icons/twitter-brands.svg" class="social-icon" alt="twitter">
        </a>
        <a href="#" target="_blank">
          <img src="/img/icons/instagram-brands.svg" class="social-icon" alt="instagram">
        </a>
        <a href="#" target="_blank">
          <img src="/img/icons/linkedin-in-brands.svg" class="social-icon" alt="linkedin">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
