export default {
  props: ['quoteTextEn', 'quoteTextRu'],
  inject: ['changeCursorColor', 'animateClick'],
  data() {
    return {
      quoteSelectorLang: 'ru',
    };
  },
  watch: {
    quoteTextEn() {
      this.quoteSelectorLang = 'ru';
    },
  },
  methods: {
    toggleQuoteLanguage() {
      if (this.quoteSelectorLang === 'en') {
        this.quoteSelectorLang = 'ru';
      } else {
        this.quoteSelectorLang = 'en';
      }
    },
  },
};
