export default {
  props: ['quoteTextEn', 'quoteTextRu'],
  inject: ['changeCursorColor', 'animateClick'],
  data() {
    return {
      quoteSelectorLang: 'ru',
      displayedQuote: this.quoteTextEn,
    };
  },
  watch: {
    quoteTextEn(newValue) {
      this.quoteSelectorLang = 'ru';
      this.displayedQuote = newValue;
    },
  },
  methods: {
    toggleQuoteLanguage() {
      if (this.quoteSelectorLang === 'en') {
        this.quoteSelectorLang = 'ru';
        this.displayedQuote = this.quoteTextEn;
      } else {
        this.quoteSelectorLang = 'en';
        this.displayedQuote = this.quoteTextRu;
      }
    },
  },
};
