import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    x : '0',
    y : '0'
  },
  mutations: {   
    setX (state, x) {
        state.x = x
    },
    setY (state, y) {
        state.y = y
    }
  },
  getters: {
    getX (state) {
      return state.x
    },
    getX (state) {
        return state.y
    }
   
  }
//   actions: {
//     fetchData (context) {
//       fetch('http://localhost:3000/students')
//         .then(response => {
//           return response.json()
//         })
//         .then(data => {
//           context.commit('setStudents', data)
//         })
//     }
//   }
})

export default store