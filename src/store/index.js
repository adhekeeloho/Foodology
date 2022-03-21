import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    win: false,
    currentSelection: [],
    cards: [
      {
        id: 1,
        title: "Suya Pizza",
        src: require("../assets/1-removebg-preview.png"),
        amount: 40.0,
        quantity: 1,
        price: 40.0,
      },
      {
        id: 2,
        title: "Tomatoe Pizza",
        src: require("../assets/10-removebg-preview.png"),
        amount: 50.0,
        quantity: 1,
        price: 50.0,
      },
      {
        id: 3,
        title: "sussage Pizza",
        src: require("../assets/3-removebg-preview.png"),
        amount: 70.0,
        quantity: 1,
        price: 70.0,
      },
      {
        id: 4,
        title: "Spicey Pizza",
        src: require("../assets/4-removebg-preview.png"),
        amount: 45.0,
        quantity: 1,
        price: 45.0,
      },
      {
        id: 5,
        title: "Chicken Pizza",
        src: require("../assets/5-removebg-preview.png"),
        amount: 30.0,
        quantity: 1,
        price: 30.0,
      },
      {
        id: 6,
        title: "Beef Pizza",
        src: require("../assets/6-removebg-preview.png"),
        amount: 55.0,
        quantity: 1,
        price: 55.0,
      },
      {
        id: 7,
        title: "Vegan Pizza",
        src: require("../assets/10-removebg-preview.png"),
        amount: 50.0,
        quantity: 1,
        price: 50.0,
      },
      {
        id: 8,
        title: "Cheesey Pizza",
        src: require("../assets/8-removebg-preview.png"),
        amount: 60.0,
        quantity: 1,
        price: 60.0,
      },
      {
        id: 9,
        title: "Pepper Pizza",
        src: require("../assets/9-removebg-preview.png"),
        amount: 65.0,
        quantity: 1,
        price: 65.0,
      },
    ],
  },

  mutations: {
    ADD_CART(state, currentSelection) {
      state.currentSelection = [...state.currentSelection, currentSelection];
    },

     INCREASE_QUANTITY(state, currentSelection) {
      state.currentSelection = [...currentSelection];
    },
  },
  actions: {},
  modules: {},
});
