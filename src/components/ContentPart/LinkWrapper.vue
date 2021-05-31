<template>
  <span @mouseenter="toggleCursorVisibility" @mouseleave="toggleCursorVisibility">
    <slot></slot>
  </span>
</template>

<script>
export default {
  inject: ['toggleCursorVisibility'],
};
</script>
