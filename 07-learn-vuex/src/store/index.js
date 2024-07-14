import { createStore } from "vuex";
import { CHANGE_INFO } from "./mutation_types";
// import { reject, resolve } from 'core-js/fn/promise'
import homeModule from "../store/modules/home";
import counterModule from "../store/modules/counter";

const store = createStore({
  state: () => ({
    // 模拟数据
    // counter: 100,
    rootCounter: 100,
    name: "coderwhy",
    level: 100,
    avatarURL: "http://xxxxx",
    friends: [
      { id: 111, name: "why", age: 20 },
      { id: 112, name: "kobe", age: 30 },
      { id: 112, name: "james", age: 25 },
    ],

    // 服务器数据
    // banners: [],
    // recommends: []
  }),
  getters: {
    // 1.基本使用
    doubleCounter(state) {
      return state.counter * 2;
    },
    totalAge(state) {
      return state.friends.reduce((preValue, item) => {
        return preValue + item.age;
      }, 0);
    },
    // 2.在该getters属性中，获取其他的getters
    message(state, getters) {
      return `name:${state.name} level:${state.level} friendTotalAge:${getters.totalAge}`;
    },
    // 3.getters是可以返回一个函数的，调用这个函数返回参数（了解）
    getFriendById(state) {
      return (id) => {
        const friend = state.friends.find((item) => item.id === id);
        return friend;
      };
    },
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    changeName(state, payload) {
      state.name = payload;
    },
    incrementLevel(state) {
      state.level++;
    },
    [CHANGE_INFO](state, newInfo) {
      state.level = newInfo.level;
      state.name = newInfo.name;

      // 重要的原则：不要在mutation中执行异步操作
      // fetch("xxxx").then(res => {
      //   res.json().then(res => {
      //     state.name = res.name
      //   })
      // })
    },
    // changeBanners(state, banners) {
    //   state.banners = banners
    // },
    // changeRecommends(state, recommends) {
    //   state.recommends = recommends
    // }
  },
  actions: {
    incrementAction(context) {
      // console.log(context.commit)
      // console.log(context.getters)
      // console.log(context.state)
      context.commit("increment");
    },
    changeNameAction(context, payload) {
      return new Promise((resolve, reject) => {
        context.commit("changeName", "payload");
        resolve();
      });
    },
    // fetchHomeMultidataAction(context) {
    //   // 1.返回promise，给promise设置then
    //   // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
    //   //   res.json().then(data => {
    //   //     console.log(data)
    //   //   })
    //   // })
    //   // 2.promise链式调用
    //   // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
    //   //   return res.json()
    //   // }).then(data => {
    //   //   console.log(data)
    //   // })

    //   return new Promise(async (resolve, reject) => {
    //     // 3.await/async
    //     const res = await fetch("http://123.207.32.32:8000/home/multidata")
    //     const data = await res.json()

    //     // 修改state数据
    //     context.commit("changeBanners", data.data.banner.list)
    //     context.commit("changeRecommends", data.data.recommend.list)

    //     resolve("aaaaa")
    //   })
    // }
  },
  modules: {
    home: homeModule,
    counter: counterModule,
  },
});

export default store;
