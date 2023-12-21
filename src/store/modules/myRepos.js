import * as api from '@/api'

export const myRepos = {
    namespaced: true,
    state: {
        myRepos: {
            user: null,
            data: [],
            loading: false,
            error: ''
        }
    },
    mutations: {
        SET_MY_REPOS_USER (state, payload) {
            state.myRepos.user = payload
        },
        SET_MY_REPOS_DATA (state, payload) {
            state.myRepos.data = payload
        },
        SET_MY_REPOS_LOADING (state, payload) {
            state.myRepos.loading = payload
        },
        SET_MY_REPOS_ERROR (state, payload) {
            state.myRepos.error = payload
        }
    },
    actions: {
        async fetchMyRepos ({ commit, state }) {
            commit('SET_MY_REPOS_LOADING', true)
            try {
                const response = await api.myRepos.getMyRepos(state.myRepos.user)
                const data = response.data
                commit('SET_MY_REPOS_DATA', data)
            } catch (e) {
                commit('SET_MY_REPOS_ERROR', 'не удалось получить репозитарии')
            } finally {
                commit('SET_MY_REPOS_LOADING', false)
            }
        }
    }
}
