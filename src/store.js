import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 223
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {

      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    },
    getTest (context) {
      axios.get('/posts/1')
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
  }
})
store.commit('increment')

console.log(store.state.count)
export default store
