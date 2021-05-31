export default {
  props: ['cursorState'],
  data() {
    return {
      styleObject: {
        top: '-32px',
        left: '-32px',
      },
    };
  },
  methods: {
    moveCursor($event) {
      this.styleObject.top = `${$event.pageY - 16}px`;
      this.styleObject.left = `${$event.pageX - 16}px`;
    },
    showCursor() {
      this.styleObject.display = 'block';
    },
    hideCursor() {
      this.styleObject.display = 'none';
    },
  },
  mounted() {
    const body = document.querySelector('body');
    body.addEventListener('mousemove', this.moveCursor);
    body.addEventListener('mouseenter', this.showCursor);
    body.addEventListener('mouseleave', this.hideCursor);
  },
};
