<template>
  <div class="left-border-hack"></div>

  <picture>
    <source srcset="../../assets/small.jpg" media="(max-width: 768px)" usemap="#drawings-small">
    <img id="background" class="background noSelect" src="../../assets/big.jpg" usemap="#drawings">
  </picture>

  <map name="drawings">
    <area
      v-for="drawing in drawings"
      class="pictures internal-clickable"
      :key="drawing.id"
      :data-name="drawing.name"
      @click="animateClick();choosePicture(drawing.name);"
      @mouseenter="changeCursorColor"
      @mouseleave="changeCursorColor"
      shape="poly"
      :coords="drawing[coordsSize]">

    <area
      class="pictures"
      :class="{'internal-clickable': $route.path !== '/'}"
      @click="backToMain"
      @mouseenter="aimCursor"
      @mouseleave="aimCursor"
      shape="poly"
      :coords="pictureTitleCoords[coordsSize]">

    <area v-if="coordsSize === 'coordsBigPicture'"
      class="shirt"
      shape="poly"
      :coords="pictureCoords">
  </map>
</template>

<script src="./ShirtDrawings.js"></script>

<style lang="less" src="./ShirtDrawings.less"></style>
