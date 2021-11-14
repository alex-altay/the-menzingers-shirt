import drawings from './data/drawings';
import imageMapResize from './utils/imageMapResizer';

const pictureTitleCoords = {
  coordsBigPicture: '390,180,616,176,761,192,753,257,654,257,569,260,625,244,382,248,314,220,390,180',
  coordsSmallPicture: '192,160,249,131,553,127,555,196,203,196',
};

export default {
  inject: ['changeCursorColor', 'animateClick'],
  data() {
    return {
      drawings,
      pictureCoords: '0,0,1125,0,1025,976,0,976,0,0',
      pictureTitleCoords: { ...pictureTitleCoords },
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    coordsSize() {
      return this.windowWidth > 768 ? 'coordsBigPicture' : 'coordsSmallPicture';
    },
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
    objectFitMapResize() {
      const xAmend = (768 - window.innerWidth) / 2;
      // in landscape the picture is square with the side equals the longest side of the screen
      // so we should use longest of the sides
      // but with phones with long side larger than 768 we don't need yAmend at all, so use 768
      const yAmend = (768 - Math.min(768, Math.max(window.innerHeight, window.innerWidth))) / 2;

      const calculateSingleCoord = (value, index) => {
        const amend = (index % 2 === 0) ? xAmend : yAmend;
        const newValue = value - amend;
        return newValue > 0 ? newValue : 0;
      };

      const changePictureCoords = (picture) => {
        const newPicture = { ...picture };
        const coords = newPicture.coordsSmallPicture;
        const newCoords = coords.split(',').map(calculateSingleCoord).join(',');
        newPicture.coordsSmallPicture = newCoords;
        return newPicture;
      };

      const { coordsSmallPicture } = { ...pictureTitleCoords };
      const newTitleCoords = coordsSmallPicture.split(',').map(calculateSingleCoord).join(',');
      this.pictureTitleCoords.coordsSmallPicture = newTitleCoords;
      this.drawings = drawings.map(changePictureCoords);
    },
    /**
     * This callback is used on window resize to handle situation
     * when on large phones on orientation change the main picture is changes
     * from big one to small one and we need to use different map resizer function
     */
    resizeHandler() {
      this.windowWidth = window.innerWidth;
      if (window.removeResizerListeners) {
        window.removeResizerListeners();
      }
      if (window.innerWidth <= 768) {
        this.objectFitMapResize();
      } else {
        setTimeout(() => {
          imageMapResize();
          window.imageMapResize();
        }, 500);
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.resizeHandler);
    if (window.innerWidth > 768) {
      imageMapResize();
      window.imageMapResize();
    } else {
      this.objectFitMapResize();
    }
  },
};
