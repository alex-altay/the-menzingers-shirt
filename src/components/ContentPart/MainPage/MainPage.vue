<template>
  <div class="story">
    <div class="story-text">
      <p class="paragraph paragraph_long-margin">The Menzingers невероятная группа, я люблю их мерч и однажды мне стало любопытно о чём говорят рисунки на этой футболке. Каждый рисунок ожидаемо оказался связан с одной из песен. Если вам интересно чем, наводите и кликайте. Чаще всего я понятия не имею "что хотел сказать автор", а интерпретация это просто моё мнение</p>
      <p class="paragraph paragraph_long-margin">Картинки с футболки нарисовал преступно талантливый иллюстратор Craig&nbsp;Horky, вот его
        <link-wrapper><a class="link" href="https://www.craighorky.com/" target="_blank">сайт</a></link-wrapper> и
        <link-wrapper><a class="link" href="https://www.instagram.com/craighorky/" target="_blank">инстаграм</a></link-wrapper>.
        Там куча другого-всякого, активно рекомендую</p>
      <p class="paragraph paragraph_long-margin">Мнения, проклятия, восторги или предложения можно писать
        <link-wrapper>
          <a class="link" href="https://vk.com/trutanov.alex" target="_blank">в&nbsp;вк</a>
        </link-wrapper>
      </p>
      <p class="paragraph paragraph_long-margin">Официальный сайт The Menzingers
        <link-wrapper><a class="link" href="https://themenzingers.com/" target="_blank">здесь</a></link-wrapper></p>
      <p class="paragraph paragraph_long-margin">Привет</p>
    </div>
    <a class="band-logo story__band-logo" href="https://www.youtube.com/watch?v=ghTYSXQnqbg" target="_blank"><img class="band-logo__image" src="../../../assets/icons/band-logo.png" alt="The Menzingers Logo"></a>
  </div>
</template>

<script>
import LinkWrapper from '../LinkWrapper.vue';

export default {
  components: {
    'link-wrapper': LinkWrapper,
  },
};
</script>

<style lang="less" src="./MainPage.less"></style>
