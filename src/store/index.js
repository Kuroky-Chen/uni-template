import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		globalLoading: true
	},
	mutations: {
		set_loading(state, data) {
			state.globalLoading = data
		},
	},
	getters: {

	},
	actions: {

	}
})

export default store
