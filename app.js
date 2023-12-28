import Settings from "./views/Settings.js";
import Faq from "./views/Faq.js";
import Recommendations from "./views/Recommendations.js";
import { Logo } from "../components/Icons.js";

const { ref } = Vue;

// Create the main app
const App = {
  components: {
    Logo,
  },
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
    { path: "/", component: Settings },
    { path: "/faq", component: Faq },
    { path: "/recommendations", component: Recommendations },
  ],
});

// Mount the app
const app = Vue.createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
