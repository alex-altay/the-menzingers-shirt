<template>
  <div class="story">
    <div class="story-text" @mouseover="linkHoverHandler" @mouseout="linkHoverHandler">
      <p class="paragraph paragraph_long-margin">The Menzingers невероятная группа, я люблю
        их&nbsp;мерч и&nbsp;однажды мне стало любопытно о чём говорят рисунки на этой футболке.
        Каждый рисунок ожидаемо оказался связан с одной из&nbsp;песен.
        Если вам интересно чем, наводите и&nbsp;кликайте. Чаще всего я понятия
        не&nbsp;имею "что хотел сказать автор", а интерпретация это просто моё мнение.</p>
      <p class="paragraph paragraph_long-margin">Картинки с&nbsp;футболки нарисовал
        преступно талантливый иллюстратор Craig&nbsp;Horky, вот его
        <a class="link" href="https://www.craighorky.com/" target="_blank">сайт</a>
        <span class="no-wrap"> и <a class="link" href="https://www.instagram.com/craighorky/" target="_blank">инстаграм</a></span>.
        Там куча другого-всякого, активно рекомендую.</p>
      <p class="paragraph paragraph_long-margin"><span v-if="isSmallScreen">Этот сайт работает на
        смартфонах и планшетах, но&nbsp;лучше смотреть его с&nbsp;экрана компьютера. </span>
        Мнения, проклятия, восторги или предложения можно писать в&nbsp;<a class="link" href="https://t.me/altayna" target="_blank">телеграм</a>&nbsp;или <a class="link" href="https://vk.com/trutanov.alex" target="_blank">вк</a>.
      </p>
      <p class="paragraph paragraph_long-margin">Официальный сайт The Menzingers
        <a class="link" href="https://themenzingers.com/" target="_blank">здесь</a>.</p>
      <p class="paragraph paragraph_long-margin">Привет.</p>
    </div>
    <div v-if="isSmallScreen" class="band-logo story__band-logo" @click="smoothScrollToPicture"></div>
    <a v-else class="band-logo story__band-logo" href="https://www.youtube.com/watch?v=ghTYSXQnqbg" target="_blank">
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    smoothScrollToPicture() {
      document.getElementById('background').scrollIntoView({ behavior: 'smooth' });
    },
  },
  computed: {
    isSmallScreen() {
      return this.windowWidth <= 1024;
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    });
  },
  inject: ['linkHoverHandler'],
};
</script>

<style lang="less" src="./MainPage.less"></style>
