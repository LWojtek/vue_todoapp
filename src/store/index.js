import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    filteredTodos: []
  },
  mutations: {

    addNewTodo: (state, {todo, id, completed}) => {
      state.todos.push({
        todo, id, completed
      })
    },
    removeTodo: (state, todo) => {
      state.todos.splice(state.todos.indexOf(todo), 1)
    },



    showCompleted: (state, todo) => {
      state.filteredTodos = todo
    },
    showUncompleted: (state, todo) => {
      state.filteredTodos = todo
    },



    showAll: (state) => {
      state.filteredTodos = state.todos
    },

    markComplete: (state, todo) => {
        state.todos[state.todos.indexOf(todo)].completed = true;   
    },
    markUncomplete: (state, todo) => {
      state.todos[state.todos.indexOf(todo)].completed = false;  
    }


  },
  actions: {
    newTodo: ({commit},  {todo, id, completed} ) => {
      commit('addNewTodo', {todo, id, completed})
    },
    remTodo: ({commit}, todo) => {
      commit('removeTodo', todo)
    },



    showCompleted: ({commit}, todo) => {
      commit('showCompleted', todo)
    },
    showUncompleted: ({commit}, todo) => {
      commit('showUncompleted', todo)
    },
    showAll: ({commit}, todo ) => {
      commit('showAll', todo)
    },


    markCompleted: ({commit}, todo) => {
      commit('markComplete', todo)
    },
    markUncompleted: ({commit}, todo) => {
      commit('markUncomplete', todo)
    },
  },
  modules: {
  }
})
