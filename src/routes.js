import PageHome from './components/PageHome.vue';
import PageGallery from './components/PageGallery.vue';
// import Page404 from './components/Page404.vue';

export const routes = [
// {path: '', component: Home},
{path: '/', name: 'root', redirect: '/index'},
{path: '/index', name: 'home', component: PageHome},
{path: '/gallery', name: 'gallery', component: PageGallery},
{path: "**", name: "http404", component: PageHome}
];