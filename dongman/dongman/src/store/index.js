import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex);

const store = new Vuex.Store({

	state:{
		title:""
	},

	actions:{
			
	},


	mutations:{
		title:function(state,payload){
			console.log(payload)
			store.state.title=payload
		},
		aaa:function(){
			
		}
	}

})


export default store;
