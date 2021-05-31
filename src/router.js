import { createRouter, createWebHistory } from 'vue-router';

import MainPage from './components/ContentPart/MainPage/MainPage.vue';
import SongStory from './components/ContentPart/SongStory/SongStory.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'main', component: MainPage },
    { path: '/:activeStory', component: SongStory, props: true },
  ],
});

router.afterEach((to) => {
  const title = document.querySelector('title');
  if (to.name === 'main') {
    title.text = 'The Menzingers Shirt - Stories From Drawings';
  } else {
    const storyName = to.params.activeStory;
    const capitalizedName = storyName.charAt(0).toUpperCase() + storyName.slice(1);
    title.text = `The Menzingers Shirt - ${capitalizedName}`;
  }
});

export default router;
