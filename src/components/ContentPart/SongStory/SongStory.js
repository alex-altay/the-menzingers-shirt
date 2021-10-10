import stories from './data/stories';
import StoryTitle from './StoryTitle/StoryTitle.vue';
import StoryQuote from './StoryQuote/StoryQuote.vue';
import StreamingLinks from './StreamingLinks/StreamingLinks.vue';

export default {
  data() {
    return {
      songName: '',
      albumName: '',
      quoteTextEn: '',
      quoteTextRu: '',
      story: '',
      geniusLink: '',
      appleMusicLink: '',
      spotifyLink: '',
      youtubeMusicLink: '',
      yandexMusicLink: '',
    };
  },
  methods: {
    prepareData(storyName) {
      const songStory = stories.find((story) => storyName === story.name);
      if (songStory) {
        this.songName = songStory.songName;
        this.albumName = songStory.albumName;
        this.quoteTextEn = songStory.quoteTextEn;
        this.quoteTextRu = songStory.quoteTextRu;
        this.story = songStory.story;
        this.geniusLink = songStory.geniusLink;
        this.appleMusicLink = songStory.appleMusicLink;
        this.spotifyLink = songStory.spotifyLink;
        this.youtubeMusicLink = songStory.youtubeMusicLink;
        this.yandexMusicLink = songStory.yandexMusicLink;
      } else {
        this.$router.push('/'); // TODO Замени на 404ую?
      }
    },
  },
  watch: {
    activeStory(newValue) {
      this.prepareData(newValue);
    },
  },
  created() {
    this.prepareData(this.activeStory);
  },
  props: ['activeStory'],
  inject: ['linkHoverHandler'],
  components: {
    'story-title': StoryTitle,
    'story-quote': StoryQuote,
    'streaming-links': StreamingLinks,
  },
};
