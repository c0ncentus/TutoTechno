import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import About from "./components/About.vue";
import App from "./App.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "App",
        component: App as any
    },
    {
        path: "/Home",
        name: "Home",
        component: HelloWorld
    },
    {
        path: "/about",
        name: "About",
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;