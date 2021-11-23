import ContentPart from './components/ContentPart/ContentPart.vue';
import CustomCursor from './components/CustomCursor/CustomCursor.vue';
import ShirtDrawings from './components/ShirtDrawings/ShirtDrawings.vue';

export default {
  data() {
    return {
      cursorState: {
        cursor_expanded: false,
        cursor_aimed: false,
        cursor_hidden: false,
      },
    };
  },
  methods: {
    changeCursorColor() {
      this.cursorState.cursor_aimed = !this.cursorState.cursor_aimed;
    },
    animateClick() {
      this.cursorState.cursor_expanded = true;
      setTimeout(this.clearCursorExpanding, 550);
    },
    clearCursorExpanding() {
      this.cursorState.cursor_expanded = false;
    },
    toggleCursorVisibility() {
      this.cursorState.cursor_hidden = !this.cursorState.cursor_hidden;
    },
    linkHoverHandler(e) {
      if (e.target.classList.contains('link')) {
        this.toggleCursorVisibility();
      }
    },
    internalLinksClickHandler(e) {
      if (e.target.classList.contains('link_internal')) {
        const { page } = e.target.dataset;
        this.toggleCursorVisibility();
        this.$router.push(page);
      }
    },
  },
  provide() {
    return {
      changeCursorColor: this.changeCursorColor,
      animateClick: this.animateClick,
      linkHoverHandler: this.linkHoverHandler,
      internalLinksClickHandler: this.internalLinksClickHandler,
    };
  },
  name: 'App',
  components: {
    'content-part': ContentPart,
    'custom-cursor': CustomCursor,
    'shirt-drawings': ShirtDrawings,
  },
};
