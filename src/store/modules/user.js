import * as api from '@/api'

export const user = {
    namespaced: true,
    state: {
        user: {
            data: null,
            error: '',
            loading: false
        }
    },
    getters: {
        isAuth (state) {
            return state.user.data !== null
        }
    },
    mutations: {
        SET_USER_DATA (state, payload) {
            state.user.data = payload
        },
        SET_USER_LOADING (state, payload) {
            state.user.loading = payload
        },
        SET_USER_ERROR (state, payload) {
            state.user.error = payload
        }
    },
    actions: {
        async fetchUser ({ commit }) {
            commit('SET_USER_LOADING', true)
            try {
                if (localStorage.getItem('token') !== null) {
                    const response = await api.user.getUser()
                    commit('SET_USER_DATA', response.data)
                }
            } catch (e) {
                commit('SET_USER_ERROR', 'не удалось получить данные')
            } finally {
                commit('SET_USER_LOADING', false)
            }
        }
    }
}
