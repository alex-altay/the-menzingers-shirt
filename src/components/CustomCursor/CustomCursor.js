export default {
  props: ['cursorState'],
  data() {
    return {
      styleObject: {
        top: '-52px',
        left: '-52px',
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

    const addCustomCursorMoving = () => {
      if (!('ontouchstart' in window) && window.innerWidth > 768) {
        body.addEventListener('mousemove', this.moveCursor);
        body.addEventListener('mouseenter', this.showCursor);
        body.addEventListener('mouseleave', this.hideCursor);
      }
    };

    // Only add custom cursor when we have a mouse and when it is not a touch screen
    body.addEventListener('mousemove', function initCustomCursor() {
      addCustomCursorMoving();
      body.removeEventListener('mousemove', initCustomCursor);
    });
  },
};
