<template>
  <div class="story">
    <div class="story-text">
      <p class="paragraph paragraph_long-margin">The Menzingers невероятная группа, я люблю их мерч и&nbsp;однажды мне стало любопытно о чём говорят рисунки на этой футболке. Каждый рисунок ожидаемо оказался связан с одной из песен. Если вам интересно чем, наводите и кликайте. Чаще всего я понятия не&nbsp;имею "что хотел сказать автор", а интерпретация это просто моё мнение</p>
      <p class="paragraph paragraph_long-margin">Картинки с&nbsp;футболки нарисовал преступно талантливый иллюстратор Craig&nbsp;Horky, вот его
        <link-wrapper><a class="link" href="https://www.craighorky.com/" target="_blank">сайт</a></link-wrapper> и
        <link-wrapper><a class="link" href="https://www.instagram.com/craighorky/" target="_blank">инстаграм</a></link-wrapper>.
        Там куча другого-всякого, активно рекомендую</p>
      <p class="paragraph paragraph_long-margin"><span v-if="isSmallScreen">Этот сайт работает на смартфонах и планшетах, но лучше смотреть его с экрана компьютера. </span>
        Мнения, проклятия, восторги или предложения можно писать
        <link-wrapper>
          <a class="link" href="https://vk.com/trutanov.alex" target="_blank">в&nbsp;вк</a>
        </link-wrapper>
      </p>
      <p class="paragraph paragraph_long-margin">Официальный сайт The Menzingers
        <link-wrapper><a class="link" href="https://themenzingers.com/" target="_blank">здесь</a></link-wrapper></p>
      <p class="paragraph paragraph_long-margin">Привет</p>
    </div>
    <div v-if="isSmallScreen" class="band-logo story__band-logo" @click="smoothScrollToPicture"></div>
    <a v-else class="band-logo story__band-logo" href="https://www.youtube.com/watch?v=ghTYSXQnqbg" target="_blank">
    </a>
  </div>
</template>

<script>
import LinkWrapper from '../LinkWrapper.vue';

export default {
  components: {
    'link-wrapper': LinkWrapper,
  },
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
};
</script>

<style lang="less" src="./MainPage.less"></style>
