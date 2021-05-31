<template>
  <div class="story">
    <story-title :songName="songName" :albumName="albumName"></story-title>
    <story-quote :quoteTextEn="quoteTextEn" :quoteTextRu="quoteTextRu"></story-quote>
    <div class="story-text story__story-text" v-html="story"></div>
    <streaming-links
      :geniusLink="geniusLink"
      :appleMusicLink="appleMusicLink"
      :spotifyLink="spotifyLink"
      :youtubeMusicLink="youtubeMusicLink"
      :yandexMusicLink="yandexMusicLink">
    </streaming-links>
  </div>
</template>

<script src="./SongStory.js"></script>
<style lang="less" src="./SongStory.less"></style>
