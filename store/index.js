//vuex 状态管理

import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		userInfo: uni.getStorageSync('USERINFO') || {}
	},
	mutations: {
		SET_USER_INFO(state, userInfo) {
			state.userInfo = userInfo;
		}
	},
	actions: {
		set_userinfo({commit},userInfo) {
			uni.setStorageSync('USERINFO',userInfo);
			commit('SET_USER_INFO',userInfo);
		}
	}
});

export default store