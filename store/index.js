import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)
import imageModule from './modules/imageModule.js'
import getters from './getters.js'
const store = new Vuex.Store({
	modules:{
		imageModule
	},
	getters
})

export default store