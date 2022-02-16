import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound.vue';
import NewPosts from './pages/posts/NewPosts.vue';
import HomePage from './pages/home/HomePage.vue';
import AddPost from './pages/addPost/AddPost.vue';
import UserAuth from './pages/auth/UserAuth.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomePage },
    { path: '/posts', component: NewPosts },
    { path: '/:notFound(.*)', component: NotFound },
    { path: '/addpost', component: AddPost },
    { path: '/auth', component: UserAuth },
  ],
});

export default router;
