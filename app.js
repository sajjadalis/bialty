import Home from "./views/Home.js";
import Faq from "./views/Faq.js";
import Recommendations from "./views/Recommendations.js";

const { ref } = Vue;

// Create the main app
const App = {
  setup() {
    const activeIndex = ref("1");
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
    };

    return {
      activeIndex,
      handleSelect,
    };
  },
};

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/faq", component: Faq },
    { path: "/recommendations", component: Recommendations },
  ],
});

// Mount the app
const app = Vue.createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
