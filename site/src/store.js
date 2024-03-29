import Vue from 'vue'
import Vuex from 'vuex'

//defaults
var terminal = {open: true, x:450, y:560}
var portfolio = {open: false, x: 50, y:560};
var contact = {open: false, x: 150, y: 560};
var github = {open: false, x: 250, y:560};
var linkedIn = {open: false, x: 350, y:560};
var sticky = {open: true, x: 0, y:0};

Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		terminal,
		contact,
		portfolio,
		github,
		linkedIn,
		sticky,
	},
	
	mutations: {
		open(state, name) {
			Vue.set(state[name], 'open', true)
		},
		toggle(state, name) {
			Vue.set(state[name], 'open', !state[name].open)
		},
		close(state, name) {
			Vue.set(state[name], 'open', false)
		},
		hideAll(state) {
			Vue.set(state.terminal, 'open', false)
			Vue.set(state.portfolio, 'open', false)
			Vue.set(state.contact, 'open', false)
		}
	},

	
	actions: {}
})
