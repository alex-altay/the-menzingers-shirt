<template>
  <div class="streaming">
    <p class="paragraph paragraph_centered">Читать весь текст и слушать песню:</p>
    <div class="services">
      <a class="service" :href="geniusLink" target="_blank">
        <div class="service__image service__image_genius"></div>
        <p class="service__name">Genius</p>
      </a>
      <a class="service" :href="appleMusicLink" target="_blank">
        <div class="service__image service__image_apple"></div>
        <p class="service__name">Apple Music</p>
      </a>
      <a class="service" :href="spotifyLink" target="_blank">
        <div class="service__image service__image_spotify"></div>
        <p class="service__name">Spotify</p>
      </a>
      <a class="service" :href="youtubeMusicLink" target="_blank">
        <div class="service__image service__image_youtube"></div>
        <p class="service__name">YouTube Music</p>
      </a>
      <a class="service" :href="yandexMusicLink" target="_blank">
        <div class="service__image service__image_yandex"></div>
        <p class="service__name">Яндекс Музыка</p>
      </a>
    </div>
  </div>
</template>

<script src="./StreamingLinks.js"></script>
<style lang="less" src="./StreamingLinks.less"></style>
