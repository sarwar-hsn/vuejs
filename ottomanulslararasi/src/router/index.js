import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import ProjectsDetail from '../views/ProjectsDetail.vue'
import ContactUs from '../views/ContactUs.vue'
import Blogs from '../views/Blogs.vue'
import BlogsDetails from '../views/BlogsDetails.vue'
import Donate from "../views/Donate.vue"
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
    component: Home,
    meta: {
            title:"Home - Ottomanuluslararasi"
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            title:"About - Ottomanuluslararasi"
        }
        
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects,
        meta: {
            title:"Projects - Ottomanuluslararasi"
        }
    },
    {
        path: '/projects/:id',
        name: 'projectsdetail',
        props:true,
        component: ProjectsDetail,
        meta: {
            title:"Project Details - Ottomanuluslararasi"
        }
    },
    {
        path: '/blogs',
        name: 'blogs',
        component: Blogs,
        meta: {
            title:"Blogs - Ottomanuluslararasi"
        }
    },
    {
        path: '/blogs/:id',
        name: 'blogsdetail',
        props:true,
        component: BlogsDetails,
        meta: {
            title:"Blogs Detail - Ottomanuluslararasi"
        }
    },
    {
        path: '/contactus',
        name: 'contactus',
        component: ContactUs,
        meta: {
            title:"Contact - Ottomanuluslararasi"
        }
    },
    {
        path: '/donate',
        name: 'donate',
        component: Donate,
        meta: {
            title:"Donate - Ottomanuluslararasi"
        }
    },
    {
    path: '/*',
    name: 'notfound',
    component: NotFound,
    meta: {
      title:"Page Not Found - Ottoman Estate"
    }
  }
]

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { selector: to.hash, offset: { x: 0, y: 100 } }
        }
        return { x: 0, y: 0 };
    },
    base: process.env.BASE_URL,routes
})





const DEFAULT_TITLE = 'Ottoman Uluslararasi';
router.afterEach((to, ) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router