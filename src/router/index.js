import Vue from "vue";
import VueRouter from "vue-router";
//import Home from '../views/Home.vue'
import EventCreate from "../views/EventCreate.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventList,
    },
    {
      path: "/event",
      name: "event-show",
      component: EventShow,
    },
    {
      path: "/event/create",
      name: "event-create",
      component: EventCreate,
    },
  ],
});
