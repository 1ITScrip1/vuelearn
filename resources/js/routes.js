import Vue from "vue";
import VueRouter from "vue-router";
import firstpage from "./components/Pages/vueroutefirst.vue";
import newroute from "./components/Pages/newroute.vue"; 
import Hooks from "./components/Pages/basic/hooks.vue";
import Methods from "./components/Pages/basic/methods.vue";
import Home from "./components/Pages/home.vue";
import Tags from "./components/Pages/tags.vue";

Vue.use(VueRouter);

const routes=[

//project routes
{
    path:'/',
    component: Home,
},

{
    path:'/tags',
    component: Tags,
},






    //learning routes
{
    path:'/vueroute',
    component: firstpage,
},

{
    path:'/newroute',
    component: newroute, 
},

{
    path:'/hooks',
    component: Hooks, 
},

{
    path:'/methods',
    component: Methods, 
},


]

export default new VueRouter({
    mode:'history',
    routes
})