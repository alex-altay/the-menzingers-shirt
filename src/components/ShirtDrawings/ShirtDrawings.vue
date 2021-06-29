<template>
  <div class="left-border-hack"></div>
  <img class="background" src="../../assets/bg-crop.png" usemap="#drawings">
  <map name="drawings">
    <area
      v-for="drawing in drawings"
      class="pictures internal-clickable"
      :key="drawing.id"
      @click="animateClick();choosePicture(drawing.name);"
      @mouseenter="changeCursorColor"
      @mouseleave="changeCursorColor"
      shape="poly"
      :coords="drawing.coords">

    <area
      class="pictures"
      :class="{'internal-clickable': $route.path !== '/'}"
      @click="backToMain"
      @mouseenter="aimCursor"
      @mouseleave="aimCursor"
      shape="poly"
      coords="390,180,616,176,761,192,753,257,654,257,569,260,625,244,382,248,314,220,390,180">

    <area class="shirt" shape="poly" coords="0,0,1125,0,1025,976,0,976,0,0">

  </map>
</template>

<script>
import drawings from './data/drawings';
import imageMapResize from './utils/imageMapResizer.min';

export default {
  inject: ['changeCursorColor', 'animateClick'],
  data() {
    return {
      drawings,
    };
  },
  methods: {
    choosePicture(name) {
      this.$router.push(`/${name}`);
    },
    backToMain() {
      if (this.$route.path !== '/') {
        this.animateClick();
        this.$router.push('/');
        this.changeCursorColor();
      }
    },
    aimCursor() {
      if (this.$route.path !== '/') {
        this.changeCursorColor();
      }
    },
  },
  mounted() {
    imageMapResize();
  },
};
</script>

<style lang="less" src="./ShirtDrawings.less"></style>
