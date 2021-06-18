<template>
  <div class="quote story__quote">
    <p class="quote__line quote__line_long"><span class="quote__mark">"</span></p>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false" mode="out-in">
      <div class='quote__text quote__text' v-if="quoteSelectorLang === 'ru'" v-html="quoteEn"></div>
      <div class='quote__text quote__text' v-else v-html="quoteRu"></div>
    </transition>
    <p class="quote__line quote__line_short"><span class="quote__button internal-clickable"
      @mouseenter="changeCursorColor"
      @mouseleave="changeCursorColor"
      @click="animateClick(); toggleQuoteLanguage();">{{ quoteSelectorLang }}</span></p>
  </div>
</template>

<script src="./StoryQuote.js"></script>
<style lang="less" src="./StoryQuote.less"></style>
