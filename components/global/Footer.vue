<template>
  <div class="pt-4 my-md-5 pt-md-5 border-top p-4">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md">
          <img class="mb-2" src="/img/_uit_logo_color.png" alt="" width="44" height="49">
          <small class="d-block mb-3 text-muted">© 2017–2021</small>
        </div>
        <div class="col-6 col-md">
          <h5>Теми</h5>
          <ul class="list-unstyled text-small">
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Переїзд в Канаду</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Життя в Торонто</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Події громади</a></li>
            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">UkrTO Offers</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>Про нас</h5>
          <ul class="list-unstyled text-small">
            <li class="mb-1">
              <nuxt-link
                to="/about"
                class="link-secondary text-decoration-none">
              Наша місія
              </nuxt-link>
            </li>
            <li class="mb-1">
              <nuxt-link
                to="/cooperation"
                class="link-secondary text-decoration-none">Співпраця
              </nuxt-link>
            </li>
            <li class="mb-1">
              <nuxt-link
                to="/rules"
                class="link-secondary text-decoration-none">Правила спільноти
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
