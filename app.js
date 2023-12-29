import Settings from "./views/Settings.js";
import Wizard from "./views/Wizard.js";
import Faq from "./views/Faq.js";
import Recommendations from "./views/Recommendations.js";
import {
  Logo,
  Sun,
  Moon,
  SettingIcon,
  WandIcon,
  FaqIcon,
  RecsIcon,
} from "../components/Icons.js";

const { ref, onMounted, watch } = Vue;

// Create the main app
const App = {
  components: {
    Logo,
    Sun,
    Moon,
    SettingIcon,
    WandIcon,
    FaqIcon,
    RecsIcon,
  },
  setup() {
    const activeIndex = ref("1");
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
    };

    const isDark = ref(false);

    onMounted(() => {
      let dark = localStorage.getItem("isDark");
      if (dark == "true") {
        document.documentElement.classList.add("dark");
        isDark.value = true;
      } else if (!dark) {
        document.documentElement.classList.add("dark");
        isDark.value = true;
      } else {
        document.documentElement.classList.remove("dark");
      }
    });

    watch(isDark, val => {
      if (val) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("isDark", val);
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("isDark", val);
      }
    });

    return {
      activeIndex,
      handleSelect,
      isDark,
    };
  },
};

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: "/", component: Settings, name: "Settings" },
    { path: "/wizard", component: Wizard, name: "Settings Wizard" },
    { path: "/faq", component: Faq, name: "Faq" },
    {
      path: "/recommendations",
      component: Recommendations,
      name: "Recommendations",
    },
  ],
});

// Mount the app
const app = Vue.createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
