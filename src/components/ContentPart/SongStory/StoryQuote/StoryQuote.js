/* eslint no-param-reassign: ["error", { "props": false }] */
export default {
  props: ['quoteTextEn', 'quoteTextRu'],
  inject: ['changeCursorColor', 'animateClick'],
  data() {
    return {
      quoteSelectorLang: 'ru',
      quoteEn: '',
      quoteRu: '',
    };
  },
  watch: {
    quoteTextEn() {
      this.quoteSelectorLang = 'ru';
      this.quoteEn = this.wrapCharactersInTags(this.quoteTextEn);
      this.quoteRu = this.wrapCharactersInTags(this.quoteTextRu);
    },
  },
  created() {
    this.quoteEn = this.wrapCharactersInTags(this.quoteTextEn);
    this.quoteRu = this.wrapCharactersInTags(this.quoteTextRu);
  },
  methods: {
    toggleQuoteLanguage() {
      if (this.quoteSelectorLang === 'en') {
        this.quoteSelectorLang = 'ru';
      } else {
        this.quoteSelectorLang = 'en';
      }
    },
    wrapCharactersInTags(quote) {
      const lines = quote.split('<br>');
      const newlines = lines.map((line) => {
        const newline = line.split('')
          .map((char) => {
            let newChar = char;
            if (char === ' ') {
              newChar = '&nbsp;';
            }
            return `<span class='char'>${newChar}</span>`;
          })
          .join('');
        return `<p>${newline}</p>`;
      });
      return newlines.join('');
    },
    beforeEnter(el) {
      el.childNodes.forEach((line) => {
        line.childNodes.forEach((char) => {
          char.style.transform = 'rotateY(90deg)';
        });
      });
    },
    enter(el, done) {
      let degree = 0;
      const rotateEveryChar = () => {
        el.childNodes.forEach((line) => {
          line.childNodes.forEach((char) => {
            char.style.transform = `rotateY(${-(270 + degree)}deg)`;
          });
        });
      };
      const interval = setInterval(() => {
        rotateEveryChar();
        degree += 6;
        if (degree > 90) {
          clearInterval(interval);
          done();
        }
      }, 1);
    },
    leave(el, done) {
      let degree = 0;
      const rotateEveryChar = () => {
        el.childNodes.forEach((line) => {
          line.childNodes.forEach((char) => {
            char.style.transform = `rotateY(${degree}deg)`;
          });
        });
      };
      const interval = setInterval(() => {
        rotateEveryChar();
        degree += 3;
        if (degree > 90) {
          clearInterval(interval);
          done();
        }
      }, 1);
    },
  },
};
