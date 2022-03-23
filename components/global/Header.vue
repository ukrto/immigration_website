<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-light bg-custom1" aria-label="Third navbar example">
    <div class="container-fluid header">
      <nuxt-link
          to="/"
          class="navbar-brand col-1 logo">
        <img src="/img/_uit_logo_color.png" alt="" width="50px">
      </nuxt-link>
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon bg-custom1"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarsExample03">
        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"> <span class="nav-text"> Прихисток</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"> <span class="nav-text"> Переїзд</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true"><span class="nav-text">Життя</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true"><span class="nav-text">Події</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true"><span class="nav-text">UkrToOffers</span></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>
