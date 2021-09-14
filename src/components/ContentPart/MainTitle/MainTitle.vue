<template>
  <div
    class="title information__title"
    :class="{'internal-clickable': this.$route.path !== '/'}"
    @click="backToMain"
    @mouseenter="aimCursor"
    @mouseleave="aimCursor">
  </div>
</template>

<script>
export default {
  inject: ['animateClick', 'changeCursorColor'],
  methods: {
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
};
</script>

<style lang="less" src="./MainTitle.less"></style>
